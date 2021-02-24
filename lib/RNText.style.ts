import { TextStyle, StyleSheet } from "react-native";

export const _setFontFamily = (customFontFamily: string): TextStyle => {
  return {
    fontFamily: customFontFamily,
  };
};

export const _setColor = (color: string): TextStyle => {
  return {
    color,
  };
};

interface Style {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  center: TextStyle;
  left: TextStyle;
  right: TextStyle;
  bold: TextStyle;
}

export default StyleSheet.create<Style>({
  h1: {
    fontSize: 32,
    marginLeft: 0,
    marginRight: 0,
  },
  h2: {
    fontSize: 24,
    marginLeft: 0,
    marginRight: 0,
  },
  h3: {
    fontSize: 18,
    marginLeft: 0,
    marginRight: 0,
  },
  h4: {
    fontSize: 16,
    marginLeft: 0,
    marginRight: 0,
  },
  h5: {
    fontSize: 13,
    marginLeft: 0,
    marginRight: 0,
  },
  h6: {
    fontSize: 10,
    marginLeft: 0,
    marginRight: 0,
  },
  center: {
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  left: {
    textAlign: "left",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  right: {
    textAlign: "right",
    alignItems: "flex-end",
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  bold: {
    fontWeight: "bold",
  },
});
