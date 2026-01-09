import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include", // if using cookies / auth
  }),
  tagTypes: ["User", "Group", "Auth"],
  endpoints: () => ({}),
});
