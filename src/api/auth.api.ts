import { APIRequestContext, expect } from "@playwright/test";
import { API_ENDPOINTS } from "@/data/endpoints";
import { LoginResponseSchema, type LoginResponse } from "@/schemas/auth.schema";
import { UserCredentials } from "@/types/users.types";
import { VALID_USER } from "@/data/users.data";

export class AuthApi {
  constructor(private readonly request: APIRequestContext) {}

  async login(credentials: UserCredentials): Promise<LoginResponse> {
    console.log("end point is: " + API_ENDPOINTS.login);

    //API_ENDPOINTS.login
    const response = await this.request.post(
      "https://www.rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: VALID_USER,
      },
    );

    console.log("is there any response?? " + (await response.json()));
    expect(
      response.ok(),
      `API Login failed with status ${response.status()}: ${await response.text()}`,
    ).toBeTruthy();

    const rawResponseBody = await response.json();
    const validateData = LoginResponseSchema.parse(rawResponseBody);

    return validateData;
  }
}
