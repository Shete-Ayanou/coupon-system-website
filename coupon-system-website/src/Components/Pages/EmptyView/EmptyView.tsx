import "./EmptyView.css";
import Cry from "../../../assets/Images/boss-baby-sad.gif";

interface EmptyViewProps {
    msg:  string 
	
}

function EmptyView(props: EmptyViewProps): JSX.Element {
    return (
        <div className="EmptyView">
            <h2>{props.msg}</h2>
            <img src={Cry} alt="cry " />
			
        </div>
    );
}

export default EmptyView;
