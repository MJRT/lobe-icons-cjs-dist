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

// src/Monica/components/Mono.tsx
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
        d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-3.563c5.385 0 9.75-3.777 9.75-8.437 0-4.66-4.365-8.438-9.75-8.438S2.25 7.34 2.25 12s4.365 8.438 9.75 8.438z"
      }
    ),
    /* @__PURE__ */ React.createElement("path", { d: "M16.207 10.195a.96.96 0 111.357 1.357l-1.114 1.114 1.473.85a.96.96 0 11-.96 1.662l-2.444-1.411a1.003 1.003 0 01-.072-.046.962.962 0 01-.236-1.53l1.996-1.996zM7.688 9.937a1.5 1.5 0 00-1.5 1.5v2.25a1.5 1.5 0 003 0v-2.25a1.5 1.5 0 00-1.5-1.5z" })
  );
});
var Mono_default = Icon;
