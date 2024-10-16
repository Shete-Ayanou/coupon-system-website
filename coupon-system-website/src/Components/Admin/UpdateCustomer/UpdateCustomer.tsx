

import { useNavigate, useParams } from "react-router";
import "./UpdateCustomer.css";
import { SubmitHandler, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerModel } from "../../../Models/Customer";
import webApiService from "../../../Services/WebApiService";
import notifyService from "../../../Services/NotificationService";
import { useDispatch } from "react-redux";
import { updateCustomerAction } from "../../../Redux/CustomerAppState";
import { useState } from "react";
import store from "../../../Redux/Store";
import S from "../../../assets/Images/boss-babys.gif"


function UpdateCustomer(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const id = +(params.id || 0);
    const [obj, setObj] = useState<CustomerModel>(store.getState().customerReducer.customers?.filter(c => c.id === id)[0] || null) ;
    console.log(obj);
    const defaultValuesObj = { ...obj };

    const schema = zod.object({
        firstName: zod.string().nonempty("you must enter first name"),
        lastName: zod.string().nonempty("you must enter last name"),
        email: zod.string().nonempty("you must enter email"),
        password: zod.string().nonempty("you must enter password"),
    });

    const { register, handleSubmit, control, formState: { errors, isValid, isSubmitting }
    } = useForm<CustomerModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<CustomerModel> = (data: CustomerModel) => {
        console.log("Data sent to onSubmit:", data);
        return webApiService.updateCustomer(id, data)
            .then(res => {
                notifyService.success("customer is updated Successfully ✔️!!!");
                dispatch(updateCustomerAction(res.data));
                setObj(res.data);
                navigate(-1);
            })
            .catch(err => notifyService.error(err));
    };

    return (
        <div className="UpdateCustomer">

            <h1>Update Customer</h1>

            <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>

                <label htmlFor="id">Id</label>
                <input name="id" type="text" value={obj.id} disabled={true} />

                {(errors?.firstName) ? <span>{errors.firstName?.message}</span> : <label htmlFor="firstName">First Name</label>}
                <input {...register("firstName")} name="firstName" type="text" placeholder="Customer first name..." />

                {(errors?.lastName) ? <span>{errors.lastName?.message}</span> : <label htmlFor="lastName">Last Name</label>}
                <input {...register("lastName")} name="lastName" type="text" placeholder="Customer last name..." />

                {(errors?.email) ? <span>{errors.email?.message}</span> : <label htmlFor="email">Email</label>}
                <input {...register("email")} name="email" type="text" placeholder="Customer email..." />

                {(errors?.password) ? <span>{errors.password?.message}</span> : <label htmlFor="password">Password</label>}
                <input {...register("password")} name="password" type="text" placeholder="Customer password..." />

                <button disabled={!isValid || isSubmitting}>Update</button>
            </form>
            <img src={S} alt="b" className="Sb" />

        </div>
    );
}

export default UpdateCustomer;

