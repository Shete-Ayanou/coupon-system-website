import { useEffect } from "react";
import "./Logout.css";
import { userLoggedOut } from "../../../Redux/AuthAppState";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCompanyState } from "../../../Redux/CompanyAppState";
import { clearCouponState } from "../../../Redux/CouponAppState";
import { clearCustomerState } from "../../../Redux/CustomerAppState";

function Logout(): JSX.Element {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userLoggedOut());
        dispatch(clearCompanyState());  
        dispatch(clearCustomerState());
        dispatch(clearCouponState());   
        navigate("/login");
    }, []);

    return (

        <> </>
    );
}

export default Logout;
