import { APIRequestContext, expect } from "@playwright/test";
import { API_ENDPOINTS } from "@/data/endpoints";
import { LoginResponseSchema, type LoginResponse } from "@/schemas/auth.schema";
import { UserCredentials } from "@/types/users.types";

export class AuthApi {
  constructor(private readonly request: APIRequestContext) {}

  async login(credentials: UserCredentials): Promise<LoginResponse> {
    //API_ENDPOINTS.login
    const response = await this.request.post(API_ENDPOINTS.login, {
      data: credentials,
    });

    expect(
      response.ok(),
      `API Login failed with status ${response.status()}: ${await response.text()}`,
    ).toBeTruthy();

    const rawResponseBody = await response.json();
    const validateData = LoginResponseSchema.parse(rawResponseBody);

    return validateData;
  }
}
