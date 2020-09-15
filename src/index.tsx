import React from "react";
import { LoaderProvider } from "./context/LoaderContext";
import { isNative } from "./constants";
import { Navbar } from "./ui/Navbar";
import { View, StyleSheet } from "react-native";
import { Home } from "./screens/Home";
import { Loader } from "./ui/Loader";
import { StatusBar } from "./ui/StatusBar";

export const MainApp = () => {
  return (
    <LoaderProvider>
      {isNative && <StatusBar />}
      <Navbar />
      <View style={styles.container}>
        <Home />
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
