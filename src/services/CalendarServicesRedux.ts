import { apiSlice } from "@/services/core/BaseQuery";

export const calendarApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCalendar: builder.query({
      query: (params) => ({
        url: 'map',
        method: 'GET',
        params: params
      })
    }),
    addReservation: builder.mutation({
      query: (data) => ({
        url: 'reservations',
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useGetCalendarQuery, useAddReservationMutation } = calendarApi;