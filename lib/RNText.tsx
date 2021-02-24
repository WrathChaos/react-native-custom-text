import * as React from "react";
import {
  StyleSheet,
  Text,
  TextProps,
  StyleProp,
  TextStyle,
} from "react-native";
/**
 * ? Local Imports
 */
import styles, { _setColor, _setFontFamily } from "./RNText.style";

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface IRNTextProps extends TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  left?: boolean;
  bold?: boolean;
  color?: string;
  right?: boolean;
  center?: boolean;
  fontFamily?: string;
  style?: CustomTextStyleProp;
  children?: React.ReactNode;
}

const RNText: React.FC<IRNTextProps> = ({
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
}) => {
  return (
    <Text
      style={StyleSheet.flatten([
        style && style,
        color && _setColor(color),
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
        fontFamily && _setFontFamily(fontFamily),
      ])}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default RNText;
