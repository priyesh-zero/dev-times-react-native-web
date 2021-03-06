import React, { FC } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { isNative, dimensions, colorPallet } from "../../constants/index";
import { article } from "../../interface/Headline";
import { useNavigation } from "@react-navigation/native";
import { NavigationStack } from "../../interface/Navigation";
import { setItem } from "../../services/StorageService";

const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    aspectRatio: 16 / 9,
    padding: 10,
    maxWidth: 500,
    maxHeight: 500 * 0.56,
  },
  image: {
    width: isNative ? dimensions.width - 20 : 480,
    height: isNative ? dimensions.width * 0.56 - 20 : 500 * 0.56 - 20,
    resizeMode: "cover",
  },
  textView: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "#00000088",
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: colorPallet.textPrimary,
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export const HeadingCard: FC<{ article: article }> = ({ article }) => {
  const navigation = useNavigation<NavigationStack<"Home">>();
  const handleClick = () => {
    setItem("activeArticle", JSON.stringify(article));
    navigation.push("Article");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Image
        source={{ uri: article.urlToImage }}
        defaultSource={require("../../../assets/default.jpeg")}
        style={styles.image}
      />
      <View style={styles.textView}>
        <Text style={styles.text}>{article.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
