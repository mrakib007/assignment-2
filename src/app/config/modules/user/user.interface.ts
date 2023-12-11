import { Model } from "mongoose";

type TFullName = {
    firstName: string;
    lastName: string;
  }
  
  type TAddress = {
    street: string;
    city: string;
    country: string;
  }
  
  type TOrder = {
    productName: string;
    price: number;
    quantity: number;
  }
  
  type TUser = {
    userId: number;
    username: string;
    password: string; 
    fullName: TFullName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address: TAddress;
    orders: TOrder[];
  }
  
  export interface UserModel extends Model<TUser>{
    
  }