import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { isNative, dimensions } from "../../constants/index";
import { article } from "../../interface/Headline";
import { useNavigation } from "@react-navigation/native";
import { NavigationStack } from "src/interface/Navigation";
import { setItem } from "../../services/StorageService";

const dim = {
  x: isNative ? dimensions.width : 500,
  y: 100,
};

const styles = StyleSheet.create({
  card: {
    width: dim.x,
    height: dim.y,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    paddingLeft: dim.y + 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: dim.y,
    resizeMode: "cover",
    backgroundColor: "gray",
  },
});

interface Props {
  article: article;
}

export const CategoryCard: FC<Props> = ({ article }) => {
  const navigation = useNavigation<NavigationStack<"Home">>();
  const handleClick = () => {
    setItem("activeArticle", JSON.stringify(article));
    navigation.push("Article");
  };
  return (
    <TouchableOpacity style={styles.card} onPress={handleClick}>
      <Image
        source={{ uri: article.urlToImage }}
        defaultSource={require("../../../assets/default.jpeg")}
        style={styles.image}
      />
      <Text>{article.title}</Text>
    </TouchableOpacity>
  );
};
