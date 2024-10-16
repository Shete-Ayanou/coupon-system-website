import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { string } from "zod";


class NotificationService{
    public success(msg:string) {
        toast.success(msg);
    }
    public error(msg: any) {
        // const str = JSON.stringify(msg);
        toast.error(this.msgFormatter(msg));
    }
    public msgFormatter(msg: any): string {

        
        const str = msg as any;
        if (typeof str === "string"){
            return str;
        }

        if (str?.response?.data?.description) {
            return str?.response?.data?.description as string;
        }

        if (str?.message) {
            return str?.message as string;
        }

        
        if (str?.response?.data) {
            return str?.response?.data as string;
        }

        return "Something went wrong!!!"
    } 
    
    }
    const notifyService = new NotificationService();
    export default notifyService;