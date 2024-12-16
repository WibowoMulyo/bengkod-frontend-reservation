import { apiSlice } from "@/services/core/BaseQuery";

export const confirmationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConfirmation: builder.query({
      query: (params) => ({
        url: 'konfirmasi',
        method: 'GET',
        params: params
      })
    }),
    confirmReservation: builder.mutation({
      query: (data) => ({
        url: 'konfirmasi',
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useGetConfirmationQuery, useConfirmReservationMutation } = confirmationApi;