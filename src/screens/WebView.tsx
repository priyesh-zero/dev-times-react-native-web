import React from "react";
import { WebView } from "react-native-webview";
import { NavigationRoute } from "../interface/Navigation";
import { useRoute } from "@react-navigation/native";

interface WebViewProps {}

export const WebViewScreen: React.FC<WebViewProps> = () => {
  const route = useRoute<NavigationRoute<"WebView">>();
  return <WebView source={{ uri: route.params.url }} />;
};
