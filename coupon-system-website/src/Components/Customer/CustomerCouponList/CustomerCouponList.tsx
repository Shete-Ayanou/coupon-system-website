import { useEffect, useState } from "react";
import "./CustomerCouponList.css";
import { CouponModel } from "../../../Models/Coupon";
import store from "../../../Redux/Store";
import notifyService from "../../../Services/NotificationService";
import { getAllCustomerCouponsAction } from "../../../Redux/CouponAppState";

import EmptyView from "../../Pages/EmptyView/EmptyView";

import webApiService from "../../../Services/WebApiService";
import CouponCard from "../../Cards/CouponCard/CouponCard";
import G from "../../../assets/Images/woohoo-tabitha-templeton.gif"


function CustomerCouponList(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().couponReducer.customerCoupons);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [maxPrice, setMaxPrice] = useState("");


    const customerId = store.getState().authReducer.user.id;


    useEffect(() => {
        console.log(customerId);
        if (coupons.length > 0) {
            return;
        }
        
        webApiService
            .getCustomerCoupons(store.getState().authReducer.user.id)
            .then((res) => {
                notifyService.success("All the coupons");
                console.log(res.data);
                setCoupons(res.data);
                store.dispatch(getAllCustomerCouponsAction(res.data));
            })
            .catch((err) => {
                notifyService.error(err);
                console.log(err);

            });
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleMaxPriceChange = (price: string) => {
        setMaxPrice(price);
    };

    const handleSearch = () => {
        const filteredCoupons = store.getState().couponReducer.coupons.filter((coupon) => {
            if (selectedCategory && coupon.category !== selectedCategory) {
                return false;
            }

            if (maxPrice && coupon.price > parseInt(maxPrice)) {
                return false;
            }

            return true;
        });

        setCoupons(filteredCoupons);
    };


    return (

        <div className="CouponList">
            <h1>My Coupons</h1>
            <img src={G} alt="Buy" className="gb" />
            <div className="search-options">
                <input
                    type="text"
                    placeholder="Enter Max Price"
                    onChange={(e) => handleMaxPriceChange(e.target.value)}
                />

                <select onChange={(e) => handleCategoryChange(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="FOOD">FOOD 🍔</option>
                    <option value="HEALTH">HEALTH 💊</option>
                    <option value="SPORTS">SPORTS 🏓</option>
                    <option value="COMPUTERS">COMPUTERS 🖥️</option>
                    <option value="VACATIONS">VACATIONS 🏖️</option>
                </select>

                <button onClick={handleSearch}>Search</button>
            </div>
            {coupons.length !== 0 ? (
                coupons.map((c, idx) => <CouponCard key={`coupon-card-${idx}`}  coupon={c} />)
            ) : (
                <EmptyView msg="No matching coupons found." />
            )}
        </div>


    );
}

export default CustomerCouponList;
