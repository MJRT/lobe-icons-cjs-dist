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

// src/Tiangong/components/Text.tsx
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
      viewBox: "0 0 47 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M10.431 9.712H2v2.901h7.44a9.33 9.33 0 01-1.379 2.076c-.692.802-1.62 1.837-2.783 2.594-1.526.993-3.184 1.745-3.184 1.745l1.298 2.854s2.476-1.18 4.198-2.547c1.248-.992 2.327-1.918 3.113-2.878.643-.784 1.16-1.91 1.55-2.86.26.533.538 1.049.832 1.563.896 1.541 1.88 2.549 3.396 3.868 1.613 1.404 4.6 2.972 4.6 2.972l1.178-2.972s-2.004-.84-3.655-2.099c-1.374-1.047-2.186-2.075-3.02-3.349a2.457 2.457 0 01-.278-.967h7.26v-2.9h-9.07c.025-.616.037-1.195.037-1.605V4.901h8.255V2H2.684v2.9h7.83v3.185c0 .522-.027 1.064-.083 1.627zM44.146 2.165H27.33v2.972h6.557v13.42h-7.854v2.853h19.434v-2.853h-8.35V5.137h7.03V2.165z" })
  );
});
var Text_default = Icon;
