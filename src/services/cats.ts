import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Breed, CategorizedCats, CatImage, ImageResponse } from "../types";

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1",
    prepareHeaders: (headers: Headers) => {
      headers.set(
        "x-api-key",
        "live_JsefUSEXScyhWOVVH7WxRrfiLNbCsSdX4BTx5qQh9D54GCOfjJBGarnk8yqkKcoW"
      );
    },
  }),
  tagTypes: ["CatImages", "CatBreedImages", "BreedsList"],
  endpoints: (builder) => ({
    getImages: builder.query<CategorizedCats, void>({
      query: () => "/images/search?limit=20",
      providesTags: ["CatImages"],
      transformResponse: (response: ImageResponse) =>
        response.reduce((acc: CategorizedCats, curr: CatImage) => {
          const breedName: string =
            curr.breeds.length > 0 ? curr.breeds[0].name : "unknown";

          if (!acc[breedName]) {
            acc[breedName] = [];
          }

          acc[breedName].push(curr);

          return acc;
        }, {}),
    }),
    filterByBreed: builder.query<Breed, string>({
      query: (breedId) => `/images/search?breed_ids=${breedId}`,
      providesTags: (result, breedId) => [{ type: "CatBreedImages", breedId }],
    }),
  }),
});

export const { useGetImagesQuery, useFilterByBreedQuery } = catApi;
