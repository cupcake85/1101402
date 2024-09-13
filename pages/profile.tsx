import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>DiGiTECH</Text>
        <Text style={styles.userEmail}>dgt@gmail.com</Text>
      </View>

      {/* ส่วนของ My Account */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>My account</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../assets/images/user.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../assets/images/bookin.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../assets/images/cards.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>My Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../assets/images/vip.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>InSAiider VIP</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ส่วนของ Settings */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../assets/images/setting.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../assets/images/contact.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require("../assets/images/help.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ปุ่ม Log out */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutText}>Log out</Text>
        <Image
          source={require("../assets/images/logout.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: "#8FC9BC",
  },

  icon: { width: 25, height: 25 },

  userName: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  userEmail: {
    fontSize: 16,
    marginTop: 5,
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#B4B4B4",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // สำหรับ Android
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 15,
    // borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  logoutText: {
    fontSize: 18,
    color: "#C31919",
    marginRight: 10,
    fontWeight: "bold",
  },
});
