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

// src/Stability/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M7.223 21c4.252 0 7.018-2.22 7.018-5.56 0-2.59-1.682-4.236-4.69-4.918l-1.93-.571c-1.694-.375-2.683-.825-2.45-1.975.194-.957.773-1.497 2.122-1.497 4.285 0 5.873 1.497 5.873 1.497v-3.6S11.62 3 7.293 3C3.213 3 1 5.07 1 8.273c0 2.59 1.534 4.097 4.645 4.812l.334.083c.473.144 1.112.335 1.916.572 1.59.375 1.999.773 1.999 1.966 0 1.09-1.15 1.71-2.67 1.71C2.841 17.416 1 15.231 1 15.231v3.989S2.152 21 7.223 21z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M20.374 20.73c1.505 0 2.626-1.073 2.626-2.526 0-1.484-1.089-2.526-2.626-2.526-1.505 0-2.594 1.042-2.594 2.526 0 1.484 1.089 2.526 2.594 2.526z" })
  );
});
var Mono_default = Icon;
