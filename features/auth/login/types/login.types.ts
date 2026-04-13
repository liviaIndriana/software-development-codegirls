export type LoginDto = {
    username: string;
    password: string;
};

export type LoginResponse = {
    accessToken: string;
    user: {
        id: number;
        username: string;
    };
};