export type LoginDto = {
    npm_nidn: string;
    password: string;
};

export type LoginResponse = {
    message: string;
    token: string;
};