import React from "react";
import PropTypes from "prop-types";
import styles, { setFontFamily, setColor } from "./styles";
import { Text, StyleSheet } from "react-native";

const CustomText = props => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    left,
    bold,
    right,
    style,
    color,
    center,
    children,
    fontFamily,
    ...rest
  } = props;
  return (
    <Text
      style={StyleSheet.flatten([
        style && style,
        color && setColor(color),
        center && styles.center,
        right && styles.right,
        left && styles.left,
        bold && styles.bold,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        h5 && styles.h5,
        h6 && styles.h6,
        fontFamily && setFontFamily(fontFamily)
      ])}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default CustomText;
