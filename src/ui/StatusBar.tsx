import React from "react";
import { View, StyleSheet } from "react-native";
import { colorPallet } from "../constants/index";

export const StatusBar = () => <View style={styles.statusBar}></View>;

const styles = StyleSheet.create({
  statusBar: {
    height: 1, // 1 is to make header sticky on web; 25 worked for me if not using react-navigation-header
    backgroundColor: colorPallet.primary,
  },
});
