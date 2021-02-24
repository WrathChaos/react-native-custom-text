import React from "react";
import { View, StyleSheet } from "react-native";
// import Text from "@freakycoder/react-native-custom-text";
// import TextWrapper from "./src/TextWrapper";
import RNText from "./build/dist/RNText";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RNText h1 bold center numberOfLines={1}>
          Heading 1
        </RNText>
        <RNText h2 center style={{ marginTop: 16 }}>
          Heading 2
        </RNText>
        <RNText h3 bold center>
          Heading 3
        </RNText>
        <RNText h4 center>
          Heading 4
        </RNText>
        <RNText h5 bold center>
          Heading 5
        </RNText>
        <RNText h6 center>
          Heading 6
        </RNText>
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
