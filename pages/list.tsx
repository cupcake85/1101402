import Header from "@/components/header";
import * as React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

export default function ListScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ backgroundColor: "green", flex: 1.5 }}></View>
      <View style={{ backgroundColor: "red", flex: 1.8 }}></View>
      <View style={{ backgroundColor: "blue", flex: 2 }}></View>
      <View style={{ backgroundColor: "purple", flex: 7 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 20,
  },
});
