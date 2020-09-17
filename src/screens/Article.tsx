import React from "react";
import { View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getItem } from "../services/StorageService";
import { LoaderContext } from "../context/LoaderContext";
import { NavigationStack } from "../interface/Navigation";
import { ArticleContainer } from "../ui/ArticleContainer";
import { article } from "../interface/Headline";

interface ArticleProps {}

export const Article: React.FC<ArticleProps> = () => {
  const { toggleLoading, isLoading } = React.useContext(LoaderContext);
  const [article, setArticle] = React.useState<article | null>(null);
  const navigation = useNavigation<NavigationStack<"Article">>();

  React.useEffect(() => {
    toggleLoading(true);
    getItem("activeArticle")
      .then((article) => {
        if (!article) {
          navigation.navigate("Home");
          return;
        }
        setArticle(JSON.parse(article));
        toggleLoading(false);
      })
      .catch((err) => {
        Alert.alert("Error", err.message);
      });
  }, [setArticle]);

  return (
    <View style={{ flex: 1 }}>
      {!isLoading && article && <ArticleContainer article={article} />}
    </View>
  );
};
