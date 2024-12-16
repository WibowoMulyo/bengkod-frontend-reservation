import { apiSlice } from "@/services/core/BaseQuery";

export const historyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: (params) => ({
        url: 'riwayat',
        method: 'GET',
        params: params
      })
    }),
  })
})

export const { useGetHistoryQuery } = historyApi;