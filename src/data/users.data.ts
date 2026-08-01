import { UserCredentials } from "@/types/users.types";
import dotenv from "dotenv";
import { ENV } from "@/config/env.config";

export const VALID_USER: UserCredentials = {
  userEmail: ENV.VALID_EMAIL,
  //user: process.env.VALID_EMAIL as string, //improved as above (strict type)
  userPassword: ENV.VALID_PWD,
};

export const INVALID_USER: UserCredentials = {
  userEmail: "locked_out_user",
  userPassword: "password",
};
