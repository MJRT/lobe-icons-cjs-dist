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

// src/IFlyTekCloud/components/Color.tsx
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
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M20.713 6.655c-.414-1.426-1.748-2.472-3.357-2.472a3.62 3.62 0 00-1.7.423C14.62 3.046 12.804 2 10.735 2 7.77 2 5.31 4.16 4.943 6.944 2.138 7.39 0 9.728 0 12.58c0 3.14 2.62 5.68 5.862 5.68 1.61 0 3.08-.646 4.138-1.671.276-.267.529-.557.736-.89a5.02 5.02 0 01-.713.845 8.998 8.998 0 00-1.77 5.39V22a16.682 16.682 0 018.666-2.717h.046c3.035 0 5.633-1.871 6.621-4.499A6.599 6.599 0 0024 12.445c0-2.427-1.31-4.565-3.287-5.79zM6.966 12.869a.836.836 0 01-.851.824.81.81 0 01-.805-.824v-2.183a.81.81 0 01.805-.824c.46 0 .85.379.85.824v2.183zm3.011 1.069a.86.86 0 01-.874.846.86.86 0 01-.873-.846v-4.9a.86.86 0 01.873-.846.86.86 0 01.874.846v4.9zm3.104-1.047c0 .445-.414.824-.874.824s-.85-.379-.85-.824v-2.227c0-.446.367-.824.85-.824.46 0 .873.378.873.824v2.227zm3.149 1.069a.86.86 0 01-.874.846.86.86 0 01-.873-.846v-4.9a.86.86 0 01.873-.846.86.86 0 01.874.846v4.9zm3.08-1.091a.836.836 0 01-.85.824.81.81 0 01-.805-.824v-2.183a.81.81 0 01.805-.824c.46 0 .85.379.85.824v2.183z",
        fill: "#2A80E2"
      }
    )
  );
});
var Color_default = Icon;
