import api from "@/api/config"
import type { UserType } from "@/types/user";

export const userRegister = async (value: UserType) => {
    
    Response = await api.post("auth/users/", value)

    return Response.data
}