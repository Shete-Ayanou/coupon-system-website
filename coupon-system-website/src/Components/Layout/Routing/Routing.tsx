import { Routes, Route } from "react-router";
import App from "../../../App";
import AddCompany from "../../Admin/AddCompany/AddCompany";
import AddCustomer from "../../Admin/AddCustomer/AddCustomer";
import CompanyList from "../../Admin/CompanyList/CompanyList";
import CustomerList from "../../Admin/CustomerList/CustomerList";
import DeleteCompany from "../../Admin/DeleteCompany/DeleteCompany";
import DeleteCustomer from "../../Admin/DeleteCustomer/DeleteCustomer";
import UpdateCompany from "../../Admin/UpdateCompany/UpdateCompany";
import UpdateCustomer from "../../Admin/UpdateCustomer/UpdateCustomer";
import Login from "../../Auth/Login/Login";
import Logout from "../../Auth/Logout/Logout";
import Register from "../../Auth/Register/Register";
import AddCoupon from "../../Company/AddCoupon/AddCoupon";
import DeleteCoupon from "../../Company/DeleteCoupon/DeleteCoupon";
import UpdateCoupon from "../../Company/UpdateCoupon/UpdateCoupon";
import PurchaseC from "../../Customer/PurchaseC/PurchaseC";
import ShopList from "../../Customer/ShopList/ShopList";
import About from "../../Pages/About/About";
import EnterCom from "../../Pages/EnterCom/EnterCom";
import EnterM from "../../Pages/EnterM/EnterM";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import Map from "../../Pages/Map/Map";
import CustomerCouponList from "../../Customer/CustomerCouponList/CustomerCouponList";
import CompanyCouponList from "../../CompanyCouponList/CompanyCouponList";



function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/enterM" element={<EnterM />} />
                <Route path="/enterCom" element={<EnterCom />} />
                <Route path="/about" element={<About />} />
                <Route path="/Map" element={<Map />} />
                <Route path="/admin/companies" element={<CompanyList />} />
                <Route path="/admin/companies/addCompany" element={<AddCompany />} />
                <Route path="/admin/deleteCompany/:id" element={<DeleteCompany />} />
                <Route path="/admin/updateCompany/:id" element={<UpdateCompany />} />
                <Route path="/admin/updateCustomer/:id" element={<UpdateCustomer />} />
                <Route path="/admin/deleteCustomer/:id" element={<DeleteCustomer />} />
                <Route path="/admin/customers/addCustomers" element={<AddCustomer />} />
                <Route path="/admin/customers" element={<CustomerList />} />
                <Route path="/companies/getCompanyCoupons" element={<CompanyCouponList />} />
                <Route path="/companies/deleteCoupon/:id" element={<DeleteCoupon />} />
                <Route path="/companies/updateCoupon/:id" element={<UpdateCoupon />} />
                <Route path="/companies/addCoupon" element={<AddCoupon />} />
                <Route path="/customers/getCustomerCoupons" element={<CustomerCouponList/>} />
                <Route path="/customers/getAllCoupon" element={<ShopList />} />
                <Route path="/customers/purchaseCoupon" element={<PurchaseC />} />
                <Route path="*" element={<Page404 />} />




            </Routes>

        </div>
    );
}

export default Routing;
