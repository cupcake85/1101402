import Header from "@/components/header";
import * as React from "react";
import { View, Text, Button } from "react-native";

export default function ListScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header name="LIST" />
      <Text>List Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}
