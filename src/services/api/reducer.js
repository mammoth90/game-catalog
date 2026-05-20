import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = 'a065e9097d354e8089d9f944ff6dca36'

export const gamesApi = createApi({
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api/' }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: (params) => ({
        url: 'games',
        params: {
          ...params,
          key: apiKey,
        },
      }),
    }),
  }),
})

export const { useGetGamesQuery } = gamesApi
