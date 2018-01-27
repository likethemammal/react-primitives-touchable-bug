likethemammal/react-primitives-touchable-bug
=========

Reproduction of a bug with Touchable in react-primitives

![Screenshot of the bug](https://i.imgur.com/dkiquaV.png)

## Installation

```js
  //clone repo

  npm install
```

## Development

```js
  //in that same root dir
  npm run build
  
  //after the build
  cd example/
  
  npm run dev
  
  //go to http://localhost:8080/
```

## Partial fix 01/27/18

Was able to get the example with Touchable to run without errors and work as expected by importing `/modules/injectResponderEventPlugin` from 'react-native-web', **in the example**, but not inside the bundled hypothetical component library. Its as if the inject doesnt occur if react-native-web is bundled twice.