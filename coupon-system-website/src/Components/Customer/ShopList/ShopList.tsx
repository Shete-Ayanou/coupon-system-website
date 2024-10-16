import { useEffect, useState } from "react";
import "./ShopList.css";
import store from "../../../Redux/Store";
import { CouponModel } from "../../../Models/Coupon";
import webApiService from "../../../Services/WebApiService";
import notifyService from "../../../Services/NotificationService";
import { allCouponsAction } from "../../../Redux/CouponAppState";
import CouponCard from "../../Cards/CouponCard/CouponCard";
import EmptyView from "../../Pages/EmptyView/EmptyView";
import p from "../../../assets/Images/3d.png"

function ShopList(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().couponReducer.coupons);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        if (coupons.length > 0) {
            return;
        }
        webApiService.getAllCoupon()
            .then((res) => {
                notifyService.success("All the coupons");
                console.log(res.data);
                setCoupons(res.data);
                store.dispatch(allCouponsAction(res.data));
            })
            .catch((err) => {
                notifyService.error(err);
                console.log(err);

            });
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };



    const handleSearch = () => {
        const filteredCoupons = store.getState().couponReducer.coupons.filter((coupon) => {
            if (selectedCategory && coupon.category !== selectedCategory) {
                return false;
            }

            return true;
        });

        setCoupons(filteredCoupons);
    };

    return (
        <div className="CouponList">
            <h1>Coupons</h1>


            <div className="search-options">

                <select onChange={(e) => handleCategoryChange(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="FOOD">FOOD 🍔</option>
                    <option value="HEALTH">HEALTH 💊</option>
                    <option value="SPORTS">SPORTS 🏓</option>
                    <option value="COMPUTERS">COMPUTERS 🖥️</option>
                    <option value="VACATIONS">VACATIONS 🏖️</option>
                </select>
                <button onClick={handleSearch}>Search</button>
                <img src={p} alt="Buy" className="pB" />
            </div>

            <div className="coupon-list">
            {coupons.length !== 0 ? (
                coupons.map((c, idx) => <CouponCard key={`coupon-card-${idx}`} coupon={c} />)
            ) : (
                <EmptyView msg="No matching coupons found." />
            )}

            </div>
        
        </div>



    );
}

export default ShopList;

