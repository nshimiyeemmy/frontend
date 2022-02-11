import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation={"bounceIn"}
          duration={1500}
          source={require("../assets/logo-small.png")}
          style={styles.logo}
          resizeMode={"contain"}
        />
      </View>
      <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
        <Text style={styles.title}>
          Scientific And Technological Research Center
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          >
            <Text> Sign In To The Account </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          >
            <Text> Get started </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.22;
const width_logo = height * 0.58;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: width_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    borderRadius: 50,
    borderColor: "#38b6ff",
    borderWidth: 1,
    paddingVertical: 10,
  },
  signIn: {
    width: 150,
    height: 40,
    borderRadius: 50,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SplashScreen;
