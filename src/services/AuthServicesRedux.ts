import { apiSlice } from "@/services/core/BaseQuery";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'autentikasi',
        method: 'POST',
        body: credentials
      })
    })
  })
})

export const { useLoginMutation } = authApi;