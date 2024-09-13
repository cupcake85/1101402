import Header from "@/components/header";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProductCard({ navigation }: { navigation: any }) {
  return (
    <View>
      <View style={{ flex: 3, padding: 10 }}></View>
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
