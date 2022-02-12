import { Text, StyleSheet, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Footer({ navigation }) {
  const route = navigation.state?.routeName;
  const footerIcons = [
    {
      icon: "home",
      label: "Home",
      screen: "HomeScreen",
      active: route === "HomeScreen",
    },
    {
      icon: "file",
      label: "Saved",
      screen: "SavedScreen",
      active: route === "SavedScreen",
    },
    {},
    {
      icon: "user",
      label: "Profile",
      screen: "ProfileScreen",
      active: route === "ProfileScreen",
    },
    {
      icon: "ellipsis-h",
      label: "More",
      screen: "MoreScreen",
      active: route === "MoreScreen",
    },
  ];
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <View style={styles.footerPlus}>
          <View style={styles.footerPlusContent}>
            <View style={styles.footerPlusIconContainer}>
              <FontAwesome name={"plus"} color="white" size={20} />
            </View>
          </View>
        </View>

        {/* icons */}
        <View style={styles.footerIcons}>
          {footerIcons.map((footerIcon) => {
            return footerIcon.icon && footerIcon.label ? (
              <View key={footerIcon.icon} style={styles.footerIconContainer}>
                <FontAwesome
                  name={footerIcon.icon}
                  color={footerIcon.active ? "#4590ee" : "lightgray"}
                  size={20}
                  onPress={() => {
                    footerIcon.screen && navigation.navigate(footerIcon.screen);
                  }}
                />
                <Text
                  style={[
                    styles.footerIconLabel,
                    footerIcon.active ? styles.footerIconActiveLabel : {},
                  ]}
                >
                  {footerIcon.label}
                </Text>
              </View>
            ) : (
              <View></View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  footerContent: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  footerPlus: {
    position: "absolute",
    top: -20,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
  },
  footerPlusContent: {
    backgroundColor: "#f2f5f8",
    // padding: 10,
    height: 50,
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  footerPlusIconContainer: {
    backgroundColor: "#4590ee",
    height: 40,
    width: 40,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
  footerIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  footerIconLabel: {
    color: "black",
  },
  footerIconActiveLabel: {
    color: "#4590ee",
  },
});
