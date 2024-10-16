import { useState } from "react";
import { CompanyModel } from "../../../Models/Admin";
import "./CompanyCard.css";
import PNG from "../../../assets/Images/bernds.png"
import { Link } from "react-router-dom";


interface CompanyCardProps {
    company: CompanyModel;

}

function CompanyCard(props: CompanyCardProps): JSX.Element {

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (

        <div className="CompanyCard card">
            <img
                src={PNG} 
                alt={props.company.name}
                onClick={toggleDetails}
                className="company-image"
            />
            {showDetails && (
                <div className="company-details">
                    <p>id: {props.company.id}</p>
                    <p>Name: {props.company.name}</p>
                    <p>Email: {props.company.email}</p>
                    <p>{(props.company.coupons?.length > 0) ?
                        <span>This company holds {props.company.coupons.length} coupons.</span> :
                        <span>No Coupons</span>}</p>
                </div>
            )}

            <div className="row">
                <Link to={`/admin/updateCompany/${props.company.id}`} >
                    <button > ✏️ Update Company  </button>
                </Link>
                
                <Link to={`/admin/deleteCompany/${props.company.id}`} >
                    <button> 🗑️ Delete Company  </button>
                </Link>
            </div>
        </div>


    );
}

export default CompanyCard;
