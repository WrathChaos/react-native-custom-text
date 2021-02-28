import React from "react";
import { TextProps } from "react-native";
import Text from "@freakycoder/react-native-custom-text";

interface ITextWrapperProps extends TextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = "Helvetica",
  color = "#fff",
  children,
  ...rest
}) => {
  return (
    <Text fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </Text>
  );
};

export default TextWrapper;
