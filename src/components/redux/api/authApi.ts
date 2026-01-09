/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  message: string;
  accessToken?: string; // optional auto-login
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    getMe: builder.query<any, void>({
      query: () => "/auth/me",
      providesTags: ["Auth"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetMeQuery } = authApi;
