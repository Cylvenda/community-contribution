import { BadgeCheck } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Button } from '../ui/button'

type RegisterSuccessProps = {
    setRegisterSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};


const Registersuccess = ({ setRegisterSuccess }: RegisterSuccessProps) => {
    return (
        <>
            <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl rounded-2xl p-4 animate-fadeIn">

                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-semibold text-white tracking-wide">
                        You Account Has Been Created Successfully
                    </CardTitle>
                </CardHeader>

                <div className="flex justify-center my-4">
                    <BadgeCheck
                        size={60}
                        className="text-green-300 drop-shadow-lg animate-successPulse"
                    />
                </div>

                <CardContent className="text-center text-white/90 text-lg">
                    Please check your email to verify your account.
                </CardContent>
                <Button className="mt-4 w-full" onClick={() => setRegisterSuccess(false)} > Close </Button>
            </Card>
        </>
    )
}

export default Registersuccess