import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { accountVerifcation } from "@/services/authService"
import type { AccountVerification } from "@/types/auth"
import { BadgeCheck } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

const EmailVerification = () => {

    const navigate = useNavigate()
    const { token, uid } = useParams()

    const verifyAccount = () => {
      const value:AccountVerification = { uid, token}
        if (!token || !uid){
            navigate("/")
        }

        const response = accountVerifcation(value)
        
        
    }
    verifyAccount()

    console.log("Token received:", token)
    console.log("Uid received:", uid)



    return (
        <div className="w-screen h-screen flex items-center justify-center bg-linear-to-br from-green-800 via-emerald-700 to-green-900 px-4">
            <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl rounded-2xl p-4 animate-fadeIn">

                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-semibold text-white tracking-wide">
                        Email Verified
                    </CardTitle>
                </CardHeader>

                <div className="flex justify-center my-4">
                    <BadgeCheck
                        size={60}
                        className="text-green-300 drop-shadow-lg animate-successPulse"
                    />
                </div>

                <CardContent className="text-center text-white/90 text-lg">
                    Your email has been successfully verified.
                    <br />Your account is now active!
                </CardContent>
            </Card>
        </div>
    )
}

export default EmailVerification
