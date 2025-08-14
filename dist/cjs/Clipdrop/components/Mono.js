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

// src/Clipdrop/components/Mono.tsx
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
        d: "M1 7.233C1 3.791 3.73 1 7.098 1h1.674c.66 0 1.195.547 1.195 1.222v1.1c0 .675-.535 1.222-1.195 1.222H7.098c-1.387 0-2.87 1.272-2.87 2.69v1.71c0 .675-.535 1.223-1.195 1.223h-.837C1.536 10.167 1 9.619 1 8.944v-1.71zM23 16.767C23 20.209 20.27 23 16.902 23h-1.674c-.66 0-1.195-.547-1.195-1.222v-1.1c0-.675.535-1.223 1.195-1.223h1.674c1.387 0 2.87-1.27 2.87-2.688v-1.711c0-.675.535-1.223 1.195-1.223h.837c.66 0 1.196.547 1.196 1.223v1.71zM16.902 1C20.27 1 23 3.79 23 7.233v1.711c0 .675-.535 1.223-1.196 1.223h-1.076c-.66 0-1.195-.548-1.195-1.223v-1.71c0-1.418-1.244-2.934-2.63-2.934h-1.675c-.66 0-1.195-.547-1.195-1.222v-.856c0-.675.535-1.222 1.195-1.222h1.674zM7.098 23C3.73 23 1 20.21 1 16.767v-1.711c0-.675.535-1.223 1.196-1.223h1.076c.66 0 1.195.547 1.195 1.223v1.71c0 1.418 1.244 2.934 2.63 2.934h1.675c.66 0 1.195.547 1.195 1.222v.856c0 .675-.535 1.222-1.195 1.222H7.098z"
      }
    )
  );
});
var Mono_default = Icon;
