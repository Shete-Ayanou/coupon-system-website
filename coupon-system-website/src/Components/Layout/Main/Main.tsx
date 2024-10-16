import { Outlet } from "react-router";
import "./Main.css";
import Routing from "../Routing/Routing";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <Routing/>
            <Outlet/>
        </div>
    );
}

export default Main;
