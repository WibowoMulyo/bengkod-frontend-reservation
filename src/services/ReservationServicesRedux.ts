import { apiSlice } from "@/services/core/BaseQuery";

export const reservationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMap: builder.query({
      query: (params) => ({
        url: 'reservasi',
        method: 'GET',
        params: params
      })
    }),
    addReservation: builder.mutation({
      query: (data) => ({
        url: 'reservasi',
        method: 'POST',
        body: data
      })
    })
  })
})

export const {useGetMapQuery, useAddReservationMutation} = reservationApi