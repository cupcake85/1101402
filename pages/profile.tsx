import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 7,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.profile}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Digitech SUT</Text>
          <Text>dgt@digitect.sut.ac.th</Text>
        </View>
      </View>
      <View style={{ flex: 3, margin: 40 }}>
        <View style={styles.setlist}>
          <AntDesign
            name="setting"
            size={20}
            color="black"
            style={{ marginRight: 2 }}
          />
          <Text>Setting</Text>
        </View>
        <View style={styles.setlist}>
          <Ionicons name="help-buoy-outline" size={20} color="black" />
          <Text>Help</Text>
        </View>
        <TouchableOpacity
          style={styles.setlist}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialIcons name="logout" size={20} color="black" />
          <Text>Logout</Text>
        </TouchableOpacity>

        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  setlist: {
    flexDirection: "row",
  },
});
