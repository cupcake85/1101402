import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Header() {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
            source={require("../assets/images/logo_saii.png")}
            style={{ height: 30, width: 100 }}
          ></Image>
        </View>
        <View style={styles.right}>
          <View style={styles.cart}>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.tab}>
        <Text style={{ color: "white" }}>Home</Text>
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
