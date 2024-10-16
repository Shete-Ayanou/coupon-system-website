import { Form, useNavigate } from 'react-router-dom';
import "./AddCustomer.css";
import { useForm, SubmitHandler } from 'react-hook-form';
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerModel } from "../../../Models/Customer";
import notifyService from "../../../Services/NotificationService";
import store from '../../../Redux/Store';
import { useDispatch } from 'react-redux';
import { addCustomerAction } from '../../../Redux/CustomerAppState';
import webApiService from '../../../Services/WebApiService';
import add from "../../../assets/Images/add c.png"

function AddCustomer(): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<CustomerModel> = (data: CustomerModel) => {

        console.log("data" + data)
        return webApiService.addCustomer(data)
            .then(res => {
                notifyService.success('Customer Added Successfully ✔️ ');
                dispatch(addCustomerAction(res.data))

                navigate("/admin/customers");
            })
            .catch(err => notifyService.error(err))

    };

    const schema = zod.object({
        firstName: zod.string().nonempty("you must enter first name"),
        lastName: zod.string().nonempty("you must enter last name"),
        email: zod.string().nonempty("you must enter email"),
        password: zod.string().nonempty("you must enter password"),
    });

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } }
        = useForm<CustomerModel>({ mode: "all", resolver: zodResolver(schema) });

    return (
        <div className="AddCustomer">

            <h1 className='new'>Add new Customer</h1>
            <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
                {(errors?.firstName) ? <span>{errors.firstName?.message}</span> : <label htmlFor="firstName">First Name</label>}
                <input {...register("firstName")} name="firstName" type="text" placeholder="Customer first name..." />

                {(errors?.lastName) ? <span>{errors.lastName?.message}</span> : <label htmlFor="lastName">Last Name</label>}
                <input {...register("lastName")} name="lastName" type="text" placeholder="Customer last name..." />

                {(errors?.email) ? <span>{errors.email?.message}</span> : <label htmlFor="email">Email</label>}
                <input {...register("email")} name="email" type="text" placeholder="Customer email..." />

                {(errors?.password) ? <span>{errors.password?.message}</span> : <label htmlFor="password">Password</label>}
                <input {...register("password")} name="password" type="text" placeholder="Customer password..." />

                <button disabled={!isValid || isSubmitting} > ADD </button>
            </form>
            <div className='no-effects-image'>
                <img  src={add} />
            </div>


        </div>
    );
}

export default AddCustomer;



