import { CompanyModel } from "../Models/Admin";
import { CouponModel } from "./../Models/Coupon";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { companyReducer } from "./CompanyAppState";
import store from "./Store";




interface CouponState {
  coupons: CouponModel[];
  customerCoupons: CouponModel[];
}



const initialState: CouponState = {
  coupons: [],
  customerCoupons:[],
};

const couponsSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {


    getAllCouponsAction(state, action: PayloadAction<CouponModel[]>) { // company
      state.coupons = action.payload;
    },

    deleteCouponsAction(state, action: PayloadAction<number>) { // company
      const idToDelete = action.payload;
      state.coupons = state.coupons.filter(
        (coupon) => coupon.id !== idToDelete
      );
    },


    updateCouponAction(state, action: PayloadAction<CouponModel> ){ // company
      const idx = state.coupons.findIndex((c) => c.id === action.payload.id);
      state.coupons[idx] =action.payload;
    },

    addCouponAction(state, action: PayloadAction<CouponModel>){ // company
      state.coupons.push(action.payload);
    },


    getAllCustomerCouponsAction(state, action: PayloadAction<CouponModel[]>) { // customer
      state.customerCoupons = action.payload;
    },

    purchaseCouponAction(state, action: PayloadAction<CouponModel>){ // customer
      state.customerCoupons.push(action.payload);
    },

    allCouponsAction(state, action: PayloadAction<CouponModel[]>) { // customer
      state.coupons = action.payload;
    },

    clearCouponState(state){
      state.coupons = [];
      state.customerCoupons=[];

    }

    




  },
});

export const {
getAllCouponsAction,
deleteCouponsAction,
updateCouponAction,
addCouponAction,
getAllCustomerCouponsAction,
purchaseCouponAction,
allCouponsAction,
clearCouponState,

  
  } = couponsSlice.actions;


  export const couponReducer = couponsSlice.reducer;

