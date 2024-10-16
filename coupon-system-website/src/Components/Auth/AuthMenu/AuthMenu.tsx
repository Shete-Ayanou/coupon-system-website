import "./AuthMenu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";

function AuthMenu(): JSX.Element {


    const user = useSelector((state: RootState) => state.authReducer.user)

    return (
        <div className="AuthMenu">


            {
                (user.token)
                    ?
                    <>
                        <p> connected as {user.email} <Link to="logout" >Logout</Link>  </p>
                    </>
                    :
                    <>
                        <p className="H">Hello gust &nbsp;&nbsp;&nbsp;
                            {/* <Link to="register" >Register</Link> */}
                            &nbsp;&nbsp;&nbsp;
                            <Link to="login"> login</Link>
                        </p>
                    </>
            }

        </div>
    );
}

export default AuthMenu;
