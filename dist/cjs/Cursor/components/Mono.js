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

// src/Cursor/components/Mono.tsx
var Mono_exports = {};
__export(Mono_exports, {
  default: () => Mono_default
});
module.exports = __toCommonJS(Mono_exports);
var import_antd_style = require("antd-style");
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ color, size = "1em", style, ...rest }) => {
  const [a, b, c] = (0, import_useFillId.useFillIds)(import_style.TITLE + color, 3);
  const { isDarkMode } = (0, import_antd_style.useThemeMode)();
  const fill = isDarkMode || color === "#fff" ? "#fff" : "#000";
  const fillSecondary = isDarkMode || color === "#fff" ? "#E4E4E4" : "#555";
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      height: size,
      style: { flex: "none", lineHeight: 1, ...style },
      viewBox: "0 0 24 24",
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z", fill: a.fill }),
    /* @__PURE__ */ React.createElement("path", { d: "M22.35 18V6L11.925 0v12l10.425 6z", fill: b.fill }),
    /* @__PURE__ */ React.createElement("path", { d: "M11.925 0L1.5 6v12l10.425-6V0z", fill: c.fill }),
    /* @__PURE__ */ React.createElement("path", { d: "M22.35 6L11.925 24V12L22.35 6z", fill: fillSecondary }),
    /* @__PURE__ */ React.createElement("path", { d: "M22.35 6l-10.425 6L1.5 6h20.85z", fill }),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: a.id,
        x1: "11.925",
        x2: "11.925",
        y1: "12",
        y2: "24"
      },
      /* @__PURE__ */ React.createElement("stop", { offset: ".16", stopColor: fill, stopOpacity: ".39" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".658", stopColor: fill, stopOpacity: ".8" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: b.id,
        x1: "22.35",
        x2: "11.925",
        y1: "6.037",
        y2: "12.15"
      },
      /* @__PURE__ */ React.createElement("stop", { offset: ".182", stopColor: fill, stopOpacity: ".31" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".715", stopColor: fill, stopOpacity: "0" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: c.id,
        x1: "11.925",
        x2: "1.5",
        y1: "0",
        y2: "18"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: fill, stopOpacity: ".6" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".667", stopColor: fill, stopOpacity: ".22" })
    ))
  );
});
var Mono_default = Icon;
