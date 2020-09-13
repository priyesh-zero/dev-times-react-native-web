import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/ui/Navbar";
import { StatusBar as StatusBarPlaceholder } from "./src/ui/StatusBar";

import { isNative } from "./src/constants/index";
import { Home } from "./src/screens/Home";
import { Loader } from "./src/ui/Loader";

export default function App() {
  return (
    <>
      {isNative && <StatusBarPlaceholder />}
      <Navbar />
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
      <Loader />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  special: {
    height: 100,
    width: 100,
  },
});
