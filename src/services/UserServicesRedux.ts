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
    updateUser: builder.mutation({
      query: ({id ,data}) => ({
        url: 'profil',
        method: 'PATCH',
        body: data,
        params: id
      })
    })
  })
})

export const {useGetUserQuery, useUpdateUserMutation} = reservationApi