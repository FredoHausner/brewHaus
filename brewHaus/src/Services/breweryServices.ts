import {baseApi} from "./api.ts";

export const getInitialBreweries = async (page: number) => {
  return await baseApi.get(`?page=${page}&per_page=20`);
};

export const breweryAutoFill = async (autoFillInput: string) => {
  return await baseApi.get(`/autocomplete?query={${autoFillInput}}`);
};
