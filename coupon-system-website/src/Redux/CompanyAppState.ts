import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CompanyModel } from "../Models/Admin";
// import { ActionType } from './AuthAppState';

interface CompanyState {
  companies: CompanyModel[];
}

const initialState: CompanyState = {
  companies: [],
};

const companiesSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    
    getAllCompaniesAction(state, action: PayloadAction<CompanyModel[]>) {
      state.companies = action.payload;
    },

    addCompanyAction(state, action: PayloadAction<CompanyModel>) {
      state.companies.push(action.payload);
    },

  
    deleteCompanyAction(state, action: PayloadAction<number>) {
      const idToDelete = action.payload;
      state.companies = state.companies.filter(
        (company) => company.id !== idToDelete
      );
    },

    updateCompanyAction(state, action: PayloadAction<CompanyModel>) {
      const idx = state.companies.findIndex((c) => c.id === action.payload.id);
      state.companies[idx] = action.payload;
    },

    clearCompanyState(state){
      state.companies = [];

    }

    // getAllCustomerAction(state, action: PayloadAction<CompanyModel[]>) {
    //   state.companies = action.payload;
    // },
  },
});

export const {
  getAllCompaniesAction,
  deleteCompanyAction,
  addCompanyAction,
  updateCompanyAction,
  clearCompanyState,
} = companiesSlice.actions;

export const companyReducer = companiesSlice.reducer;
