import React, { useEffect, useState } from "react";
import "./CustomerList.css";
import { CustomerModel } from '../../../Models/Customer';
import store from "../../../Redux/Store";
import notifyService from "../../../Services/NotificationService";
import CustomerCard from "../../Cards/CustomerCard/CustomerCard";
import { getAllCustomerAction } from "../../../Redux/CustomerAppState";
import webApiService from "../../../Services/WebApiService";

function CustomerList(): JSX.Element {
    const [customers, setCustomers] = useState<CustomerModel[]>(store.getState().customerReducer.customers);

    const [searchId, setSearchId] = useState<string>("");
    const [searchedCustomer, setSearchedCustomer] = useState<CustomerModel | null>(null);

    useEffect(() => {
        if (customers?.length > 0) {
            return;
        }
        webApiService.getAllCustomers()
            .then(res => {
                notifyService.success("all the customers")
                setCustomers(res.data);
                store.dispatch(getAllCustomerAction(res.data));
                console.log(res.data)
            })
            .catch(err => {
                notifyService.error(err);
                console.log(err);
            })
    }, [])

    const handleSearch = () => {
        const foundCustomer = customers.find(customer => customer.id === +searchId);
        if (foundCustomer) {
            setSearchedCustomer(foundCustomer);
        } else {
            notifyService.error("Customer not found.");
            setSearchedCustomer(null);
        }
    }

    return (
        <div className="CustomerList">

            <div className="search-container">
                <input type="text" placeholder="Search by ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                <button onClick={handleSearch}>Search Customer</button>
            </div>

            {
                searchedCustomer ? (
                    <CustomerCard key={`cos-card-searched`} customer={searchedCustomer} />
                ) : (
                    customers?.map((c, idx) => <CustomerCard key={`cos-card-${idx}`} customer={c} />)
                )
            }
        </div>
    );
}

export default CustomerList;
