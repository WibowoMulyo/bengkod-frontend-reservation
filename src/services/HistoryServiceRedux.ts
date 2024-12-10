import { apiSlice } from "@/services/core/BaseQuery";

export const calendarApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: (params) => ({
        url: 'riwayat',
        method: 'GET',
        params: params
      })
    }),
    confirmReservation: builder.mutation({
      query: (data) => ({
        url: 'riwayat',
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useGetHistoryQuery } = calendarApi;