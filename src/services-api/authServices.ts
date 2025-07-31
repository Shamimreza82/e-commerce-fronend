"use server"


import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form"
import { DecodedUser } from "../types/user";






export const registerShop = async (shopData: FieldValues) => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/shops/create-shop`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(shopData),
        });

        console.log("Response Status:", res.status);

        return await res.json();
    } catch (error) {
        console.error("Error registering user:", error);
    }
};







export const login = async (shopData: FieldValues) => {
    console.log("Sending Data:", JSON.stringify(shopData));

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(shopData),
        });

        const result = await res.json()
        console.log(result)
        if (result.success) {
            const cookieStore = await cookies()
            cookieStore.set("accessToken", result?.data?.accessToken)
        }
        return result
    } catch (error) {
        console.error("Error registering user:", { error });
    }
};






export const getCurrentUser = async (): Promise<DecodedUser | null> => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    if (!accessToken) return null;

    try {
        // Pass DecodedUser as a generic, so jwtDecode returns that type
        const decodedData = jwtDecode<DecodedUser>(accessToken);
        return decodedData;
    } catch (error) {
        console.error("Token decoding failed:", error);
        return null; // or throw an error
    }
};







export const logout = async () => {
    (await cookies()).delete("accessToken")
}





export const changePassword = async (payload: { oldPassword: string, newPassword: string }) => {

    const token = (await cookies()).get("accessToken")?.value;

    if (!token) {
        throw new Error("No authentication token found in cookies");
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/change-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(payload),
        });

        return await res.json();
    } catch (error) {
        console.error("Error registering user:", error);
        return { success: false, message: error instanceof Error ? error.message : "An unknown error occurred" };
    }
}

export const forgotPassword = async (userData: FieldValues) => {
    console.log("Sending Data:", JSON.stringify(userData));

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/forget-password`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const result = await res.json()
        return result
    } catch (error) {
        console.error("Error registering user:", { error });
    }
};

export const resetPassword = async (payload: { email: string, newPassword: string }) => {

    console.log(payload)

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/reset-password`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const result = await res.json()
        return result
    } catch (error) {
        console.error("Error Reset password:", { error });
    }
};

export const otpVerification = async (email: string | null, pin: string) => {

    const payload = {
        email,
        pin
    }
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/validate-pin`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        return res.json()
    } catch (error) {
        console.error("Token decoding failed:", error);
    }

};

