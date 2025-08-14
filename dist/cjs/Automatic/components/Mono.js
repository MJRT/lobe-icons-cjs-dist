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

// src/Automatic/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M8.462 3.5h2.924l8.33 17h-1.46L10.617 4.942l-1.442.001z", opacity: ".8" }),
    /* @__PURE__ */ React.createElement("path", { d: "M5.474 20.5l2.817-5.366 2.873 5.366h5.541l-8.362-17L0 20.5z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M12.768 3.501L21.113 20.5h1.46L14.238 3.504z", opacity: ".4" }),
    /* @__PURE__ */ React.createElement("path", { d: "M14.195 3.501L22.54 20.5H24L15.666 3.504z", opacity: ".2" }),
    /* @__PURE__ */ React.createElement("path", { d: "M11.34 3.501L19.683 20.5h1.464L12.81 3.504z", opacity: ".6" })
  );
});
var Mono_default = Icon;
