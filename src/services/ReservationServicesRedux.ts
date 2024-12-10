import { apiSlice } from "@/services/core/BaseQuery";

export const reservationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: (params) => ({
        url: `map?${new URLSearchParams(params).toString()}`,
        method: 'GET'
      })
    })
  })
})