import { UserCredentials } from "@/types/users.types";
import dotenv from "dotenv";
import { ENV } from "@/config/env.config";

export const VALID_USER: UserCredentials = {
  user: ENV.VALID_EMAIL,
  //user: process.env.VALID_EMAIL as string, //improved as above (strict type)
  password: ENV.VALID_PWD,
};

export const INVALID_USER: UserCredentials = {
  user: "locked_out_user",
  password: "password",
};
