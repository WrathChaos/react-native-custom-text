import React from "react";
import PropTypes from "prop-types";
import styles, { setFontFamily } from "./styles";
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
    center,
    children,
    fontFamily,
    ...rest
  } = props;
  return (
    <Text
      style={StyleSheet.flatten([
        fontFamily && setFontFamily(fontFamily),
        center && styles.center,
        right && styles.right,
        left && styles.left,
        bold && styles.bold,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        h5 && styles.h5,
        h6 && styles.h6
      ])}
      {...rest}
    >
      {children}
    </Text>
  );
};

CustomText.propTypes = {
  // TODO: Auto-generated - Replace them!
  stars: PropTypes.number,
  ratings: PropTypes.string
};

CustomText.defaultProps = {
  // TODO: Auto-generated - Replace them!
  stars: 5,
  ratings: "Hellooo"
};

export default CustomText;
