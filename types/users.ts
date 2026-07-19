//SOLID approch
//advantage here is that:
export interface UserCredentials {
  user: string;
  password: string;
  role?: "admin" | "standard" | "guest";
}
