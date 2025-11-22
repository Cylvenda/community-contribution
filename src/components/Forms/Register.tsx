import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { RegisterFormSchema } from "./FormSchema";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Field, FieldDescription, FieldGroup } from "../ui/field";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { InputForm } from "./InputsForms";
import { Separator } from "@radix-ui/react-separator";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {

    const form = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            password: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof RegisterFormSchema>)  => {

    //    const res = userRegister(values)

        const res = await axios.post("http://127.0.0.1:8000/api/auth/users/", values)
        
            console.log(res.data.message)
    }

    return (
        <>
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
        </>
    )
};

export default Register