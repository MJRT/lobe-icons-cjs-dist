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

// src/Gemma/components/Simple.tsx
var Simple_exports = {};
__export(Simple_exports, {
  default: () => Simple_default
});
module.exports = __toCommonJS(Simple_exports);
var import_react = require("react");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      fill: "currentColor",
      height: size,
      style: { flex: "none", lineHeight: 1, ...style },
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0Zm.031 4.5A14.281 14.281 0 0 1 9 9a14.742 14.742 0 0 1-4.5 3.063 14.281 14.281 0 0 1 4.5 3.03 14.281 14.281 0 0 1 3.031 4.5 14.742 14.742 0 0 1 3.063-4.5 14.281 14.281 0 0 1 4.5-3.03A14.742 14.742 0 0 1 15.094 9a14.74 14.74 0 0 1-3.063-4.5Z",
        fillRule: "evenodd"
      }
    )
  );
});
var Simple_default = Icon;
