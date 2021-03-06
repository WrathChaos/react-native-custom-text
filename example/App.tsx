import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "@freakycoder/react-native-custom-text";
// import TextWrapper from "./src/TextWrapper";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1 bold center numberOfLines={1}>
          Heading 1
        </Text>
        <Text h2 center style={{ marginTop: 16 }}>
          Heading 2
        </Text>
        <Text h3 bold center>
          Heading 3
        </Text>
        <Text h4 center>
          Heading 4
        </Text>
        <Text h5 bold center>
          Heading 5
        </Text>
        <Text h6 center>
          Heading 6
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
