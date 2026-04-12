export type LoginDto = {
    email: string;
    password: string;
};

export type LoginResponse = {
    accessToken: string;
    user: {
        id: number;
        email: string;
    };
};