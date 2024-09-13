import Header from "@/components/header";
import ProductCard from "@/components/productCard";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ListScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Header name="HOME" />
        <View style={{ flex: 0.7 }}>
          <Text style={styles.title}>
            Book ahead and save big on your perfect island vacay.
          </Text>
        </View>
        <View style={{ flex: 0.7 }}>
          <Text style={styles.describe}>
            Be an early bird and enjoy 10% off a tropical escape with breakfast
            included. Treat yourself to a beautiful Bungalows & Hillside Villas.
            Discover what Phi Phi has to offer, retreat into SAii comfort – the
            choice is all yours.
          </Text>
        </View>
        <View
          style={{ flex: 1.1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.typeBoxGroup}>
            <TouchableOpacity style={styles.allBox}>
              <Text style={{ color: "white" }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.typeBox}>
              <Text>IN-ROOM RELATED</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.typeBox}>
              <Text>TOUR & ACTIVITY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.typeBox}>
              <Text>FOOD & BEVERAGE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 7.5 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProductCard
              name="Marine Discovery"
              detail="Make the most of your unforgettable experience at Phi Phi Island"
              price="THB 5,250"
              img={require("../assets/images/product1.jpg")}
            />
            <ProductCard
              name="Traditional Thai Ceremony"
              detail="Book your Traditional Thai Wedding and work with our expert team."
              price="THB 85,000"
              img={require("../assets/images/product2.jpg")}
            />
            <ProductCard
              name="Stay Longer & Save"
              detail="Give yourself time to unwind in paradise – save 15% on 7 nights or more."
              price="THB 10,250"
              img={require("../assets/images/product3.jpg")}
            />
            <ProductCard
              name="Romance in Paradise"
              detail="Settle in for island luxury, stunning sunsets and quality time. "
              price="THB 11,000"
              img={require("../assets/images/product4.jpg")}
            />
            <ProductCard
              name="Marine Discovery"
              detail="Make the most of your unforgettable experience at Phi Phi Island"
              price="THB 5,250"
              img={require("../assets/images/product1.jpg")}
            />
            <ProductCard
              name="Marine Discovery"
              detail="Make the most of your unforgettable experience at Phi Phi Island"
              price="THB 5,250"
              img={require("../assets/images/product1.jpg")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    marginTop: 10,
    fontSize: 22,
    fontWeight: "500",
  },
  describe: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    fontSize: 14,
    fontWeight: "light",
    color: "#777777",
  },
  typeBoxGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  typeBox: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    margin: 10,
    height: 35,
    padding: 15,
    borderColor: "#4D9C9B",
  },
  allBox: {
    backgroundColor: "#4D9C9B",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 35,
    padding: 15,
  },
  cardGroup: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
