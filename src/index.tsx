import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { LoaderProvider } from "./context/LoaderContext";
import { Loader } from "./ui/Loader";
import { StatusBar } from "./ui/StatusBar";
import { Routes } from "./routes";

export const MainApp = () => {
  return (
    <LoaderProvider>
      <StatusBar />

      <View style={styles.container}>
        <Routes />
      </View>
      <Loader />
    </LoaderProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
