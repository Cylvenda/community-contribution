import api from "@/api/config"


export const getUser = async () => {

    const userData = await api.get("auth/users/me")

    console.log(userData)
}