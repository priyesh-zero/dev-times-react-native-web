import { StatusBar } from "expo-status-bar";
import React from "react";
import { MainApp } from "./src";

export default function App() {
  return (
    <>
      <MainApp />
      <StatusBar style="auto" />
    </>
  );
}
