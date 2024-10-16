import { useNavigate, useParams } from "react-router-dom";
import "./DeleteCustomer.css";
import store from "../../../Redux/Store";
import notifyService from "../../../Services/NotificationService";
import { useDispatch } from "react-redux";
import { deleteCustomerAction } from "../../../Redux/CustomerAppState";
import webApiService from "../../../Services/WebApiService";
import boss from "../../../assets/Images/oh-my-god-boss-baby (1).gif"



function DeleteCustomer(): JSX.Element {

    const dispatch = useDispatch();

    const params = useParams();
    const id = +(params.id || 0);
    const navigate = useNavigate();

    const yes = () => {
        webApiService.deleteCustomer(id)
            .then(res => {
                notifyService.success(`deleted customer #${id} successfully`)
                dispatch(deleteCustomerAction(id));
                navigate(-1);
            })
            .catch(err => notifyService.error(err))
    }

    const no = () => {
        navigate(-1);

    }


    return (
        <div className="DeleteCustomer">

            <h1>Delete Customer</h1>
            <p>Are you sure you want to delete customer #{id}? </p>
            <button onClick={yes}>Yes</button>
            <button onClick={no}>Cancel</button>
            <img src={boss} alt="big boss" className="B" />


        </div>
    );
}

export default DeleteCustomer;
