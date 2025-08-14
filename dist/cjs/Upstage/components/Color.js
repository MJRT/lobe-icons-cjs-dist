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

// src/Upstage/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const { fill, id } = (0, import_useFillId.useFillId)(import_style.TITLE);
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
        d: "M19.763 0l-.373 1.297h2.594L22.354 0h-2.591zM16.192 2.27l-.376 1.298h5.52l.37-1.298h-5.514zM12.897 4.54l-.376 1.298h8.166l.37-1.298h-8.16zM2.85 6.81l-.377 1.298h17.565l.37-1.297H2.848zM3.884 9.081l-.376 1.297H19.39l.37-1.297H3.882zM4.088 24l.376-1.297H1.866L1.5 24h2.588zM7.662 21.73l.376-1.297H2.515L2.15 21.73h5.513zM10.957 19.459l.376-1.297h-8.17l-.366 1.297h8.16zM21.005 17.189l.376-1.297H3.812l-.366 1.297h17.559zM19.967 14.919l.376-1.297H4.461l-.366 1.297h15.872zM18.786 12.649l.376-1.297H4.26l-.366 1.297h14.893z",
        fill
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id, x1: "11.927", x2: "11.927", y2: "24" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "#AEBCFE" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#805DFA" })))
  );
});
var Color_default = Icon;
