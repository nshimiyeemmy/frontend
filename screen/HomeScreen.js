import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  const [activeTab, setactiveTab] = React.useState(1);

  const changeActiveTab = (newActiveTabValue) => {
    setactiveTab(newActiveTabValue);
  };

  const posts = [
    { title: "Small Stuff adds up!", color: "#5185ff" },
    {
      title: "You are doing well paying off your loans",
      color: "#50d2c2",
      liked: true,
    },
    { title: "Small Stuff adds up!", color: "#6163ce" },
    { title: "You are doing well paying off your loans", color: "#ff85ae" },
  ];

  return (
    <Animatable.View style={styles.container} animation={"bounceIn"}>
      <View style={styles.profileInfo}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
            }}
          />
        </View>
        <View style={styles.profileStatement}>
          <Text style={styles.profileName}>Welcome back, Emmy</Text>
          <Text style={styles.profileDesc}>
            Your Financial Situation is looking good!
          </Text>
        </View>
        <View></View>
      </View>
      <View style={styles.tabs}>
        <Text
          onPress={() => changeActiveTab(1)}
          style={[styles.tab, activeTab === 1 ? styles.activeTab : {}]}
        >
          Today
        </Text>
        <Text
          onPress={() => changeActiveTab(2)}
          style={[styles.tab, activeTab === 2 ? styles.activeTab : {}]}
        >
          Monthly
        </Text>
        <Text
          onPress={() => changeActiveTab(3)}
          style={[styles.tab, activeTab === 3 ? styles.activeTab : {}]}
        >
          Yearly
        </Text>
      </View>
      <View style={styles.postsContainer}>
        {posts.map((post, index) => {
          return (
            <View
              style={[styles.post, { backgroundColor: post.color }]}
              key={post.title + index}
            >
              <View style={styles.post__up}>
                <Text style={styles.post__title}>{post.title}</Text>
                <Text style={styles.post__date}>09-06-2018</Text>
              </View>
              <View style={styles.post__middle}>
                <Text style={styles.post__desc}>
                  Last Month You made 42 transactions less than $5, spending
                  total of $147. Want to cut down on frivilous spendings?
                </Text>
              </View>
              <View style={styles.post__down}>
                <View>
                  <Text style={styles.post__category}>Finance</Text>
                </View>
                <FontAwesome
                  name={post.liked ? "heart" : "heart-o"}
                  color="white"
                  size={20}
                />
              </View>
            </View>
          );
        })}
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  profileInfo: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    marginHorizontal: 10,
  },
  profileStatement: {
    flex: 1,
    marginHorizontal: 10,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  profileDesc: {
    color: "gray",
    fontSize: 13,
  },
  profileImageContainer: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  tabs: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  tab: {
    textAlign: "center",
    paddingBottom: 10,
    fontWeight: "bold",
  },
  activeTab: {
    borderBottomColor: "orange",
    borderBottomWidth: 2,
  },
  postsContainer: {
    width: "100%",
    minHeight: 400,
    backgroundColor: "#e5e5e5",
  },
  post: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    backgroundColor: "#5ec4c6",
  },
  post__up: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 20,
  },
  post__middle: {
    marginBottom: 10,
  },
  post__down: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 10,
  },
  post__title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 19,
  },
  post__date: {
    color: "#fff",
    fontSize: 17,
    minWidth: 100,
    textAlign: "right",
  },
  post__desc: {
    color: "#fff",
    fontSize: 14,
  },
  post__category: {
    color: "#4b4850",
    backgroundColor: "#fff",
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 15,
    fontWeight: "500",
  },
});

export default HomeScreen;
