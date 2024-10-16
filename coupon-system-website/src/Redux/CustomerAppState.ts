import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CustomerModel } from "../Models/Customer";

interface CustomerState {
  customers: CustomerModel[];
}

const initialState: CustomerState = {
  customers: [],
};

const customersSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {

    deleteCustomerAction(state, action: PayloadAction<number>) {
      const idToDelete = action.payload;
      state.customers = state.customers.filter(
        (customer) => customer.id !== idToDelete
      );
    },

    addCustomerAction(state, action : PayloadAction<CustomerModel>){
        state.customers.push(action.payload);
    },

    updateCustomerAction(state, action: PayloadAction<CustomerModel>) {
      const idx = state.customers.findIndex((c) => c.id === action.payload.id);
      state.customers[idx] = action.payload;
    },


    getAllCustomerAction(state, action: PayloadAction<CustomerModel[]>) {
      state.customers = action.payload;
    },

     clearCustomerState(state){
      state.customers = [];
    }

    // getAllCustomerCouponsAction(state, action: PayloadAction<CouponModel[]>) {
    //   state.customers = action.payload;
    // },

    // purchaseCouponAction(state, action: PayloadAction <CustomerModel>) {

    // }


    // purchaseCouponAction(state, action: PayloadAction<CouponModel>){
    //   state.coupons.push(action.payload);
    // },

    // addCouponAction(state, action: PayloadAction<CouponModel>){
    //   state.coupons.push(action.payload);
    // },




  },
});

export const {
  deleteCustomerAction,
  getAllCustomerAction,
  addCustomerAction,
  updateCustomerAction,
  clearCustomerState,
} = customersSlice.actions;

export const customerReducer = customersSlice.reducer;
