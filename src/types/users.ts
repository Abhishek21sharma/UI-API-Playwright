//SOLID approch
export interface UserCredentials {
  user: string;
  password: string;
  role?: "admin" | "standard" | "guest";
}
