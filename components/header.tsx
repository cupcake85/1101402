import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function Header(props: any) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.logo}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/images/logo_saii.png")}
            style={{ height: 30, width: 100 }}
          ></Image>
        </TouchableOpacity>
        <View style={styles.right}>
          <TouchableOpacity
            style={styles.cart}
            onPress={() => navigation.navigate("Cart")}
          >
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tab}>
        <Text style={{ color: "white" }}>{props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#FFFFFF",
  },
  tab: {
    backgroundColor: "#8FC9BC",
    padding: 15,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 150,
    marginTop: 5,
  },
  right: { flexDirection: "row" },
  cart: {
    backgroundColor: "#C3E1DB",
    borderRadius: 60,
    marginRight: 15,
    padding: 5,
  },
});
