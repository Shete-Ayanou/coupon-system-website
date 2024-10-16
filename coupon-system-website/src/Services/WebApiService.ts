import axios, { AxiosResponse } from "axios";
import { LoginReqModel, LoginResModel } from "../Models/Login";
import urlService from "./UrlService";
import { CompanyModel } from '../Models/Admin';
import store from "../Redux/Store";
import { CustomerModel } from "../Models/Customer";
import { CouponModel } from "../Models/Coupon";
import {  Purchase } from "../Components/Cards/CouponCard/CouponCard";

class WebApiService {
    public login(data: LoginReqModel): Promise<AxiosResponse<LoginResModel>> {
        console.log(data);
        return axios.post<LoginResModel>(urlService.auth + "/login", data);
    }

    public getAllCompanies(): Promise<AxiosResponse<CompanyModel[]>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.get<CompanyModel[]>(urlService.admin + "/" + "companies", { headers });
}

public getAllCustomers(): Promise<AxiosResponse<CustomerModel[]>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.get<CustomerModel[]>(urlService.admin + "/" + "customers", { headers });
}

public deleteCompany(id: number): Promise<AxiosResponse<any>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.delete<any>(`${urlService.admin}/${id}`, { headers })
}
public addCompany(company: CompanyModel): Promise<AxiosResponse<CompanyModel>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.post<CompanyModel>(urlService.admin, company, { headers });
}


public deleteCustomer(id: number): Promise<AxiosResponse<any>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.delete<any>(`${urlService.admin}/customers/${id}`, { headers })
}

public updateCompany(id: number, company: CompanyModel): Promise<AxiosResponse<any>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token }
    return axios.put(`${urlService.admin}/${id}`, company, { headers });
}

public updateCustomer(id: number, customer: CustomerModel): Promise<AxiosResponse<any>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token }
    return axios.put(`${urlService.admin}/customers/${id}`, customer, { headers });

}

public addCustomer(customer: CustomerModel): Promise<AxiosResponse<CustomerModel>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.post<CustomerModel>(urlService.admin  + "/customers", customer, { headers });
}

public updateCoupon( coupon: CouponModel): Promise<AxiosResponse<any>>{
    const headers = { 'Authorization': store.getState().authReducer.user.token }
    console.log(coupon.id);
    return axios.put (`${urlService.company}/update`, coupon,{headers});

}

public getCompanyCoupons(id: number): Promise<AxiosResponse<CouponModel[]>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.get<CouponModel[]>(urlService.company + "/" + id,  { headers });
}

public addCoupon(coupon: CouponModel): Promise<AxiosResponse<CouponModel>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.post<CouponModel>(`${urlService.company}/add`, coupon, { headers });
}


public  getCustomerCoupons(id: number): Promise<AxiosResponse<CouponModel[]>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.get<CouponModel[]>(urlService.customer + "/" + id,  { headers });
}


public purchaseCoupon(props: Purchase): Promise<AxiosResponse<Purchase>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token }; 
    return axios.post<Purchase>(`${urlService.customer}/purchase`, props, { headers });

}


public getAllCoupon(): Promise<AxiosResponse<CouponModel[]>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.get<CouponModel[]>(urlService.customer + "/" + "allCoupons", { headers });
}





}










const webApiService = new WebApiService();
export default webApiService;
