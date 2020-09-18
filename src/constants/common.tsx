import { Dimensions } from "react-native";

export const colorPallet = {
  primary: "#218888",
  danger: "#ff4444",
  textPrimary: "#D1D1D1",
  textDanger: "#CC0000",
  textBlackPrimary: "#263238",
  textBlackSecondary: "#37474F",
};

export const dimensions = Dimensions.get("window");

export const api = {
  token: process.env.REACT_NATIVE_API_KEY,
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
