import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { AuthApi, SignInResponse } from '../objects/AuthApi';
// import { Logger } from "../utils/debugLogger"
dotenv.config();

test('Auth API signIn should return valid tokens and status 200', async () => {
  const authApi = new AuthApi(process.env.API_URL as string);

  const response = await authApi.signIn(
    process.env.ADMIN_EMAIL as string,
    process.env.ADMIN_PASS as string
  );
  expect(response.status).toBe(200);
  const { accessToken, refreshToken } = response.data.signIn;
  console.log("SignIn response: ", response)
  expect(accessToken).toBeDefined();
  expect(refreshToken).toBeDefined();
});
