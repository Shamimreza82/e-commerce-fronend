export interface TUser {
    userId: string;
    avater?: string;
    name: string;
    email: string;
    isActive?: boolean;
    role: "USER" | "SELLER" | "ADMIN";
    iat?: number;
    exp?: number;
}



export interface DecodedUser {
    userId: string;
    name: string;
    email: string;
    role: "USER" | "SELLER" | "ADMIN";
    iat?: number;
    exp?: number;
}