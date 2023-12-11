import { z } from "zod";

export const TFullNameValidationSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
});

export const TAddressValidationSchema = z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
});

export const TOrderValidationSchema = z.object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number(),
});

export const TUserValidationSchema = z.object({
    userId: z.number(),
    username: z.string(),
    password: z.string(),
    fullName: TFullNameValidationSchema,
    age: z.number(),
    email: z.string().email(),
    isActive: z.boolean(),
    hobbies: z.array(z.string()),
    address: TAddressValidationSchema,
    orders: z.array(TOrderValidationSchema),
});