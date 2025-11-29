
import z from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Field, FieldDescription, FieldGroup } from '../ui/field'
import { InputForm } from './InputsForms'
import { useForm } from 'react-hook-form'
import { ResetFormSchema } from './FormSchema';
import { zodResolver } from '@hookform/resolvers/zod'
import  { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Separator } from '@radix-ui/react-separator'
import { userResetPassword } from '@/services/authService'

const Reset = () => {

    const form = useForm<z.infer<typeof ResetFormSchema>>({
        resolver: zodResolver(ResetFormSchema),
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = (values: z.infer<typeof ResetFormSchema>) => {
        
        const res = userResetPassword(values)
        console.log(res)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Reset Password</CardTitle>
                <CardDescription>Enter your valid Email to receive password Reset Link.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <InputForm
                            name="email"
                            label="Email"
                            control={form.control}
                            placeholder='Enter your Email'
                        />


                        <Field>
                            <Button type="submit">Reset Password</Button>
                            <FieldDescription className="text-center">
                                Already have an account? <Link to="/">Login</Link>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </form>
                <Separator />

            </CardContent>
            <Separator />
        </Card>
    )
}

export default Reset