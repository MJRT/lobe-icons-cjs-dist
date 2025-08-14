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

// src/Flowith/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M13.152 3c-.64 0-1.158.51-1.158 1.137V18.84c0 .628.519 1.137 1.159 1.137h3.308c.64 0 1.158-.51 1.158-1.137V4.137C17.62 3.51 17.101 3 16.461 3h-3.308zm-6.24.081c-.314 0-.599.123-.807.323-.001.002-.004 0-.003-.002 0-.002-.002-.003-.003-.001l-.035.045a1.134 1.134 0 00-.139.181c-.11.144-.206.296-.287.456L.403 14.36l-.296.654a1.01 1.01 0 00-.016.034l-.032.07c0 .002 0 .002.002.002a1.105 1.105 0 00-.06.369l-.001 3.383A1.14 1.14 0 001.152 20h3.456a1.14 1.14 0 001.152-1.128V13.232c0-2.491 2.063-4.511 4.608-4.511a1.14 1.14 0 001.152-1.128V4.209a1.14 1.14 0 00-1.152-1.128H6.912zm11.328 14.1c0-1.558 1.29-2.82 2.88-2.82 1.59 0 2.88 1.262 2.88 2.82C24 18.736 22.71 20 21.12 20c-1.59 0-2.88-1.262-2.88-2.82z"
      }
    )
  );
});
var Mono_default = Icon;
