import { apiSlice } from "./apiSlice";

const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "http://localhost:8080/api/auth/login",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const { useLoginMutation } = authSlice;
