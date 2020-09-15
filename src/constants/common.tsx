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
  categories: {
    ENTERTAINMENT: "entertainment",
    GENERAL: "general",
    HEALTH: "health",
    SCIENCE: "science",
    SPORTS: "sports",
    TECHNOLOGY: "technology",
  },
  setCountry: function (countryCode: string) {
    this.country = countryCode;
  },
  pageSize: 5,
  setPageSize: function (pageSize: number) {
    this.pageSize = pageSize;
  },
  headlines: function () {
    return `${this.baseUri}?country=${this.country}&pageSize=${this.pageSize}`;
  },
  category: function (category: string) {
    return `${this.baseUri}?category=${category}&pageSize=${this.pageSize}`;
  },
};
