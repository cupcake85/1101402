import Header from "@/components/header";
import * as React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function DetailScreen({ route }: { route: any }) {
  const { name, price, img, detail } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.3 }}>
          <Header name="DETAIL" />
        </View>

        <View
          style={{
            flex: 2.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={styles.img} source={img} />
        </View>
        <View style={{ flex: 1, margin: 10 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.des}>
            Book your Traditional Thai Wedding and work with our expert team to
            personalise your dream day and tailor every element to your taste.
          </Text>
        </View>
        <View style={{ flex: 1.2, margin: 10 }}>
          <Text style={styles.price}>{price}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.cartbtn}
              onPress={() => navigation.navigate("Cart")}
            >
              <Text>ADD TO CART </Text>
              <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buybtn}>
              <Text style={{ color: "white" }}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 2.5,
            backgroundColor: "aqau",
            margin: 10,
            marginBottom: 5,
          }}
        >
          <Text style={styles.des}>
            Start your life together with a spiritual ceremony, presided over by
            monks and surrounded by family and friends. Celebrate in a tropical
            setting and include traditional rituals in your auspicious union to
            bless a lifetime of happiness to come.
          </Text>
          <br />
          <Text style={styles.des}>What’s included</Text>
          <br />
          <Text style={styles.des}>- Wedding venue with decorations</Text>
          <Text style={styles.des}>- Flower petals on the aisle</Text>
          <Text style={styles.des}>
            - Table and chairs arranged and decorated in the style of your
            choice
          </Text>
          <Text style={styles.des}>- Master Of Ceremonies</Text>
          <Text style={styles.des}>- Buddhist Monks</Text>
          <Text style={styles.des}>
            - Traditional betel bowl and water pouring ceremony
          </Text>
          <Text style={styles.des}>- Floral garlands for the couple</Text>
          <Text style={styles.des}>
            - Welcome drinks and fresh fruits on arrival
          </Text>
          <Text style={styles.des}>- A wedding blessing certificate</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 250,
    width: 380,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "regular",
    marginBottom: 5,
  },
  des: {
    color: "grey",
    marginBottom: 5,
  },
  price: {
    fontSize: 30,
    fontWeight: "regular",
    marginBottom: 20,
  },
  cartbtn: {
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    padding: 10,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buybtn: {
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#4D9C9B",

    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },
});
