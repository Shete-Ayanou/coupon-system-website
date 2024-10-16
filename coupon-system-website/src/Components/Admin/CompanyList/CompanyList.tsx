import { useEffect, useState } from "react";
import "./CompanyList.css";
import { CompanyModel } from "../../../Models/Admin";
import notifyService from "../../../Services/NotificationService";
import CompanyCard from "../../Cards/CompanyCard/CompanyCard";
import store from "../../../Redux/Store";
import EmptyView from "../../Pages/EmptyView/EmptyView";
import { getAllCompaniesAction } from "../../../Redux/CompanyAppState";
import webApiService from "../../../Services/WebApiService";

function CompanyList(): JSX.Element {


    const [companies, setCompanies] = useState<CompanyModel[]>(store.getState().companyReducer.companies);
    const [searchId, setSearchId] = useState<string>("");
    const [searchedCompany, setSearchedCompany] = useState<CompanyModel | null>(null);

    useEffect(() => {
        if (companies.length > 0) {
            return;
        }
            webApiService.getAllCompanies()
            .then(res => {
                notifyService.success("all the companies")
                console.log(res.data)
                setCompanies(res.data);
                store.dispatch(getAllCompaniesAction(res.data));

            })
            .catch(err => {
                notifyService.error(err);
                console.log(err);
            })
    }, [])


    const handleSearch = () => {
        const foundCompany = companies.find(company => company.id=== +searchId);
        if (foundCompany) {
            setSearchedCompany(foundCompany);
        } else {
            notifyService.error("Company not found.");
            setSearchedCompany(null);
        }
    }

    return (
        <div className="CompanyList">
            {/* <h1>Companies </h1> */}


            <div className="company-search-container">
                <input type="text" placeholder="Search by ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                <button onClick={handleSearch}>Search Company</button>
            </div>
            {
                searchedCompany ? (
                    <CompanyCard key={`comp-card-searched`} company={searchedCompany} />
                ) : (
                    companies.length !== 0 ? (
                        companies.map((c, idx) => <CompanyCard key={`comp-card-${idx}`} company={c} />)
                    ) : (
                        <EmptyView msg="there are no companies available right now" />
                    )
                )
            }

        

        </div>
    );
}

export default CompanyList;
