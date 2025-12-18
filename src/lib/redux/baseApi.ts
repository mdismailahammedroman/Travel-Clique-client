import { createApi } from "@reduxjs/toolkit/query";
import axiosBaseQuery from "./axiosBaseQuery";


export const baseApi = createApi ({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({ }),
  tagTypes: ["USER", "AGENT", "Wallet", "TravelPlan", "BuddyMatch"], // Added tags
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
