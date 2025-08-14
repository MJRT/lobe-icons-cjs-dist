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

// src/Figma/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      height: size,
      style: { flex: "none", lineHeight: 1, ...style },
      viewBox: "0 0 24 24",
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M4 20a4 4 0 014-4h4v4a4 4 0 01-8 0z", fill: "#24CB71" }),
    /* @__PURE__ */ React.createElement("path", { d: "M12 0v8h4a4 4 0 000-8h-4z", fill: "#FF7237" }),
    /* @__PURE__ */ React.createElement("path", { d: "M15.967 16a4 4 0 100-8 4 4 0 000 8z", fill: "#00B6FF" }),
    /* @__PURE__ */ React.createElement("path", { d: "M4 4a4 4 0 004 4h4V0H8a4 4 0 00-4 4z", fill: "#FF3737" }),
    /* @__PURE__ */ React.createElement("path", { d: "M4 12a4 4 0 004 4h4V8H8a4 4 0 00-4 4z", fill: "#874FFF" })
  );
});
var Color_default = Icon;
