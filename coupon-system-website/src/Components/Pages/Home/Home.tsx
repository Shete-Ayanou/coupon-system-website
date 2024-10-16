import "./Home.css";
import summer from "../../../assets/Images/summer.png"
import ship from "../../../assets/Images/ship.png"
import gift from "../../../assets/Images/gift.png"
import save from "../../../assets/Images/savingMoney.png"
import sale from "../../../assets/Images/sale.png"
import enjoy from "../../../assets/Images/enjoy.png"
import Shopping from "../../../assets/Images/shoping.png"
import gm from "../../../assets/Images/gm.png"
import cashBack from "../../../assets/Images/cashBack.png"
import ch from "../../../assets/Images/ch.png"
import plan from "../../../assets/Images/plan.png"
import s2 from "../../../assets/Images/s2.png"
import phon from "../../../assets/Images/phon.png"
import sound from "../../../assets/Images/sound.png"
import sony from "../../../assets/Images/sony.png"
import bestBuy from "../../../assets/Images/couponForYou.png"
import pr11  from "../../../assets/Images/pr11.png"
import pr22  from "../../../assets/Images/pr22.png"
import pr33  from "../../../assets/Images/pr33.png"
import pr44  from "../../../assets/Images/pr44.png"
// import bigS1  from "../../../assets/Images/bigSale.png"
// import bigS2  from "../../../assets/Images/wallet.png"
// import bigS3  from "../../../assets/Images/money.png"





function Home(): JSX.Element {


    return (
        <div className="Home">



            <div className="p1">
                <img src={summer} alt="summer" className="A" />
                <img src={ship} alt="ship" className="B" />
                <img src={gift} alt="gift" className="C" />
                <img src={save} alt="save" className="D" />
                <img src={sale} alt="sale" className="E" />
                <img src={enjoy} alt="enjoy" className="F" />
                <img src={Shopping} alt="Shopping" className="G" />
                <img src={gm} alt="gm" className="H" />
            </div>

            <div className="p2">
                <img src={cashBack} alt="cashBack" className="I" />
                <img src={ch} alt="ch" className="J" />
                <img src={plan} alt="plan" className="K" />
                <img src={s2} alt="s2" className="L" />
                <img src={phon} alt="phon" className="M" />
                <img src={sound} alt="sound" className="N" />
                <img src={sony} alt="sony" className="P" />
            </div>


            <div className="OU">
                <h1>Our members saving
                    money with </h1>
                    <img src= {bestBuy} alt="coupon for you" />
            </div>

            {/* <div className="p3">
            <img src={pr11} alt="sony" className="P" />
            </div> */}

            <div className="pr">
            <img src={pr11} alt="pr11" className="P1" />
            <img src={pr22} alt="pr22" className="P2" />
            <img src={pr33} alt="pr33" className="P3" />
            <img src={pr44} alt="pr44" className="P4" />
            </div>

             <div className="big-sale">
            {/* <img src={bigS1} alt="bigS1" className="P5" />
            <img src={bigS2} alt="bigS2" className="P6" />
            <img src={bigS3} alt="bigS3" className="P7" /> */}
            </div> 

        </div>
    );
}

export default Home;

