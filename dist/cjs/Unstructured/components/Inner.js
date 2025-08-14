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

// src/Unstructured/components/Inner.tsx
var Inner_exports = {};
__export(Inner_exports, {
  default: () => Inner_default
});
module.exports = __toCommonJS(Inner_exports);
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
    /* @__PURE__ */ React.createElement("path", { d: "M12 24c-1.635 0-3.093-.358-4.375-1.075a8.065 8.065 0 01-3.038-2.936C3.862 18.73 3.5 17.306 3.5 15.717V2h4.32v13.427c0 .852.176 1.627.53 2.325.37.678.872 1.21 1.504 1.598.632.388 1.347.581 2.146.581.818 0 1.533-.193 2.146-.58a4.003 4.003 0 001.477-1.6c.372-.697.557-1.472.557-2.324V2h4.32v13.717c0 1.589-.372 3.013-1.115 4.272a7.857 7.857 0 01-3.01 2.936C15.093 23.642 13.635 24 12 24z" })
  );
});
var Inner_default = Icon;
