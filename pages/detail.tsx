import Header from "@/components/header";
import * as React from "react";
import { View, Text, Button } from "react-native";

export default function DetailScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header name="DETAIL" />
      <Text>Detail Screen</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
}
