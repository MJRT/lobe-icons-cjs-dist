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

// src/Kling/components/Text.tsx
var Text_exports = {};
__export(Text_exports, {
  default: () => Text_default
});
module.exports = __toCommonJS(Text_exports);
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
      viewBox: "0 0 80 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M74.74 8.828c-.539-2.284-1.416-3.083-3.726-3.331a10.18 10.18 0 00-1.957-.042c-3.072.249-4.067 1.338-4.067 4.392 0 1.57-.013 3.14.005 4.71.023 2.076.969 3.5 2.996 3.865 1.362.244 2.879.175 4.22-.168 1.723-.437 2.488-1.946 2.307-3.863h-4.586v-2.918h8.088c0 .527.017 1.048.035 1.565.038 1.13.075 2.237-.075 3.317-.4 2.926-2.839 5.147-6.288 5.556-1.726.204-3.596.052-5.28-.398-3.13-.839-4.854-3.392-4.874-6.632-.013-1.875-.003-3.75 0-5.626.002-4.039 1.66-6.147 5.633-6.943 2.703-.542 5.398-.459 7.892.903 2.155 1.179 3.124 3.054 3.035 5.608h-3.352l-.005.005zM57.685 21.748h-3.159V5.638h-9.198v16.074h-3.24V2.697h15.597v19.051zM30.807 18.849h-8.205V2.513h-3.13v19.16h11.335v-2.824zM36.876 21.735h-3.023V2.511h3.023v19.224zM2 21.735h3.022v-9.117h.042l8.12 9.056h3.747l-8.12-9.056h-.125l8.12-9.993h-3.748l-8.036 9.89V2.511H2v19.224z" })
  );
});
var Text_default = Icon;
