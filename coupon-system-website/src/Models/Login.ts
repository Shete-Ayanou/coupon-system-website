
export interface LoginReqModel{
email: string;
password: string;
clientType: string;
}

export interface LoginResModel{
    token: string;
    email: string;
    clientType: ClientType;
    id: number;


}

export enum ClientType{
    ADMINISTRATOR = "ADMINISTRATOR",
    COMPANY = "COMPANY",
    CUSTOMER = "CUSTOMER",
    LOGGED_OUT = "LOGGED_OUT",
}