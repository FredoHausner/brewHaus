import {baseApi} from "./api.ts";

export const getInitialBreweries = async () => {
  return await baseApi.get("?page=1&per_page=20");
};

export const breweryAutoFill = async (autoFillInput: string) => {
  return await baseApi.get(`/autocomplete?query={${autoFillInput}}`);
};
