//stroing data here
import { UserCredentials } from "../types/users";
import dotenv from "dotenv";

export const VALID_USER: UserCredentials = {
  user: process.env.VALID_EMAIL as string, //   "abhishek.sharma211093@gmail.com",
  password: process.env.VALID_PWD as string, //"Password1",
};

export const INVALID_USER: UserCredentials = {
  user: "locked_out_user",
  password: "password",
};
