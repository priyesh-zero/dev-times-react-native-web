import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useFetch, useFetchAll } from "../hooks/useFetch";
import { LoaderContext } from "../context/LoaderContext";
import { api, colorPallet } from "../constants/index";
import { HeadlineResponse } from "../interface/Headline";
import { HeadLineContainer } from "../ui/HeadlineContainer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: colorPallet.textDanger,
  },
});

const urlList = (): { [key: string]: string } => {
  const list = {};
  Object.entries(api.categories).forEach(([key, value]) => {
    list[key] = api.category(value);
  });
  return list;
};

export const Home = () => {
  const { toggleLoading } = useContext(LoaderContext);

  const [headLinesData, headLinesLoading, headlinesError] = useFetch<
    HeadlineResponse
  >(api.headlines());

  const [sectionData, sectionLoading, sectionError] = useFetchAll<
    HeadlineResponse
  >(urlList());

  useEffect(() => {
    toggleLoading(headLinesLoading);
  }, [headLinesLoading]);

  if (headlinesError) {
    return <Text style={styles.errorText}>{headlinesError.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {headLinesData && <HeadLineContainer articles={headLinesData.articles} />}
      <Text>{JSON.stringify(sectionData, null, 2)}</Text>
      <Text>{JSON.stringify(sectionLoading, null, 2)}</Text>
      <Text>{JSON.stringify(sectionError, null, 2)}</Text>
    </View>
  );
};
