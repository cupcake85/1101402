import * as React from "react";
import { View, Text, Button } from "react-native";

function LoginScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ioiyuhil Screen</Text>
      <Button
        title="Go to Lists"
        onPress={() => navigation.navigate("Lists")}
      />
    </View>
  );
}

export default LoginScreen;
