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

// src/ModelScope/components/Text.tsx
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
      viewBox: "0 0 146 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M28.069 6.654v12.692h11V6.654h-11zm3.808 9.942h3.385V9.404h-3.385v7.192zm60.041-9.942v12.692h10.155v-2.75h-6.345V9.404h6.345v-2.75H91.918zm12.792 0v12.692h11.001V6.654H104.71zm3.808 9.942h3.385V9.404h-3.385v7.192zm10.185-9.942V24h3.808v-4.654h7.193V6.654h-11.001zm3.808 9.942h3.385V9.404h-3.385v7.192zM49.445 6.654h-7.193v12.692h11.001V2h-3.808v4.654zm-3.385 9.942h3.385V9.404H46.06v7.192zm24.913 2.75h3.808V2h-3.808v17.346zM56.531 6.654v12.798h11v-2.856H60.34v-2.115h7.193V6.654H56.53zm3.808 5.077h3.384V9.404H60.34v2.327zm76.313.053h3.385v-2.38h-3.385v2.38zm-3.808-5.13v12.692h11.001v-2.75h-7.193v-2.062h7.193v-7.88h-11.001zM78.047 3.89v8.818h7.194v3.888h-7.194v2.75h11.002V9.958h-7.195V6.64h7.195V3.89H78.047zm-72.239.226v7.615H2v3.808h3.808v3.807h3.808V15.54H5.808V11.73h3.808V7.923h3.805V4.116H5.808zm7.615 11.422h3.808V7.923h-3.808v7.615zm3.81-11.422v3.807h3.808v11.423h3.809V4.116h-7.617z"
      }
    )
  );
});
var Text_default = Icon;
