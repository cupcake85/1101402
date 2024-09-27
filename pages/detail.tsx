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

export default function DetailScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { name, price, img, detail } = route.params;

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
            <TouchableOpacity style={styles.cartbtn}>
              <Text> ADD TO CART</Text>

              <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buybtn}>
              <Text style={{ color: "white" }}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 2.5, backgroundColor: "aqau", margin: 10 }}>
          <Text style={styles.des}>
            Start your life together with a spiritual ceremony, presided over by
            monks and surrounded by family and friends. Celebrate in a tropical
            setting and include traditional rituals in your auspicious union to
            bless a lifetime of happiness to come.
          </Text>
          <br />
          <Text style={styles.des}>What’s included</Text>
          <br />
          <FlatList
            data={[
              { key: "Wedding venue with decorations" },
              { key: "Flower petals on the aisle" },
              {
                key: "Table and chairs arranged and decorated in the style of your choice",
              },
              { key: "Master Of Ceremonies" },
              { key: "Buddhist Monks" },
              { key: "Traditional betel bowl and water pouring ceremony" },
              { key: "Floral garlands for the couple" },
              { key: "Welcome drinks and fresh fruits on arrival" },
              { key: "A wedding blessing certificate" },
              { key: "A ‘love tree’ planting ceremony" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.des}>{`- ` + item.key}</Text>
            )}
          />
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
