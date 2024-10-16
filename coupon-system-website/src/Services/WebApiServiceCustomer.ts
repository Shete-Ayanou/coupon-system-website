import axios, { AxiosResponse } from "axios";
import { CustomerModel } from "../Models/Customer";
import store from "../Redux/Store";
import urlService from "./UrlService";




export function  getCustomerCoupons(id: number): Promise<AxiosResponse<CustomerModel[]>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.get<CustomerModel[]>(urlService.customer + "/" + id,  { headers });
}