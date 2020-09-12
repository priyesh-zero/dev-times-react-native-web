import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/ui/Navbar";
import { StatusBar as StatusBarPlaceholder } from "./src/ui/StatusBar";

import { isNative } from "./src/constants/index";

export default function App() {
  return (
    <>
      {isNative && <StatusBarPlaceholder />}
      <Navbar />
      <View style={styles.container}>
        <Text>
          Open up App.tsx to start working on your app! Why won't it run
        </Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
