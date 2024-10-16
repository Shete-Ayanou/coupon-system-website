import "./PurchaseC.css";
import G from "../../../assets/Images/boss-baby-dance.gif"
import q from "../../../assets/Images/giphyaaa.gif"
import w from "../../../assets/Images/giphyF.gif"


function PurchaseC(): JSX.Element {
    return (
        <div className="PurchaseC">
            <h1 className="pa">Congratulations, you just purchased a coupon</h1>
            <img src={G} alt="Buy" className="gb" />
            <img src={q} alt="Buy" className="gb" />
            <img src={w} alt="Buy" className="as" />

        </div>
    );
}

export default PurchaseC;
