import { Dimensions } from "react-native";

export const colorPallet = {
  primary: "#218888",
  danger: "#ff4444",
  textPrimary: "#D1D1D1",
  textDanger: "#CC0000",
};

export const dimensions = Dimensions.get("window");

export const api = {
  token: "e19dfd3d094346089bb8cdfb9521d0a4",
  baseUri: "https://newsapi.org/v2/top-headlines",
  country: "in",
  language: "en",
  categories: {
    /* GENERAL: "general", */
    HEALTH: "health",
    SCIENCE: "science",
    TECHNOLOGY: "technology",
    ENTERTAINMENT: "entertainment",
    SPORTS: "sports",
  },
  setCountry: function (countryCode: string) {
    this.country = countryCode;
  },
  pageSize: 5,
  setPageSize: function (pageSize: number) {
    this.pageSize = pageSize;
  },
  headlines: function (page: number) {
    return `${this.baseUri}?country=${this.country}&pageSize=${this.pageSize}&page=${page}`;
  },
  category: function (category: string, page: number) {
    return `${this.baseUri}?category=${category}&pageSize=${this.pageSize}&country=${this.country}&page=${page}`;
  },
};
