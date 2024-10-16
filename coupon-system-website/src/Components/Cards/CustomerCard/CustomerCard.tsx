import { CustomerModel } from "../../../Models/Customer";
import "./CustomerCard.css";
import PNG from "../../../assets/Images/customer.png"
import { useState } from "react";
import { Link } from "react-router-dom";

interface CustomerCardProps {
    customer: CustomerModel;

}

function CustomerCard(props: CustomerCardProps): JSX.Element {

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return (
        <div className="CustomerCard">

            <img
                src={PNG}
                alt={props.customer.firstName}
                onClick={toggleDetails}
                className="customer-image"
            />
            {true && (
                <div className="customer-details">
                    <p>id: {props.customer.id}</p>
                    <p>Name: {props.customer.firstName}</p>
                    <p>Last Name: {props.customer.lastName}</p>
                    <p>Email: {props.customer.email}</p>
                    <p>{(props.customer.coupons?.length > 0) ?
                        <span>This customer holds {props.customer.coupons.length} coupons.</span> :
                        <span>No Coupons</span>}</p>
                </div>
            )}
            <div className="row">

                <Link to={`/admin/updateCustomer/${props.customer.id}`} >
                    <button> ✏️ Update Customer  </button>
                </Link>

                <Link to={`/admin/deleteCustomer/${props.customer.id}`} >
                    <button className="B"> 🗑️ Delete Customer  </button>
                </Link>



            </div>

        </div>



    );
}

export default CustomerCard;
