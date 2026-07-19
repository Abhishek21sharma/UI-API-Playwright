//stroing data here
import { UserCredentials } from "../types/users";

export const VALID_USER: UserCredentials = {
  user: "abhishek.sharma211093@gmail.com",
  password: "Password1",
};

export const INVALID_USER: UserCredentials = {
  user: "locked_out_user",
  password: "password",
};
