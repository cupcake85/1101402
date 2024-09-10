import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from "react-native";

export default function LogIn({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 2.8, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          style={{ width: 200, height: 100, borderRadius: 2 }}
          source={require("../assets/images/google.png")}
        />
      </View>
      <View style={{ flex: 7.2, backgroundColor: "green" }}>
        <View
          style={{
            flex: 5,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "red",
            marginLeft: 50,
            marginRight: 50,
            flexDirection: "column",
          }}
        >
          <Text>Login to your Account </Text>
          <TextInput
            placeholder="Email"
            style={{ borderWidth: 2, width: 293, height: 50 }}
          ></TextInput>
          <TextInput
            placeholder="Password "
            style={{ borderWidth: 2, width: 293, height: 50 }}
          ></TextInput>

          <TouchableOpacity style={{ borderWidth: 2, width: 293, height: 50 }}>
            <Text>Log In</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 5, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Or sign in with</Text>

          <Text>Google</Text>
          <Text>face Book</Text>
          <Text>Apple Id</Text>
          <Button
            title="Go to Lists"
            onPress={() => navigation.navigate("Lists")}
          />
        </View>
      </View>
    </View>
  );
}
