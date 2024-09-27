import Header from "@/components/header";
import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function CartScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView>
      <View>
        <Header name="Home > Cart" />

        <View style={styles.section}>
          <View style={styles.sectionLine}></View>
          <Text>My Cart</Text>
        </View>

        <View style={styles.CardContent}>
          <View style={styles.CardContent2}>
            <Image
              source={require("../assets/images/product2.jpg")}
              style={styles.ImgCard}
            ></Image>

            <View style={styles.row}>
              <View>
                <Text style={{ color: "#454545" }}>
                  Traditional Thai Ceremony
                </Text>
                <Text style={styles.text1}>
                  Book your Traditional Thai Wedding and work with our expert
                  team to personalise your dream day and tailor every element to
                  your taste.
                </Text>
              </View>

              <View style={styles.dashedLine} />

              <View style={styles.row}>
                <Text style={{ color: "#777777" }}>AMOUNT</Text>
              </View>
              <View style={styles.dashedLine} />
              <View style={styles.rowPrice}>
                <Text style={{ color: "#777777" }}>PRICE</Text>
                <Text style={{ fontSize: 17 }}>THB 85,000</Text>
              </View>
              <View style={styles.dashedLine} />
              <View
                style={{
                  margin: 15,
                  alignItems: "flex-end",
                }}
              >
                <View style={styles.rowDelete}>
                  <Image
                    source={require("../assets/images/delete_4219.png")}
                    style={{ width: 20, height: 20 }}
                  ></Image>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            margin: 15,
            backgroundColor: "#ffffff",
            marginBottom: 40,
          }}
        >
          <View
            style={{
              padding: 15,
              backgroundColor: "#E7EEED",
            }}
          >
            <Text style={{ fontSize: 17 }}>YOUR ORDER SUMMARY</Text>
          </View>

          <View style={{ margin: 15 }}>
            <View style={styles.rowtotal}>
              <Text>Subtotal</Text>
              <Text style={{ fontSize: 14 }}>85,000.00 THB</Text>
            </View>
            <View style={styles.rowtotal2}>
              <Text>Discount</Text>
              <Text style={{ fontSize: 14 }}>0.00 THB</Text>
            </View>
          </View>

          <View style={styles.dashedLine2} />

          <View style={styles.rowPrice}>
            <Text>Total Price</Text>
            <Text style={{ fontSize: 15 }}>85,000.00 THB</Text>
          </View>

          <View style={styles.rowButton}>
            <TouchableOpacity style={styles.typeBox2}>
              <Text>CONTINUE SHOPPING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.typeBox}>
              <Text style={{ color: "#ffffff" }}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    margin: 15,
    alignItems: "center",
  },
  sectionLine: {
    backgroundColor: "#8FC9BC",
    width: 6,
    height: 25,
    marginRight: 10,
  },
  CardContent: {
    height: 440,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    marginTop: -0.5,
  },
  CardContent2: {
    height: "93%",
    backgroundColor: "#ffffff",
    width: "93%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#A9A9A9",
  },
  ImgCard: {
    height: 120,
    width: 170,
    borderRadius: 5,
  },
  dashedLine: {
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    marginTop: 10,
  },
  dashedLine2: {
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 1,
    borderStyle: "solid",
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    margin: 15,
  },
  rowPrice: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowDelete: {
    backgroundColor: "#D9D9D9",
    width: 33,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  rowtotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  rowtotal2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 12,
    color: "#777777",
    marginTop: 5,
  },
  typeBox: {
    backgroundColor: "#4D9C9B",
    width: 100,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  typeBox2: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  rowButton: {
    margin: 15,
    flexDirection: "row",
  },
});
