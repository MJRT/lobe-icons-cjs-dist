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

// src/PixVerse/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const { id, fill } = (0, import_useFillId.useFillId)(import_style.TITLE);
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
        clipRule: "evenodd",
        d: "M17.578 9.384c.48 0 .87.39.87.87v3.867l4.245-3.663a.435.435 0 01.72.329v10.732a.436.436 0 01-.71.339l-4.255-3.441v3.891a.87.87 0 01-.209.565l-.087.088a.87.87 0 01-.686.209L6.559 21.76v1.304a.87.87 0 01-.869.87H.87a.87.87 0 01-.87-.869v-12.81c0-.48.39-.87.87-.871h16.708zm-6.158 4.348H6.978a.435.435 0 00-.435.434v2.847c0 .24.195.434.435.434h4.442c.24 0 .434-.194.435-.434v-2.847a.435.435 0 00-.435-.434zM12.826 0a4.354 4.354 0 110 8.708 4.354 4.354 0 010-8.708zm-7.98 1.313a3.628 3.628 0 110 7.256 3.628 3.628 0 010-7.256z",
        fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id, x1: "15", x2: "-.5", y1: "1", y2: "24" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#E8632A", stopOpacity: ".996" }), /* @__PURE__ */ React.createElement("stop", { offset: ".586", stopColor: "#B465E6", stopOpacity: ".996" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#979FD9", stopOpacity: ".996" })))
  );
});
var Color_default = Icon;
