import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";
import { colorPallet } from "../../constants/index";

interface ArticleInfoProps {
  title: string;
  author: string;
  sourceName: string;
  publishedAt: string;
}

export const ArticleInfo: React.FC<ArticleInfoProps> = ({
  title,
  author,
  sourceName,
  publishedAt,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.authorText}>{author}</Text>
      </View>
      <Text style={styles.subText}>
        {sourceName} - {format(new Date(publishedAt), "do MMM yyyy - HH:mm")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleText: {
    fontWeight: "600",
    fontSize: 20,
    color: colorPallet.primary,
  },
  authorText: {
    color: colorPallet.textBlackPrimary,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  subText: {
    color: colorPallet.textBlackSecondary,
    fontSize: 15,
    marginTop: 20,
  },
});
