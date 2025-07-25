import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { createAccount, login, user } from "../types";
import type { RootState } from "./store";

// Define a service using a base URL and expected endpoints
export const laundryApi = createApi({
  reducerPath: "laundryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.value.token; // Access token from Redux state
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    createAccount: build.mutation<
      {
        status: Number;
      },
      createAccount
    >({
      query: (body) => ({
        url: "/admin/user/signup",
        method: "POST",
        body,
      }),
    }),

    login: build.mutation<
      {
        status: Number;
        data: user;
      },
      login
    >({
      query: (body) => ({
        url: "/admin/user/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    updateuser: build.mutation<
      {
        status: Number;
        data: user;
      },
      user
    >({
      query: (body) => ({
        url: `/admin/user/${body._id}`,
        method: "PUT",
        body,
      }),
    }),

    getauthuser: build.query<{ status: Number; data: user }, void>({
      query: () => "/admin/user/auth-user/",
      providesTags: ["User"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateAccountMutation,
  useGetauthuserQuery,
  useUpdateuserMutation,
  useLoginMutation,
} = laundryApi;
