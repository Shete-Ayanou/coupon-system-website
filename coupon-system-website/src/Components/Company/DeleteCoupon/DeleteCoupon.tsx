import { useDispatch } from "react-redux";
import "./DeleteCoupon.css";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCoupon } from "../../../Services/WebApiServiceCompany";
import notifyService from "../../../Services/NotificationService";
import { deleteCouponsAction } from "../../../Redux/CouponAppState";
import boss from "../../../assets/Images/oh-my-god-boss-baby (1).gif"


function DeleteCoupon(): JSX.Element {

    const dispatch = useDispatch();

    const params = useParams();
    const id = +(params.id || 0);

    const navigate = useNavigate();

    const yes = () => {
        deleteCoupon(id)
            .then(res => {
                notifyService.success(`deleted coupon #${id} successfully`)
                dispatch(deleteCouponsAction(id));
                navigate(-1);
            })
            .catch(err => notifyService.error(err))
    }
    const no = () => {
        navigate(-1);
    }

    return (
        <div className="DeleteCoupon">
            <h1>Delete Coupon</h1>
            <p>Are you sure you want to delete Coupon #{id}?</p>
            <div className="row">
                <button onClick={yes} className="danger">Yes</button>
                <button onClick={no}>Cancel</button>
                <img src={boss} alt="big boss" className="B" />

            </div>

        </div>
    );
}

export default DeleteCoupon;
