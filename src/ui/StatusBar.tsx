import React from "react";
import { View, StyleSheet } from "react-native";
import { colorPallet } from "../constants/index";

export const StatusBar = () => <View style={styles.statusBar}></View>;

const styles = StyleSheet.create({
  statusBar: {
    height: 25,
    backgroundColor: colorPallet.primary,
  },
});
