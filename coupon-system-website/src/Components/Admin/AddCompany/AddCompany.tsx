import { Form, useNavigate } from 'react-router-dom';
import "./AddCompany.css";
import { useForm, SubmitHandler } from 'react-hook-form';
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanyModel } from "../../../Models/Admin";
import notifyService from "../../../Services/NotificationService";
import store from '../../../Redux/Store';
import { useDispatch } from 'react-redux';
import { addCompanyAction } from '../../../Redux/CompanyAppState';
import webApiService from '../../../Services/WebApiService';
import addCom from "../../../assets/Images/add com.png"




function AddCompany(): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<CompanyModel> = (data: CompanyModel) => {

        return webApiService.addCompany (data) 
            .then(res => {
                notifyService.success('Company Added Successfully ✔️ ');
                dispatch(addCompanyAction(res.data));
                navigate("/admin/companies");
            })
            .catch(err => notifyService.error(err))
    };

    const schema = zod.object({
        name: zod.string().nonempty("you must enter Company name"),
        email: zod.string().nonempty("you must enter Company email"),
        password: zod.string().nonempty("you must enter Company password"),
    });

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } }
        = useForm<CompanyModel>({ mode: "all", resolver: zodResolver(schema) });



        

    return (
        <div className="AddCompany">

            <h1 className='new'>Add new Company</h1>
            <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
                {(errors?.name) ? <span>{errors.name?.message}</span> : <label htmlFor="name">Name</label>}
                <input {...register("name")} name="name" type="text" placeholder="Company name..." />

                {(errors?.email) ? <span>{errors.email?.message}</span> : <label htmlFor="email">Email</label>}
                <input {...register("email")} name="email" type="text" placeholder="Company email..." />

                {(errors?.password) ? <span>{errors.password?.message}</span> : <label htmlFor="password">Password</label>}
                <input {...register("password")} name="password" type="text" placeholder="Company password..." />

                <button disabled={!isValid || isSubmitting} > ADD </button>
            </form>

            <img src= {addCom} />
        </div>
    );
}

export default AddCompany;
