import api from "@/api/config"
import type { AccountVerification, UserType } from "@/types/auth"

export const userRegister = async (value: UserType) => {
    try {
        const res = await api.post("auth/users/", value)

        return {
            success: true,
            status: res.status,
            data: res.data
        }

    } catch (error: any) {

        // Axios error structure
        const status = error?.response?.status
        const data = error?.response?.data

        const errors = error.response.data;
        if (errors.username) {
            alert(`Username error: ${errors.username.join(", ")}`);
        }
        if (errors.email) {
            alert(`Email error: ${errors.email.join(", ")}`);
        }
        if (errors.password) {
            alert(`Password error: ${errors.password.join(", ")}`);
        } else {
            console.error("Unknown error", error);
        }

        return {
            success: false,
            status: status ?? 500,
            error: data ?? { message: "Unknown error occurred" }
        }
    }
}

export const accountVerifcation = async (value: AccountVerification) => {

    try {
        const res = await api.post("auth/users/activation/", value)

        if (res.status === 200) {
            return { success: true }
        }

        return {
            success: false,
            status: res.status,
            message: res.data
        }


    } catch (error: any) {
        const status = error?.response?.status
        const data = error?.response?.data

        return {
            success: false,
            status: status ?? 500,
            error: data ?? { message: "Unknown error occurred" }
        }
    }

}


export const userLogin = async (value: UserType) => {

    Response = await api.post("auth/jwt/create/", value)

    return Response
}

export const userResetPassword = async (value: UserType) => {

    Response = await api.post("auth/users/reset_password/", value)

    return Response
}