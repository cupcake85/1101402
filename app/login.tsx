import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";

export default function LogIn({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View
        style={{
          flex: 2.8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 250, height: 150 }}
          source={require("../assets/images/SAii-Phi-Phi-Island-Village.jpg")}
        />
      </View>

      <View style={{ flex: 7.2 }}>
        <View style={styles.box1}>
          <Text style={{ width: "100%", fontSize: 20 }}>
            Login to your Account
          </Text>

          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.textInput} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Lists")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 5,
            alignItems: "center",
          }}
        >
          <View style={styles.boxLine}>
            <View style={styles.line} />
            <View>
              <Text style={styles.textLine}>Or sign in with</Text>
            </View>
            <View style={styles.line} />
          </View>

          <View style={styles.imgLogIn}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/images/google_icon-icons.com_62736.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/images/facebook_logo_icon_147291.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/images/social_apple_mac_65.png")}
                style={styles.icon}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Don't have an account ? </Text>
            <Text style={{ color: "#0F08EA" }}>Sign up</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 6,
    // ตั้งค่าเงา
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // สำหรับ Android
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#4d9c9b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },

  box1: {
    flex: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    flexDirection: "column",
  },

  boxLine: {
    marginLeft: 50,
    marginRight: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },

  line: { flex: 1, height: 1, backgroundColor: "#7F7F7F" },

  textLine: {
    width: 110,
    textAlign: "center",
    margin: 5,
    color: "#7F7F7F",
    fontSize: 16,
  },

  imgLogIn: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 15,
  },

  iconContainer: {
    width: 85,
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    // ตั้งค่าเงา
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // สำหรับ Android
    marginHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
