import {baseApi} from "./api.ts";

export const getInitialBreweries = async () => {
  return await baseApi.get("?page=1&per_page=3");
};
