<img alt="React Native Custom Text" src="https://github.com/WrathChaos/react-native-custom-text/blob/master/assets/logo.png" width="1050"/>

Custom Text with cool heading & font family interaction for React Native.

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-custom-text.svg)](https://www.npmjs.com/package/@freakycoder/react-native-custom-text)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-custom-text.svg)](https://www.npmjs.com/package/@freakycoder/react-native-custom-text)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/WrathChaos/react-native-custom-text.svg)](https://greenkeeper.io/)

<p align="center">
  <img alt="React Native Custom Text" src="https://github.com/WrathChaos/react-native-custom-text/blob/master/assets/Screenshots/example.png" width="49.7%" />
</p>

## Installation

Add the dependency:

```ruby
npm i @freakycoder/react-native-custom-text
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

## Basic Usage

```js
import Text from "@freakycoder/react-native-custom-text";

<Text h1 fontFamily="AvenirNext">Hello Heading 1</Text>
```

## Advanced Usage
```js
import Text from "@freakycoder/react-native-custom-text";

<Text h3 bold right color="#913400" numberOfLines={1} style={{ margin: 16}}>
    Heading 3 Bold Right Sided Custom Text
</Text>
```

## Custom Advanced Usage (Wrapper)
If you'are going to use Custom Text rather than Text component on your WHOLE project. I suggest that write a TextWrapper functional component and you can set and use it like original Text component

```js
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
```


#### Usage of it:

Here is the example of how to use it, also you can check the example folder.

```js
// Important! Path will be change depends on your project structure tree
import Text from '../../shared/components/text/TextWrapper'; 


<Text
  h1
  color="#513843"
  numberOfLines={2}
  fontFamily="Grotesk"
>
  Example Text for TextWrapper
</Text>
```

## Configuration - Props

| Property   |    Type    | Default | Description                                                      |
| ---------- | :--------: | :-----: | ---------------------------------------------------------------- |
| h1         |  boolean   |  false  | heading 1 prop                                                   |
| h2         |  boolean   |  false  | heading 2 prop                                                   |
| h3         |  boolean   |  false  | heading 3 prop                                                   |
| h4         |  boolean   |  false  | heading 4 prop                                                   |
| h5         |  boolean   |  false  | heading 5 prop                                                   |
| h6         |  boolean   |  false  | heading 7 prop                                                   |
| left       |  boolean   |  false  | make the text left sided                                         |
| center     |  boolean   |  false  | make the text centered                                           |
| right      |  boolean   |  false  | make the text right sided                                        |
| bold       |  boolean   |  false  | make the text style bold  (Compatible with Font Family)          |
| color      |   color    | "#fff"  | change the text's color                                          |
| fontFamily | FontFamily | default | set your own FontFamily directly to the Text component as a prop |

Any Text props are available like 'numberOfLines' or any other. There is no restriction. 

### ToDos

- [x] LICENSE
- [ ] Write an article about the lib on Medium


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Custom Text Library is available under the MIT license. See the LICENSE file for more info.
