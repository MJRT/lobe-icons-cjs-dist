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

// src/Vercel/components/Text.tsx
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
      viewBox: "0 0 89 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M27.97 4.583c-4.6 0-7.916 3-7.916 7.5s3.734 7.5 8.334 7.5c2.779 0 5.229-1.1 6.745-2.954l-3.187-1.842c-.842.921-2.121 1.459-3.559 1.459-1.995 0-3.691-1.042-4.32-2.708h11.675a7.53 7.53 0 00.146-1.459c0-4.496-3.317-7.496-7.917-7.496zm-3.94 6.042c.52-1.662 1.945-2.708 3.937-2.708 1.995 0 3.42 1.046 3.937 2.708H24.03zm48.808-6.042c-4.6 0-7.917 3-7.917 7.5s3.733 7.5 8.333 7.5c2.78 0 5.23-1.1 6.746-2.954l-3.188-1.842c-.841.921-2.12 1.459-3.558 1.459-1.996 0-3.692-1.042-4.32-2.708h11.674c.092-.467.146-.95.146-1.459 0-4.496-3.317-7.496-7.916-7.496zM68.9 10.625c.52-1.662 1.946-2.708 3.938-2.708 1.995 0 3.42 1.046 3.937 2.708H68.9zm-16.263 1.458c0 2.5 1.634 4.167 4.167 4.167 1.717 0 3.004-.78 3.667-2.05l3.2 1.846c-1.325 2.208-3.809 3.537-6.867 3.537-4.604 0-7.916-3-7.916-7.5s3.316-7.5 7.916-7.5c3.058 0 5.538 1.33 6.867 3.538l-3.2 1.846c-.663-1.271-1.95-2.05-3.667-2.05-2.529 0-4.166 1.666-4.166 4.166zM87.005 0v19.167h-3.75V0h3.75zM23.092 0L11.546 20 0 0h4.33l7.216 12.5L18.762 0h4.33zm24.546 5v4.037a4.75 4.75 0 00-1.334-.204c-2.42 0-4.166 1.667-4.166 4.167v6.167h-3.75V5h3.75v3.833C42.138 6.717 44.6 5 47.638 5z" })
  );
});
var Text_default = Icon;
