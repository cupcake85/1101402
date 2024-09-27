import Header from "@/components/header";
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard(props: any) {
  const navigation = useNavigation();
  const { name, price, img, detail } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detail", { name, price, img })}
      >
        <View style={styles.img}>
          <Image
            style={{ resizeMode: "cover", height: "100%", width: "100%" }}
            source={img}
          />
        </View>
        <View style={{ alignItems: "center", padding: 3, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 500 }}>{name}</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "light",
              color: "#777777",
              padding: 8,
            }}
          >
            {detail}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              padding: 8,
            }}
          >
            {price}
          </Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Text style={{ color: "white" }}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    margin: 10,
  },
  card: {
    borderWidth: 1,
    // borderColor: "#E4E4E4",
    borderColor: "black",
    borderRadius: 6,
    height: 300,
  },
  img: {
    height: 100,
  },
  btn: {
    backgroundColor: "#4D9C9B",
    padding: 10,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    margin: 10,
    position: "absolute", //ทำให้อยู่ล่างตรงกลาง
    bottom: 0,
    left: 0,
  },
});
