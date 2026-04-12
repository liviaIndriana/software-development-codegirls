export type RegisterDto = {
  username: string;
  email: string;
  npm: string;
  password: string;
  role: "dosen" | "mahasiswa";
  kelas: string;
};