import axios from "axios";

class BaseApiService {
  api;

  constructor() {
    this.api = axios.create({
      baseURL: "https://api.openbrewerydb.org/v1/breweries",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  get(endpoint: string, config = {}) {
    return this.api.get(endpoint, config);
  }

  post(endpoint: string, data: any) {
    return this.api.post(endpoint, data);
  }

  put(endpoint: string, data: any) {
    return this.api.put(endpoint, data);
  }

  delete(endpoint: string) {
    return this.api.delete(endpoint);
  }
}

export const baseApi = new BaseApiService();
