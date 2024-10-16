import "./Login.css";
import { SubmitHandler, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginReqModel } from "../../../Models/Login";
import webApiService from "../../../Services/WebApiService";
import notifyService from "../../../Services/NotificationService";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../../Redux/AuthAppState";
import { useNavigate } from "react-router";
import { loggedInAsAdmin } from "../../../Redux/GuardAppState";
import { useEffect, useState } from "react";
import store from "../../../Redux/Store";
import logpic from "../../../assets/Images/login.png"
import logpic2 from "../../../assets/Images/lock-removebg-preview.png"
import Cyber from "../../../assets/Images/Cyber.png"


function Login(): JSX.Element {

    const dispatch = useDispatch();

    const navigate = useNavigate();



    const schema = zod.object({
        email: zod.string().email("you should provide valid email"),
        password: zod.string().min(4, "Minimum 4 characters"),
        clientType: zod.string()
    })


    const { register, handleSubmit,
        formState: { errors, isValid, isSubmitting } } =
        useForm<LoginReqModel>({ mode: "all", resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<LoginReqModel> = (data: LoginReqModel) => {
        return webApiService.login(data)
            .then(res => {
                dispatch(userLoggedIn(res.data));
                navigate("/home")
                if (data.email === `admin@admin.com`) {
                    dispatch(loggedInAsAdmin);
                    navigate("/enterM");
                } else if (data.clientType === "CUSTOMER") {
                    navigate("/customers/getAllCoupon");
                } else if (data.clientType === "COMPANY") {
                    navigate("/enterCom");
                } else {
                    navigate("/home");
                }
            })
            .catch(err => notifyService.error(err));
    };

    return (
        <div className="Login">
            <h1 className="Log">Login</h1>

            <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
                {(errors?.email) ? <span>{errors.email.message}</span> : <label htmlFor="email">Email</label>}
                <input {...register("email")} name="email" type="email" placeholder="Email..." />

                {(errors?.password) ? <span>{errors.password.message}</span> : <label htmlFor="password">Password</label>}
                <input {...register("password")} name="password" type="password" placeholder="Password..." />

                <select {...register("clientType")}>
                    <option value="ADMINISTRATOR" >Admin</option>
                    <option value="COMPANY" >Company</option>
                    <option value="CUSTOMER" >Customer</option>
                </select>
                <button disabled={!isValid || isSubmitting}>Login</button>
            </form>


            <div>
                <img src={logpic} />
            </div>



        </div>


    );
}

export default Login;

