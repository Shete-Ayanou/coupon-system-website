// This is store.ts file
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './AuthAppState';
import { companyReducer } from './CompanyAppState';
import { guardReducer } from './GuardAppState';
import { customerReducer } from './CustomerAppState';
import { couponReducer } from './CouponAppState';


// This is rootReducer
const rootReducer = {
    authReducer: authReducer,
    companyReducer: companyReducer,
    guardReducer: guardReducer,
    customerReducer : customerReducer,
    couponReducer : couponReducer,
    
    // add more reducers here if needed
};

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;

export default store;
