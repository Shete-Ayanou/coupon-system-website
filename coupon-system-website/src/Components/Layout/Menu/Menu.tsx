import { Link } from "react-router-dom";
import "./Menu.css";
import { useEffect, useState } from "react";
import summer from "../../../assets/Images/travel.png"
import { LoginResModel } from "../../../Models/Login";
import store from "../../../Redux/Store";


function Menu(): JSX.Element {

    const [currentClient, setCurrentClient] = useState<LoginResModel>(store.getState().authReducer.user);

    useEffect(() => {
        store.subscribe(() => setCurrentClient(store.getState().authReducer.user))
    }, [])

    return (
        <div className="Menu">
            <Link to={"/home"}  >Home</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/map"}>Location 📍 </Link>

            {
                currentClient?.clientType === "ADMINISTRATOR" &&
                <>
                    <Link to={"/admin/companies"}>Companies</Link>
                    <Link to={"/admin/customers"}>Customers</Link>
                    <Link to={"/admin/companies/AddCompany"}>Add new Company</Link>
                    <Link to={"/admin/customers/AddCustomers"}>Add new Customer</Link>

                </>
            }

            {
                currentClient?.clientType === "COMPANY" &&
                <>
                    <Link to={`/companies/getCompanyCoupons`}>Company Coupons</Link>
                    <Link to={"/companies/AddCoupon"}>Add new Coupons</Link>


                </>
            }

            {
                currentClient?.clientType === "CUSTOMER" &&
                <>
                    <Link to={"/customers/getAllCoupon"}>SHOP 🛒</Link>
                    <Link to={`/customers/getCustomerCoupons`}>My Coupons</Link>
                </>
            }
            {
                
                <img src={summer} alt="summer" className="B" />

            }

        </div>

        
    );
}

export default Menu;
