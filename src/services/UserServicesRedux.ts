import { apiSlice } from "@/services/core/BaseQuery";

export const reservationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (params) => ({
        url: 'profil',
        method: 'GET',
        params: params
      })
    }),
    updateReservation: builder.mutation({
      query: (data) => ({
        url: 'profil',
        method: 'PATCH',
        body: data
      })
    })
  })
})

export const {useGetUserQuery, useUpdateReservationMutation} = reservationApi