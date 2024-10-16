import { useNavigate, useParams } from "react-router";
import "./UpdateCompany.css";
import { SubmitHandler, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanyModel } from "../../../Models/Admin";
import webApiService from "../../../Services/WebApiService";
import notifyService from "../../../Services/NotificationService";
import { useDispatch } from "react-redux";
import { updateCompanyAction } from "../../../Redux/CompanyAppState";
import { useState } from "react";
import store from "../../../Redux/Store";
import S from "../../../assets/Images/boss-babys.gif"


function UpdateCompany(): JSX.Element {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const id = +(params.id || 0);
    const [obj, setObj] = useState<CompanyModel>(store.getState().companyReducer.companies.filter(c => c.id === id)[0])
    console.log(obj);
    const defaultValuesObj = { ...obj };

    const schema = zod.object({
        name: zod.string().nonempty("you must enter Company name"),
        email: zod.string().nonempty("you must enter Company email"),
        password: zod.string().nonempty("you must enter Company password"),
    });

    const { register, handleSubmit, control, formState: { errors, isValid, isSubmitting }
    } = useForm<CompanyModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<CompanyModel> = (data: CompanyModel) => {
        console.log("Data sent to onSubmit:", data);
        return webApiService.updateCompany(id, data)
            .then(res => {
                notifyService.success("company is updated Successfully ✔️!!!")
                dispatch(updateCompanyAction(res.data));
                setObj(res.data);
                navigate("/admin/companies");
                console.log("Data sent to onSubmit:", data);
            })
            .catch(err => notifyService.error(err))


    };


    return (
        <div className="UpdateCompany">

            <h1>Update  Company</h1>

            <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)} >

                <label htmlFor="id">Id</label>
                <input name="id" type="text" value={obj.id} disabled={true} />


                {(errors?.name) ? <span>{errors.name?.message}</span> : <label htmlFor="name">Name</label>}
                <input {...register("name")} name="name" type="text" placeholder="Company name..." />

                {(errors?.email) ? <span>{errors.email?.message}</span> : <label htmlFor="email">Email</label>}
                <input {...register("email")} name="email" type="text" placeholder="Company email..." />

                {(errors?.password) ? <span>{errors.password?.message}</span> : <label htmlFor="password">Password</label>}
                <input {...register("password")} name="password" type="text" placeholder="Company password..." />

                <button disabled={!isValid || isSubmitting} > Update </button>
            </form>
            <img src={S} alt="b" className="Sb" />


        </div>
    );
}

export default UpdateCompany;
