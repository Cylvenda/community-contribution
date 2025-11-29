import { z } from "zod";

// Helper to capitalize first letter
const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const RegisterFormSchema = z.object({
    first_name: z
        .string()
        .min(1, "Your first name is too short.")
        .transform((val) => capitalize(val.trim())),
    last_name: z
        .string()
        .min(1, "Your last name is too short.")
        .transform((val) => capitalize(val.trim())),
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long.")
        .regex(
            /^[a-z][a-z0-9._]*$/,
            "Username must start with a letter and contain only letters, numbers, underscores, or dots."
        )
        .transform((val) => val.trim().toLowerCase()),
    email: z
        .string()
        .regex(
            /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Email must contain only letters, numbers, dots or underscores and be a valid email"
        ),
    phone: z
        .string()
        .regex(
            /^(?:\+255|0)(6|7)\d{8}$/,
            "Phone number must start with 06 or 07 (or +2556/+2557) and be valid"
        )
        .transform((val) => val.replace(/[\s-]/g, "")) // remove spaces and dashes
        .transform((val) => {
            // Normalize to +2557xxxxxxxx format
            if (val.startsWith("0")) return "+255" + val.slice(1);
            return val; // already +255
        }),
    password: z
        .string({ required_error: "Password is required" })
        .min(8, "Password must be at least 8 characters long."),
});


export const LoginFormSchema = z.object({
    email: z
        .string()
        .regex(
            /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Email must contain only letters, numbers, dots or underscores and be a valid email"
        ),
    password: z
        .string({ required_error: "Password is required" })
        .min(8, "Password must be at least 8 characters long."),
})

export const ResetFormSchema = z.object({
    email: z
        .string()
        .regex(
            /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Email must contain only letters, numbers, dots or underscores and be a valid email"
        )
})