import React from "react";
import { View, StyleSheet } from "react-native";
import { isNative } from "./../constants";

const styles = StyleSheet.create({
  container: !isNative
    ? {
        width: 500,
        height: 500 * 0.56,
        backgroundColor: "wheat",
      }
    : {
        width: "100%",
        backgroundColor: "wheat",
        aspectRatio: 16 / 9,
      },
});

export const HeadingCard = () => {
  return <View style={styles.container}></View>;
};
