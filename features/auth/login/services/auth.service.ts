export const authService = {
    setToken: (token: string) => {
        localStorage.setItem("access_token", token);
    },
    getToken: () => {
        return localStorage.getItem("access_token");
    },
    removeToken: () => {
        localStorage.removeItem("access_token");
    },
};