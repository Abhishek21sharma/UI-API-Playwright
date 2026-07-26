import { UserCredentials } from "@/types/users";
import dotenv from "dotenv";

export const VALID_USER: UserCredentials = {
  user: process.env.VALID_EMAIL as string,
  password: process.env.VALID_PWD as string,
};

export const INVALID_USER: UserCredentials = {
  user: "locked_out_user",
  password: "password",
};
