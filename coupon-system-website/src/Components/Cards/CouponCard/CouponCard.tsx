import moment from "moment";
import { CouponModel } from "../../../Models/Coupon";
import "./CouponCard.css";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../Redux/Store";
import { ClientType } from "../../../Models/Login";
import webApiService from "../../../Services/WebApiService";
import notifyService from "../../../Services/NotificationService";
import { purchaseCouponAction } from "../../../Redux/CouponAppState";
import { useDispatch } from "react-redux";




export interface CouponCardProps {
    coupon: CouponModel;

}

export interface Purchase{
    customerId: number;
    coupon: CouponModel;
}





function CouponCard(props: CouponCardProps): JSX.Element {

    const dispatch = useDispatch();
    const navigate = useNavigate();

        function isCouponPurchasedAlready(id: number): boolean { // if return true = coupon is already purchased
            return store.getState().couponReducer.customerCoupons.some(coupon => coupon.id === id);
        }

    const purchase: Purchase = {
    customerId: store.getState().authReducer.user.id,
    coupon: props.coupon
};
    const isCompany =
        store.getState().authReducer.user.clientType === ClientType.COMPANY;
    const isCustomer =
        store.getState().authReducer.user.clientType === ClientType.CUSTOMER;
    const handlePurchase = (purchase: Purchase) => {

        


        return webApiService.purchaseCoupon(purchase)
            .then(res => {
                notifyService.success('Coupon Added Successfully ✔️ ');
                dispatch(purchaseCouponAction(purchase.coupon));
                navigate("/customers/purchaseCoupon")

            })
            .catch(err => notifyService.error(err))

    };



    return (
        <div className="CouponCard">

            <p>Id: {props.coupon.id}</p>
            <p>Category : {props.coupon.category}</p>
            <p>Title : {props.coupon.title}</p>
            <p>Description : {props.coupon.description}</p>
            <p>Amount : {props.coupon.amount}</p>
            <p>Price : {props.coupon.price}</p>
            <p>StartDate : {moment(props.coupon.startDate).format("DD/MM/yy")}</p>
            <p>EndDate : {moment(props.coupon.endDate).format("DD/MM/yy")}</p>
            <img className="PI" src={props.coupon.image} alt="Coupon Image" />



            <div className="row">
                {isCompany && (
                    <Link to={`/companies/deleteCoupon/${props.coupon.id}`}>
                        <button>🗑️ Delete Coupon</button>
                    </Link>
                )}

                {isCompany && (
                    <Link to={`/companies/updateCoupon/${props.coupon.id}`}>
                        <button>✏️ Update Company</button>
                    </Link>
                )}

                {isCustomer && (


                    <Link to={`/customers/purchaseCoupon/${props.coupon.id}`}>
                        <button className="purchase-bt" onClick={() => handlePurchase(purchase)}  disabled={isCouponPurchasedAlready(props.coupon.id)}>💸 Buy</button>
                    </Link>

                )}
            </div>
        </div>
    );
}

export default CouponCard;
