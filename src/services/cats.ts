import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Breed, ImageResponse } from "../types";

export const catApi = createApi({
    reducerPath: 'catApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thecatapi.com/v1',
        prepareHeaders: (headers: Headers) => {
            headers.set('x-api-key', 'live_JsefUSEXScyhWOVVH7WxRrfiLNbCsSdX4BTx5qQh9D54GCOfjJBGarnk8yqkKcoW')
        },
    }),
    tagTypes: ['CatImages', 'CatBreedImages', 'BreedsList'],
    endpoints: (builder) => ({
        getImages: builder.query<ImageResponse, void>({
            query: () => '/images/search?limit=20',
            providesTags: ['CatImages']
        }),
        filterByBreed: builder.query<Breed, string>({
            query: (breedId) => `/images/search?breed_ids=${breedId}`,
            providesTags: (result, breedId) => [{ type: 'CatBreedImages', breedId}]
        }),
    })
})

export const { useGetImagesQuery, useFilterByBreedQuery } = catApi;
