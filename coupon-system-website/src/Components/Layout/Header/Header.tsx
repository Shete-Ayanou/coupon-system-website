import AuthMenu from "../../Auth/AuthMenu/AuthMenu";
import "./Header.css";
import bestBuy from "../../../assets/Images/couponForYou.png"

function Header(): JSX.Element {
    return (
        <div className="Header">
                <h1>The best site for buying coupons</h1>
                <img src= {bestBuy} alt="coupon for you" />
                
            <AuthMenu />
        </div>
    );
}

export default Header;
