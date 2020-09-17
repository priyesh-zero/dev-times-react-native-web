import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackList = {
  Home: undefined;
  Article: undefined;
  WebView: { url: string };
};

export type NavigationStack<
  T extends keyof RootStackList
> = StackNavigationProp<RootStackList, T>;

export type NavigationRoute<T extends keyof RootStackList> = RouteProp<
  RootStackList,
  T
>;
