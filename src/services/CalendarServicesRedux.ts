import { apiSlice } from "@/services/core/BaseQuery";

export const calendarApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCalendar: builder.query({
      query: (params) => ({
        url: 'kalender',
        method: 'GET',
        params: params
      })
    }),
  })
})

export const { useGetCalendarQuery } = calendarApi;