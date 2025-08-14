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

// src/Doc2X/components/Color.tsx
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
        d: "M21.66 7.017a3.308 3.308 0 10-4.677-4.678l-3.458 3.458a3.308 3.308 0 104.678 4.677l3.458-3.457zM10.475 18.203a3.308 3.308 0 10-4.678-4.678l-3.458 3.458a3.308 3.308 0 104.678 4.677l3.458-3.457z",
        fill: "#7748F9"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M18.203 13.525a3.308 3.308 0 10-4.678 4.678l3.458 3.458a3.308 3.308 0 004.678-4.678l-3.458-3.458zM7.017 2.339a3.308 3.308 0 10-4.678 4.678l3.458 3.457a3.308 3.308 0 004.677-4.678L7.017 2.34z",
        fill: "#BFABFB"
      }
    )
  );
});
var Color_default = Icon;
