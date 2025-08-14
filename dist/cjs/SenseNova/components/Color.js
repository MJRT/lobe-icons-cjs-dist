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

// src/SenseNova/components/Color.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M23 8.333h-7.333v7.334H23V8.333z", fill: "#06FDB7" }),
    /* @__PURE__ */ React.createElement("path", { d: "M1 1v14.667h7.333V8.333h7.334V1H1z", fill: "#5B2AD8" }),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M14.038 4.333h.17l1.459 1.456v.17l-1.63-1.626zM13.224 4.333h.17l2.273 2.268v.17l-2.443-2.438zM12.41 4.333h.17l3.087 3.08v.17l-3.257-3.25zM11.596 4.333h.17l3.9 3.892v.108h-.06l-4.01-4zM10.782 4.333h.17l4.01 4h-.17l-4.01-4zM9.968 4.333h.17l4.009 4h-.17l-4.01-4zM9.154 4.333h.17l4.009 4h-.17l-4.01-4zM8.34 4.333h.17l4.01 4h-.17l-4.01-4zM7.521 4.333h.17l4.01 4h-.17l-4.01-4zM6.707 4.333h.17l4.01 4h-.17l-4.01-4zM5.892 4.333h.17l4.009 4h-.17l-4.01-4zM5.077 4.333h.17l4.01 4h-.17l-4.01-4zM4.333 4.403v-.07h.1l4.01 4h-.11v.06l-4-3.99zM4.333 5.215v-.17l4 3.991v.17l-4-3.99zM4.333 6.027v-.17l4 3.991v.17l-4-3.99zM4.333 6.84v-.17l4 3.99v.17l-4-3.99zM4.333 7.652v-.17l4 3.99v.17l-4-3.99zM4.333 8.464v-.17l4 3.99v.17l-4-3.99zM4.333 9.276v-.17l4 3.991v.17l-4-3.991zM4.333 10.088v-.17l4 3.991v.17l-4-3.991zM4.333 10.9v-.17l4 3.991v.17l-4-3.991zM4.333 11.712v-.17l4 3.991v.134h-.036l-3.964-3.955zM4.333 12.526v-.17l3.318 3.31h-.17l-3.148-3.14zM4.333 13.34v-.169l2.502 2.496h-.17L4.333 13.34zM4.333 14.152v-.169l1.688 1.684h-.17l-1.518-1.514zM4.333 14.965v-.17l.874.872h-.17l-.704-.702zM15.667 5.146l-.815-.813h.17l.645.644v.169z",
        fill: "#06FDB7"
      }
    ),
    /* @__PURE__ */ React.createElement("path", { d: "M23 15.667h-7.333V23H23v-7.333z", fill: "#5B2AD8" }),
    /* @__PURE__ */ React.createElement("path", { d: "M15.667 15.667H8.333V23h7.334v-7.333z", fill: "#06FDB7" })
  );
});
var Color_default = Icon;
