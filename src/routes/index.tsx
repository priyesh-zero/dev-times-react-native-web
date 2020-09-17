import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import { RootStackList } from "../interface/Navigation";
import { Home } from "../screens/Home";
import { Article } from "../screens/Article";
import { CompanyName } from "../ui/navbar/CompanyName";
import { colorPallet } from "../constants/index";
import { WebViewScreen } from "../screens/WebView";

const linking = {
  prefixes: [],
  config: {
    screens: {
      Home: "home",
      Article: "article",
      WebView: "webview",
    },
  },
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colorPallet.primary,
  },
});

const Stack = createStackNavigator<RootStackList>();

export const Routes = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <CompanyName />,
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTintColor: colorPallet.textPrimary,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Article" component={Article} />
        <Stack.Screen
          name="WebView"
          component={WebViewScreen}
          initialParams={{ url: "https://github.com/priyesh-zero" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
