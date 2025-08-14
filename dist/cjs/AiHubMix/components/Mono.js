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

// src/AiHubMix/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM11.864 5.913c-.322 1.01-.53 1.836-.623 2.48-.072.472-.072 1.072 0 1.8.072.731.072 1.336 0 1.814a2.79 2.79 0 01-.961 1.744 2.795 2.795 0 01-1.89.708 2.78 2.78 0 01-2.034-.84 2.792 2.792 0 01-.848-2.024c-.003-.7-.075-1.472-.216-2.316-.068-.422-.139-.775-.21-1.06l-.094-.384-.17.356a7.862 7.862 0 00-.758 3.244v.16a7.84 7.84 0 00.623 3.089 7.952 7.952 0 004.228 4.228 7.84 7.84 0 003.09.623 7.841 7.841 0 003.088-.623 7.952 7.952 0 004.228-4.228 7.84 7.84 0 00.624-3.09v-.159a7.862 7.862 0 00-.76-3.244l-.168-.356-.094.385c-.072.284-.142.637-.211 1.059-.14.844-.212 1.616-.216 2.316a2.793 2.793 0 01-.848 2.024 2.78 2.78 0 01-2.034.84 2.795 2.795 0 01-1.89-.708 2.79 2.79 0 01-.96-1.744c-.072-.478-.072-1.083 0-1.814.071-.728.071-1.328 0-1.8-.094-.644-.302-1.47-.624-2.48L12 5.496l-.136.417zm3.22 11.396a6.387 6.387 0 01-3.084.778 6.387 6.387 0 01-3.084-.778 6.38 6.38 0 01-1.771-1.399c-.063-.07.01-.178.102-.153.369.1.75.15 1.144.15.781 0 1.508-.197 2.18-.59a4.253 4.253 0 001.349-1.233.099.099 0 01.16 0c.357.505.807.916 1.35 1.232.672.394 1.398.591 2.18.591.393 0 .775-.05 1.144-.15.09-.025.164.083.102.153a6.379 6.379 0 01-1.771 1.399z"
      }
    )
  );
});
var Mono_default = Icon;
