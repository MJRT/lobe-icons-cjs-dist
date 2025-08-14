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

// src/TII/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M11.098 7.563H4.75V9.77h1.77v6.668h2.807V9.77h1.77V7.563zM14.812 7.563h-2.807v8.875h2.807V7.563zM19.433 7.563h-2.807v8.875h2.807V7.563z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M12 24v-1.055c3.01 0 5.613-1.079 7.737-3.208 2.123-2.13 3.209-4.727 3.209-7.737 0-3.009-1.08-5.607-3.209-7.736-2.128-2.13-4.732-3.21-7.736-3.21V0c3.294 0 6.148 1.184 8.482 3.518C22.817 5.852 24 8.706 24 12c0 3.295-1.183 6.155-3.518 8.483C18.147 22.811 15.3 24 12.001 24z" })
  );
});
var Mono_default = Icon;
