import React from "react";
import PropTypes from "prop-types";
import Text from "@freakycoder/react-native-custom-text";

const TextWrapper = props => {
  const { numberOfLines, fontFamily, children, ...rest } = props;
  return (
    <Text fontFamily={fontFamily} numberOfLines={numberOfLines} {...rest}>
      {children}
    </Text>
  );
};

TextWrapper.propTypes = {
  fontFamily: PropTypes.string,
  numberOfLines: PropTypes.number
};

TextWrapper.defaultProps = {
  numberOfLines: 1,
  fontFamily: "Your Custom Font"
};

export default TextWrapper;
