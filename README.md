# react-antd-button-svg-icons

> Welcome to ClassFunc. We love to use new technology!

[![NPM](https://img.shields.io/npm/v/react-antd-button-svg-icons.svg)](https://www.npmjs.com/package/react-antd-button-svg-icons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Demo
link: [https://duongdam.github.io/react-antd-button-svg-icons/](https://duongdam.github.io/react-antd-button-svg-icons/)

Resource: [https://github.com/duongdam/react-antd-button-svg-icons](https://github.com/duongdam/react-antd-button-svg-icons)

![plot](buttonNPM.gif)

## Install

```bash
yarn add react-antd-button-svg-icons
npm install --save react-antd-button-svg-icons
```

## Usage

```js
import { CLFButtonSVG } from "react-antd-button-svg-icons";
import "react-antd-button-svg-icons/dist/index.css";
```

```js
import React from "react";
import { ReactComponent as TestSVG } from "./test.svg";
import { CLFButtonSVG } from "react-antd-button-svg-icons";
import "react-antd-button-svg-icons/dist/index.css";
import { message } from "antd";

const App = () => {
  return (
    <div style={{
      width: "100%",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30
    }}>
      <CLFButtonSVG
        name={"ClassFunc"}
        size={"default"}
        iconComponent={<TestSVG/>}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        // loading={true}
        width={150}
        height={30}
        background="#1790FF"
        borderColor="#1790FF"
      />

      <CLFButtonSVG
        name={"ClassFunc"}
        size={"default"}
        iconComponent={<TestSVG/>}
        iconRevert={true}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        // loading={true}
        width={150}
        height={30}
        background="#1790FF"
        borderColor="#1790FF"
      />

      <CLFButtonSVG
        name={"Full Width"}
        size={"default"}
        iconComponent={<TestSVG/>}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        block={true}
      />

      <CLFButtonSVG
        name={"Full Width Loading"}
        size={"default"}
        iconComponent={<TestSVG/>}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        loading={true}
        block={true}
      />

      <CLFButtonSVG
        name={"Full Width Disable"}
        size={"default"}
        iconComponent={<TestSVG/>}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={true}
        loading={false}
        block={true}
      />
    </div>
  );
};

export default App;

```

```text
Props: Here are some props of Antd Button.
   iconComponent = null, // Icon SVG Component
   iconRevert = false, // Position icon End if true
   name = null,  // Button Name
   onClick = null, // Button onClick
   onKeyClick = null, // Button Ctrl or Command + Click
   size = null,     // Button Size
   disable = false, // true or false
   loading = false, // true or false
   width = null, // Button width
   height = null, // Button height
   key = null, // Button key
   margin = null,
   padding = null,
   block = false, // if true -> full width
   className = null, // add more className
   minWidth = null, // button minWidth
   minHeight = null, // button minHeight
   background = "#1790FF", // button background color
   borderColor = "#1790FF" // button border color
```

## License

MIT © [duongdam](https://github.com/duongdam)
