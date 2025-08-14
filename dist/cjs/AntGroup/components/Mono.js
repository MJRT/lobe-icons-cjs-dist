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

// src/AntGroup/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M15.984 1.383c-.259.593-.877.914-1.334 1.348-.702.669-.998 1.726-1.218 2.682 3.37.775 5.995 3.532 6.486 7.025.566 4.016-1.85 7.859-5.744 9.134-3.894 1.276-8.153-.38-10.126-3.935A8.339 8.339 0 016.457 6.833a18.703 18.703 0 01-.376-.802l-.174-.408a8.698 8.698 0 01-.618-1.987 7.523 7.523 0 01-.051-.37 3.717 3.717 0 01-.024-.34 2.506 2.506 0 01.132-.872 1.26 1.26 0 01.384-.594.842.842 0 011.165.11c.694.82.169 2.078.142 3.02.009.575.111 1.144.301 1.684l-.103.052a8.404 8.404 0 001.318-.79c.28-.243.45-.742.781-.864.33-.121.682.146.946.297.278.145.587.219.901.214l.462.007c.076.002.152.005.226.011.212.01.422.026.63.05l.196-1.08c.04-.216.082-.43.126-.645l.141-.641c.14-.7.42-1.367.823-1.96.305-.431.75-.746 1.262-.89.877-.217 1.24.629.937 1.348zm-2.244 5.44c-2.841.002-4.898 2.532-4.628 5.64.27 3.11 2.781 5.642 5.613 5.666 2.832.024 4.932-2.512 4.658-5.644-.273-3.133-2.802-5.666-5.643-5.663zm.357.57a4.707 4.707 0 013.304 1.445 5.703 5.703 0 011.643 3.49 4.841 4.841 0 01-1.141 3.705v.015a3.923 3.923 0 01-2.808 1.303 4.664 4.664 0 01-3.367-1.387 5.678 5.678 0 01-1.71-3.518 4.832 4.832 0 011.14-3.753 3.923 3.923 0 012.813-1.3h.126z" })
  );
});
var Mono_default = Icon;
