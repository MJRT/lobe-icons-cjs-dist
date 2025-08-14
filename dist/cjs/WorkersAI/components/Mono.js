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

// src/WorkersAI/components/Mono.tsx
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
        d: "M15.99 2.444h-2.135v4.69l2.134.006V2.444zM11.06 5.153l2.224 2.225L11.77 8.88 9.552 6.662l1.51-1.51zM6.845 9.455h4.696l-.007 2.133h-4.69V9.456zm2.71 4.928l2.222-2.224 1.505 1.514-2.218 2.217-1.51-1.509.001.002zm4.3 4.216v-4.696l2.134.007v4.69h-2.134zm4.928-2.706l-2.225-2.225 1.514-1.504 2.22 2.22-1.51 1.51h.001zM23 11.588h-4.696l.007-2.133H23v2.133zm-2.709-4.926l-2.223 2.223-1.504-1.513 2.22-2.22 1.507 1.51zM3.2 2.926V4.13H1.994v1.929H3.2v1.204h1.927V6.059h1.204V4.131H5.127V2.926H3.2zm0 18.835v-2.2H1v-1.927h2.2v-2.198h1.927v2.198h2.2v1.927h-2.2v2.2H3.2z"
      }
    )
  );
});
var Mono_default = Icon;
