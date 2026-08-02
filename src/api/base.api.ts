import { APIRequestContext, APIResponse, test } from "@playwright/test";
import { ZodSchema, z } from "zod";
import { formatPayload } from "@/utils/helper";

export interface RequestOptions<T> {
  endpoint: string;
  payload?: any;
  schema: z.ZodType<T>;
  expectedStatus?: number;
  headers?: Record<string, string>;
}

export class BaseAPIClient {
  constructor(public request: APIRequestContext) {}

  //generic type T -> ensure whatever zodschema we pass in, TS will return the exact type
  async post<T>({
    endpoint,
    payload,
    schema,
    expectedStatus = 200,
    headers,
  }: RequestOptions<T>): Promise<T> {
    const response = await this.request.post(endpoint, {
      data: payload,
      headers: headers,
    });

    await this.validateStatus(response, expectedStatus, endpoint);
    return this.parseResponse(response, schema);
  }

  async get<T>(
    endpoint: string,
    schema: ZodSchema<T>,
    expectedStatus: number = 200,
  ): Promise<T> {
    const response = await this.request.get(endpoint);
    await this.validateStatus(response, expectedStatus, endpoint);
    return this.parseResponse(response, schema);
  }

  private async parseResponse<T>(
    response: any,
    schema: ZodSchema<T>,
  ): Promise<T> {
    const json = await response.json();
    return schema.parse(json);
  }

  private async validateStatus(
    response: APIResponse,
    expectedStatus: number,
    endpoint: string,
  ) {
    const status = response.status();
    if (status !== expectedStatus) {
      const body = await response.text();

      await test.info().attach(`Failed Response: ${endpoint}`, {
        body: JSON.stringify(formatPayload(body), null, 2),
        contentType: "application/json",
      });
      throw new Error(
        `API Error on ${endpoint}: Expected ${expectedStatus} but got ${status}.\nResponse: ${body}`,
      );
    }
  }
}
