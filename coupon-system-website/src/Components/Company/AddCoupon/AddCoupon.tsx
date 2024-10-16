import "./AddCoupon.css";
import { useNavigate } from "react-router-dom";
import * as zod from 'zod';
import { CouponModel } from "../../../Models/Coupon";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import notifyService from "../../../Services/NotificationService";
import { addCouponAction } from "../../../Redux/CouponAppState";
import store from "../../../Redux/Store";
import webApiService from "../../../Services/WebApiService";

function AddCoupon(): JSX.Element {


    const navigate = useNavigate();

    const schema = zod.object({
        category: zod.string(),
        title: zod.string().nonempty("you must enter title"),
        description: zod.string().nonempty("you must enter description"),
        amount: zod.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Please enter an amount"
        }),
        image: zod.string().url("invalid image URL"),
        price: zod.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
            message: "Please enter an price"
        }),
        startDate: zod.string().transform((dateString, ctx) => {
            const date = new Date(dateString);
            if (!zod.date().safeParse(date).success) {
                ctx.addIssue({
                    code: zod.ZodIssueCode.invalid_date,
                })
            }
            return date;
        }),
        endDate: zod.string().transform((dateString, ctx) => {
            const date = new Date(dateString);
            if (!zod.date().safeParse(date).success) {
                ctx.addIssue({
                    code: zod.ZodIssueCode.invalid_date,
                })
            }
            return date;
        }),
    
    });


    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } }
        = useForm<CouponModel>({ mode: "all", resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<CouponModel> = (data: CouponModel) => {
        console.log("Data sent to onSubmit:", data);


        return webApiService.addCoupon(data)
            .then(res => {
                notifyService.success("coupon is Added Successfully ✔️!!!")
                store.dispatch(addCouponAction(res.data));
                navigate("/companies/getCompanyCoupons")
                console.log("Data sent to onSubmit:", data);

            })
            .catch(err => notifyService.error(err))
    };


    return (
        <div className="AddCoupon">

            <h1>Add new Coupon</h1>

            <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>

                {(errors?.category) ? <span>{errors.category?.message}</span> : <label htmlFor="category">Category</label>}
                <select {...register("category")}>
                    <option value="FOOD" >FOOD 🍔 </option>
                    <option value="HEALTH" >HEALTH 💊 </option>
                    <option value="SPORTS" >SPORTS 🏓 </option>
                    <option value="COMPUTERS" >COMPUTERS 🖥️ </option>
                    <option value="VACATIONS" >VACATIONS 🏖️ </option>
                </select>
                {(errors?.title) ? <span>{errors.title?.message}</span> : <label htmlFor="title">Title</label>}
                <input {...register("title")} name="title" type="text" placeholder="Coupon Title" />

                {(errors?.description) ? <span>{errors.description?.message}</span> : <label htmlFor="description">Description</label>}
                <input {...register("description")} name="description" type="text" placeholder="Coupon Description" />

                {(errors?.amount) ? <span>{errors.amount?.message}</span> : <label htmlFor="amount">Amount</label>}
                <input {...register("amount")} name="amount" type="number" placeholder="Coupon Amount" />

                {(errors?.image) ? <span>{errors.image?.message}</span> : <label htmlFor="image">Image</label>}
                <input {...register("image")} name="image" type="text" placeholder="Coupon Image" />

                {(errors?.price) ? <span>{errors.price?.message}</span> : <label htmlFor="price">Price</label>}
                <input {...register("price")} name="price" type="number" placeholder="Coupon Price" />

                {(errors?.startDate) ? <span>{errors.startDate?.message}</span> : <label htmlFor="startDate">StartDate</label>}
                <input {...register("startDate")} name="startDate" type="datetime-local" placeholder="Coupon StartDate" />

                {(errors?.endDate) ? <span>{errors.endDate?.message}</span> : <label htmlFor="endDate">EndDate</label>}
                <input {...register("endDate")} name="endDate" type="datetime-local" placeholder="Coupon EndDate" />


                <button disabled={!isValid || isSubmitting}>Add</button>

            </form>


        </div>
    );
}

export default AddCoupon;
