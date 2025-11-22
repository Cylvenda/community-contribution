import { useForm } from "react-hook-form"
import z from "zod"
import { LoginFormSchema } from "./FormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { Field, FieldDescription, FieldGroup } from "../ui/field"
import { InputForm } from "./InputsForms"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { Separator } from "@radix-ui/react-separator"


const Login = () => {


  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (value: z.infer<typeof LoginFormSchema>) => {
    console.log(value)
    toast.info(value.email + " logged in successfully!")
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>

              <InputForm
                name="email"
                label="Email"
                control={form.control}
                placeholder="Email"
              />

              <InputForm
                name="password"
                label="Password"
                control={form.control}
                placeholder="Password"
              />

              <Field>
                <Button type="submit">Login</Button>
                <Separator/>
                <FieldDescription className="text-center">
                  <Link to="/reset-password" > Forget Password</Link>
                </FieldDescription>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?  <Link to="/register"> Register</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <Separator />
      </Card>
    </div>
  )
}

export default Login