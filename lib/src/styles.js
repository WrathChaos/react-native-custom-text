export function setFontFamily(customFontFamily) {
  return {
    fontFamily: customFontFamily
  };
}

export default {
  h1: {
    fontSize: 32,
    marginLeft: 0,
    marginTop: 10,
    display: block,
    marginRight: 0,
    fontWeight: bold,
    marginBottom: 10
  },
  h2: {
    fontSize: 24,
    marginTop: 13,
    marginLeft: 0,
    display: block,
    marginRight: 0,
    fontWeight: bold,
    marginBottom: 13
  },
  h3: {
    fontSize: 18,
    marginTop: 16,
    marginLeft: 0,
    display: block,
    marginRight: 0,
    fontWeight: bold,
    marginBottom: 16
  },
  h4: {
    fontSize: 16,
    marginTop: 21,
    marginLeft: 0,
    display: block,
    marginRight: 0,
    fontWeight: bold,
    marginBottom: 21
  },
  h5: {
    fontSize: 13,
    marginTop: 26,
    marginLeft: 0,
    display: block,
    marginRight: 0,
    fontWeight: bold,
    marginBottom: 26
  },
  h6: {
    fontSize: 10,
    marginTop: 37,
    marginLeft: 0,
    display: block,
    marginRight: 0,
    fontWeight: bold,
    marginBottom: 37
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
