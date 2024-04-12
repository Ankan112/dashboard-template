import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFromLocalStorage } from "../../Common/utils/localStorage";
import { baseURL } from "../../Common/baseURL/baseURL";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      headers.set("authorization", getFromLocalStorage("accessToken"));
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
