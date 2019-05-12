export function setFontFamily(customFontFamily) {
  return {
    fontFamily: customFontFamily
  };
}

export function setColor(color) {
  return {
    color
  };
}

export default {
  h1: {
    fontSize: 32,
    marginLeft: 0,
    marginRight: 0
  },
  h2: {
    fontSize: 24,
    marginLeft: 0,
    marginRight: 0
  },
  h3: {
    fontSize: 18,
    marginLeft: 0,
    marginRight: 0
  },
  h4: {
    fontSize: 16,
    marginLeft: 0,
    marginRight: 0
  },
  h5: {
    fontSize: 13,
    marginLeft: 0,
    marginRight: 0
  },
  h6: {
    fontSize: 10,
    marginLeft: 0,
    marginRight: 0
  },
  center: {
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  left: {
    textAlign: "left",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start"
  },
  right: {
    textAlign: "right",
    alignItems: "flex-end",
    alignContent: "flex-end",
    justifyContent: "flex-end"
  },
  bold: {
    fontWeight: "bold"
  }
};
