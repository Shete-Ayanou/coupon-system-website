import TotalCompanies from "../../Admin/TotalCompanies/TotalCompanies";
import "./Footer.css";
import { FaGithub, FaWhatsapp } from "react-icons/fa";



function Footer(): JSX.Element {
    const year = new Date().getFullYear();

    return (
        <div className="Footer">
            <p>All Rights reserved to Daniel from John Bryce &copy; {year}</p>
            <span>
                <a href="https://github.com/Shete-Ayanou"><FaGithub /> </a>
                <a href="https://api.whatsapp.com/send/?phone=0528001127&text&type=phone_number&app_absent=0"><FaWhatsapp /> </a>

            </span>



        </div>
    );
}

export default Footer;
