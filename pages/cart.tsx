import Header from "@/components/header";
import * as React from "react";
import { View, Text, Button } from "react-native";

export default function CartScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header name="CART" />
      <Text>Cart Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
