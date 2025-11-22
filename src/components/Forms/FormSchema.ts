import { z } from "zod";

export const RegisterFormSchema = z.object({
    first_name: z.string().min(1, "Your first name is too short."),
    last_name: z.string().min(1, "Your last name is too short."),
    username: z.string().min(1, "Your last name is too short.").toLowerCase(),
    email: z.string().email(),
    password: z.string({ required_error: "Password is required" }).min(8, "Password must be at least 8 characters long.")
})

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password Field is required.")
})

export const ResetFormSchema = z.object({
    email: z.string().email()
})