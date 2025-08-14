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

// src/Aya/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M19.066.131c-.064-.106-.212-.17-.34-.106l-2.39 1.333c-1.206.678-1.968 1.397-2.434 2.772a4.677 4.677 0 00.339 3.746c.063.106.212.17.338.106l2.392-1.333c1.206-.678 1.968-1.397 2.433-2.772A4.677 4.677 0 0019.066.13zM1.926 5.421a.325.325 0 00-.318.318c0 1.714.74 3.258 1.905 4.316C4.867 11.283 6.136 11.6 7.872 11.6H11.3c.169 0 .317-.148.317-.317 0-1.714-.74-3.26-1.904-4.317C8.358 5.739 7.089 5.42 5.353 5.42H1.927zM23.826 10.542a.325.325 0 00-.317-.317v.02h-3.47c-1.757 0-3.047.34-4.423 1.567-1.185 1.036-1.946 2.623-1.946 4.359 0 .169.148.317.317.317h3.47c1.757 0 3.047-.339 4.423-1.566a5.893 5.893 0 001.947-4.38zM0 15.79c0-.233.19-.445.444-.445h4.804c2.433 0 4.21.466 6.115 2.18 1.63 1.46 2.645 3.64 2.666 6.03 0 .233-.19.445-.444.445H8.782c-2.434 0-4.211-.444-6.116-2.158C1.036 20.36.021 18.18 0 15.79z" })
  );
});
var Mono_default = Icon;
