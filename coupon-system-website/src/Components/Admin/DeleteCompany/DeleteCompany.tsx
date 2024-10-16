import { useNavigate, useParams } from "react-router-dom";
import "./DeleteCompany.css";
import notifyService from "../../../Services/NotificationService";
import store from "../../../Redux/Store";
import { useDispatch } from "react-redux";
import { deleteCompanyAction } from "../../../Redux/CompanyAppState";
import webApiService from "../../../Services/WebApiService";
import boss from "../../../assets/Images/oh-my-god-boss-baby (1).gif"


function DeleteCompany(): JSX.Element {

    const dispatch = useDispatch();


    const params = useParams();
    const id = +(params.id || 0);
    const navigate = useNavigate();

    const yes = () => {
        webApiService.deleteCompany(id)
            .then(res => {
                notifyService.success(`deleted company #${id} successfully`)
                dispatch(deleteCompanyAction(id));
                navigate(-1);
            })
            .catch(err => notifyService.error(err))

    }

    const no = () => {
        navigate(-1);

    }




    return (


        <div className="DeleteCompany">
            <h1>Delete company</h1>
            <p>Are you sure you want to delete company #{id}? </p>
            <button onClick={yes}>Yes</button>
            <button onClick={no}>Cancel</button>
            <img src={boss} alt="big boss" className="B" />


        </div>

    






    );
}

export default DeleteCompany;
