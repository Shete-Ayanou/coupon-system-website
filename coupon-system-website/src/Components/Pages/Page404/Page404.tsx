import "./Page404.css";
import  notFound from "../../../assets/Images/404.png";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
			<p>PAGE MOT FOUND</p>
            <img src={notFound} alt="npt found" />
            
        </div>
    );
}

export default Page404;
