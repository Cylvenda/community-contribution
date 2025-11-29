import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { RegisterFormSchema } from "./FormSchema";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Field, FieldDescription, FieldGroup } from "../ui/field";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { InputForm } from "./InputsForms";
import { Separator } from "@radix-ui/react-separator";
import { toast } from "react-toastify";
import { userRegister } from "@/services/authService";
import { useState } from "react";
import Registersuccess from "./Registersuccess";

const Register = () => {

    const navigate = useNavigate()
    const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);

    const form = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            username: "",
            password: ""
        },
    })


    const onSubmit = async (values: z.infer<typeof RegisterFormSchema>) => {
        const res = await userRegister(values)

        console.log("Register values:", values)

        if (res.success) {

            setRegisterSuccess(true);

        } else {
            // console.error("Error status:", res.status)
            //  console.error("Error message:", res.error)
            // console.log(res.error)

            // Example: toast error
            toast.error(res.error?.detail || "Registration failed")
        }
    }


    return (
        <>
            {
                !registerSuccess ?

                    <div className="flex flex-col gap-6">

                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">Create your account</CardTitle>
                                <CardDescription>
                                    Fill the field below to create your Account
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <FieldGroup>
                                        <Field className="grid grid-cols-1 sm:grid-cols-2">
                                            <InputForm
                                                name="first_name"
                                                label="First Name"
                                                control={form.control}
                                                placeholder="Enter First Name"
                                            />
                                            <InputForm
                                                name="last_name"
                                                label="Last Name"
                                                control={form.control}
                                                placeholder="Enter Last Name"
                                            />
                                        </Field>

                                        <InputForm
                                            name="username"
                                            label="Username"
                                            control={form.control}
                                            placeholder="Enter Username"
                                        />

                                        <InputForm
                                            name="email"
                                            label="Email"
                                            control={form.control}
                                            placeholder="Email Address"
                                        />

                                        <InputForm
                                            name="phone"
                                            label="Phone Number"
                                            control={form.control}
                                            placeholder="Email Address"
                                        />

                                        <InputForm
                                            name="password"
                                            label="Password"
                                            control={form.control}
                                            placeholder="Password"
                                        />

                                        <Field>
                                            <Button type="submit">Create Account</Button>
                                            <FieldDescription className="text-center">
                                                Already have an account? <Link to="/">Login</Link>
                                            </FieldDescription>
                                        </Field>
                                    </FieldGroup>
                                </form>
                                <Separator />
                                <Separator />
                            </CardContent>
                        </Card>
                    </div>
                    :
                    <Registersuccess setRegisterSuccess={setRegisterSuccess} />
            }
        </>
    )
};

export default Register