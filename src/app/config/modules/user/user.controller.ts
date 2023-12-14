import { Request, Response } from "express"
import { TUserValidationSchema } from "./user.validation";

const createuser = async (req:Request,res:Response)=>{
    try{
        const {user : userData} = req.body;
        const zodparseData = TUserValidationSchema.parse(userData)
    }catch(err:any){

    }
}
export const UserController = {

}