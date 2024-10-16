import "./EnterM.css";
import boss from "../../../assets/Images/the-boss-is-back-baby-boss-baby.gif"

function EnterM(): JSX.Element {
    return (
        <div className="EnterM">
            <div>
            <h1 className="big boss" >Hello Big Boss</h1>
            <h1 className="big boss2">Please choose what you would like to do</h1>
            </div>
            <img src={boss} alt="big boss"  className="B"/>

			
        </div>
    );
}

export default EnterM;
