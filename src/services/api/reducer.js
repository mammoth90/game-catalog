import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = import.meta.env.VITE_API_KEY
const fakeKey = 'ffffffffffffffffffffffffffffffff'

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

    getGameById: builder.query({
      query: (id) => ({
        url: `games/${id}`,
        params: {
          key: apiKey,
        },
      }),
    }),

    getScreenshots: builder.query({
      query: (id) => ({
        url: `games/${id}/screenshots`,
        params: {
          key: apiKey,
        },
      }),
    }),

    getDls: builder.query({
      query: (id) => ({
        url: `games/${id}/additions`,
        params: {
          key: apiKey,
        },
      }),
    }),

    getAchivments: builder.query({
      query: ({ id, page = 1, page_size = 40 }) => ({
        url: `games/${id}/achievements`,
        params: {
          key: apiKey,
          page,
          page_size,
        },
      }),
    }),
    getDevelopers: builder.query({
      query: (params) => ({
        url: 'developers',
        params: {
          key: apiKey,
          ...params,
        },
      }),
    }),

    getPlatforms: builder.query({
      query: (params) => ({
        url: 'platforms',
        params: {
          key: apiKey,
          ...params,
        },
      }),
    }),
  }),
})

export const {
  useLazyGetGamesQuery,
  useGetGamesQuery,
  useGetGameByIdQuery,
  useLazyGetAchivmentsQuery,
  useGetScreenshotsQuery,
  useGetDlsQuery,
  useGetDevelopersQuery,
  useGetPlatformsQuery,
} = gamesApi
