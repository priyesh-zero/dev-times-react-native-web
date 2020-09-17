import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { useFetch, useFetchAll } from "../hooks/useFetch";
import { LoaderContext } from "../context/LoaderContext";
import { api, colorPallet } from "../constants/index";
import { HeadlineResponse } from "../interface/Headline";
import { HeadLineContainer } from "../ui/HeadlineContainer";
import { CategoryContainer } from "../ui/CategoryContainer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: colorPallet.textDanger,
  },
});

const urlList = (pageList: {
  [key: string]: number;
}): { [key: string]: string } => {
  const list = {};
  Object.entries(api.categories).forEach(([key, value]) => {
    list[key] = api.category(value, pageList[key]);
  });
  return list;
};

const pageList = (): { [key: string]: number } => {
  const list = {};
  Object.entries(api.categories).forEach(([key, _value]) => {
    list[key] = 1;
  });
  return list;
};

interface Props {}

export const Home: React.FC<Props> = () => {
  const { toggleLoading } = useContext(LoaderContext);

  const [page, setPage] = React.useState(1);

  const [categoryPage, setCategoryPage] = React.useState(pageList());

  const [headLinesData, _headLinesLoading, headlinesError] = useFetch<
    HeadlineResponse
  >(api.headlines(page));

  const [sectionData, _sectionLoading, sectionError] = useFetchAll<
    HeadlineResponse
  >(urlList(categoryPage));

  useEffect(() => {
    toggleLoading(!headLinesData);
  }, [headLinesData]);

  if (headlinesError) {
    return <Text style={styles.errorText}>{headlinesError.message}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {headLinesData && (
        <HeadLineContainer
          articles={headLinesData.articles}
          fetchMore={() => setPage((state) => state + 1)}
        />
      )}
      {sectionData &&
        Object.entries<HeadlineResponse>(sectionData)
          .filter(([_key, data]) => !!data)
          .sort(([key1, _val], [key2, __val]) => key1.localeCompare(key2))
          .map(([key, data]) => (
            <CategoryContainer
              key={key}
              title={key}
              articles={data.articles}
              fetchMore={(key: string) =>
                setCategoryPage((state) => ({
                  ...state,
                  [key]: state[key] + 1,
                }))
              }
            />
          ))}
    </ScrollView>
  );
};
