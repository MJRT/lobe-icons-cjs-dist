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

// src/CodeGeeX/components/Mono.tsx
var Mono_exports = {};
__export(Mono_exports, {
  default: () => Mono_default
});
module.exports = __toCommonJS(Mono_exports);
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
      viewBox: "0 0 24 24",
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M13.517 12.106c.823 0 1.225.992.659 1.58l-5.377 5.403a.925.925 0 01-1.317 0L.274 11.812a.936.936 0 010-1.323l6.055-6.083a1.287 1.287 0 011.81 0 1.303 1.303 0 010 1.819l-4.243 4.282a.936.936 0 000 1.323L7.5 15.45a.925.925 0 001.317 0l.475-.477a.905.905 0 00.274-.662v-.938c0-.129 0-.257.019-.386a.926.926 0 01.933-.864h2.999v-.018z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M23.74 12.878L17.67 18.98a1.287 1.287 0 01-1.81 0 1.303 1.303 0 010-1.82l4.26-4.282a.936.936 0 000-1.323l-3.62-3.62a.925.925 0 00-1.317 0l-.475.477a.949.949 0 00-.274.663v.937c0 .13 0 .257-.019.386a.926.926 0 01-.933.864h-2.999c-.823 0-1.226-.992-.659-1.58l4.078-4.1.53-.553.75-.754a.925.925 0 011.318 0l7.225 7.26a.977.977 0 01.018 1.342l-.001.001z" })
  );
});
var Mono_default = Icon;
