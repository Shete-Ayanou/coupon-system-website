import axios, { AxiosResponse } from "axios";
import store from "../Redux/Store";
import urlService from "./UrlService";
import { CouponModel } from "../Models/Coupon";

export function  getCompanyCoupons(id: number): Promise<AxiosResponse<CouponModel[]>> {
    const headers = { 'Authorization': store.getState().authReducer.user.token };
    return axios.get<CouponModel[]>(urlService.company + "/" + id,  { headers });
}



export function deleteCoupon(id: number): Promise<AxiosResponse<any>> {
        const headers = { 'Authorization': store.getState().authReducer.user.token };
        return axios.delete<any>(`${urlService.company}/${id}`, { headers })
    }
    export function updateCoupon(id: number, coupon: CouponModel): Promise<AxiosResponse<any>>{
        const headers = { 'Authorization': store.getState().authReducer.user.token }
        return axios.put (`${urlService.company}/${id}`, coupon,{headers});

    }


    export function addCoupon(coupon: CouponModel): Promise<AxiosResponse<CouponModel>> {
        const headers = { 'Authorization': store.getState().authReducer.user.token };
        return axios.post<CouponModel>(`${urlService.company}/add`, coupon, { headers });
    }





 


