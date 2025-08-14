"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/N8n/components/Text.tsx
var Text_exports = {};
__export(Text_exports, {
  default: () => Text_default
});
module.exports = __toCommonJS(Text_exports);
var import_react = require("react");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      fill: "currentColor",
      fillRule: "evenodd",
      height: size,
      style: { flex: "none", lineHeight: 1, ...style },
      viewBox: "0 0 60 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M2 21.667h4.26v-9.02c0-2.962 1.798-4.26 3.828-4.26 1.997 0 3.561 1.332 3.561 4.06v9.22h4.26V11.582c0-4.36-2.53-6.89-6.49-6.89-2.496 0-3.894 1-4.893 2.297H6.26l-.366-1.963H2v16.641zM34.215 10.45v-.199c1.465-.732 2.93-1.997 2.93-4.493C37.144 2.163 34.18 0 30.087 0c-4.194 0-7.19 2.297-7.19 5.824 0 2.397 1.399 3.695 2.93 4.427v.2a5.653 5.653 0 00-3.728 5.392C22.1 19.47 25.095 22 30.054 22c4.96 0 7.855-2.53 7.855-6.157 0-2.996-1.997-4.76-3.694-5.392zm-4.16-7.388c1.664 0 2.895 1.065 2.895 2.862 0 1.798-1.265 2.863-2.896 2.863-1.63 0-2.995-1.065-2.995-2.863 0-1.83 1.298-2.862 2.995-2.862zm0 15.743c-1.931 0-3.495-1.232-3.495-3.329 0-1.897 1.298-3.328 3.46-3.328 2.132 0 3.43 1.398 3.43 3.395 0 2.03-1.498 3.262-3.396 3.262zM42.237 21.667h4.26v-9.02c0-2.962 1.797-4.26 3.828-4.26 1.997 0 3.56 1.332 3.56 4.06v9.22h4.261V11.582c0-4.36-2.53-6.89-6.49-6.89-2.496 0-3.894 1-4.893 2.297h-.266l-.366-1.963h-3.894v16.641z" })
  );
});
var Text_default = Icon;
