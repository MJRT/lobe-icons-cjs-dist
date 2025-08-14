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

// src/Volcengine/components/Mono.tsx
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
        d: "M7.29 5.36L3.148 21.737a.215.215 0 00.203.261h8.29a.214.214 0 00.215-.261L7.7 5.359a.214.214 0 00-.41 0z",
        fillOpacity: ".5"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M4.553 16.18l-1.406 5.558a.214.214 0 00.203.261h2.42-4.551a.214.214 0 01-.214-.26l2.275-8.961a.214.214 0 01.409 0l.864 3.402z"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M14.44.15a.214.214 0 00-.41 0L8.366 21.739a.214.214 0 00.214.261H19.9a.214.214 0 00.215-.261L14.44.151z",
        fillOpacity: ".5"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M16.694 22h3.207a.215.215 0 00.214-.262l-1.839-6.993 1.164-4.592a.214.214 0 01.411 0l2.951 11.586a.214.214 0 01-.214.261h-5.894z"
      }
    ),
    /* @__PURE__ */ React.createElement("path", { d: "M10.278 7.741L6.685 21.736a.214.214 0 00.214.264h7.17a.216.216 0 00.214-.166.216.216 0 000-.098L10.687 7.742a.214.214 0 00-.409 0z" })
  );
});
var Mono_default = Icon;
