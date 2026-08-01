//SOLID approch
export interface UserCredentials {
  userEmail: string;
  userPassword: string;
  role?: "admin" | "standard" | "guest";
}
