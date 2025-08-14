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

// src/Phidata/components/Color.tsx
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
        clipRule: "evenodd",
        d: "M2.692 3.752C2 4.769 2 6.193 2 9.04v5.92c0 2.847 0 4.27.692 5.288a4 4 0 001.06 1.06C4.769 22 6.193 22 9.04 22h5.92c2.847 0 4.27 0 5.288-.692a4 4 0 001.06-1.06C22 19.231 22 17.807 22 14.96V9.04c0-2.847 0-4.27-.692-5.288a4 4 0 00-1.06-1.06C19.231 2 17.807 2 14.96 2H9.04c-2.847 0-4.27 0-5.288.692a4 4 0 00-1.06 1.06zm16.57 11.478a.755.755 0 10-1.51.032c.029 1.305-.304 1.912-.725 2.21-.468.334-1.288.473-2.635.272a.755.755 0 00-.222 1.493c1.445.215 2.769.15 3.731-.534 1.01-.718 1.393-1.94 1.36-3.473z",
        fill: "#FF4017",
        fillRule: "evenodd"
      }
    )
  );
});
var Color_default = Icon;
