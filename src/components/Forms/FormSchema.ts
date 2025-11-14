import z from "zod";

export const RegisterFormSchema = z.object({
    firstName: z.string().min(1, "Your first name is too short."),
    lastName: z.string().min(1, "Your last name is too short."),
    email: z.email(),
    password: z.string("Password is required").min(8, "Password must be at least 8 characters long.")
})

export const LoginFormSchema = z.object({
    email: z.email(),
    password: z.string().min(1, "Password Field is required.")
})

export const ResetFormSchema = z.object({
    email: z.email()
})