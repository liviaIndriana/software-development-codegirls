export type RegisterDto = {
  username: string;
  email: string;
  kelas: string;
  npm: string;
  password: string;
  role: "mahasiswa" | "dosen";
};

export type RegisterResponse = {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
};