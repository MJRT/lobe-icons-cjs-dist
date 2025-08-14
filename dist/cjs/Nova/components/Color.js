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

// src/Nova/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const [a, b, c, d] = (0, import_useFillId.useFillIds)(import_style.TITLE, 4);
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
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12.557 2.257a.432.432 0 00-.202-.366L9.42.063a.42.42 0 00-.444 0L3.601 3.395l-.022.015a.43.43 0 00-.18.352v3.443L.709 8.8a.43.43 0 00-.209.37v5.618a.43.43 0 00.214.343l2.685 1.56v3.512a.43.43 0 00.201.367l5.374 3.366a.42.42 0 00.442.002l2.935-1.79a.43.43 0 00.205-.369v-8.688h-.849v1.138L6.08 17.65l.436.737 5.191-3.156v6.305L9.2 23.066l-2.092-1.31 2.2-1.326-.434-.74-2.58 1.556-2.047-1.282v-3.406l2.374-1.43-.433-.739-2.476 1.493-2.363-1.373v-2.265l2.585-1.56-.434-.738-2.151 1.297V9.415l2.465-1.462 2.342 1.512v2.171l-1.75 1.15.461.72 1.67-1.095 1.533 1.088.486-.705-1.55-1.1v-2.27L9.56 7.817a.433.433 0 00.2-.366V4.728h-.848v2.483L6.55 8.7 4.247 7.216V4.003L6.12 2.84v2.712h.85V2.315L9.197.934l2.509 1.563v8.14h.85v-8.38z",
        fill: a.fill
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M18.946 12.273a2.25 2.25 0 100-.818h-8.219v.818h8.22zm3.645-.41a1.432 1.432 0 11-2.863 0 1.432 1.432 0 012.863 0z",
        fill: b.fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M18.091 14.727h-4.705v-.818h5.523V18h1.637v4.091h-4.091v-4.09h1.636v-3.274zm-.818 6.546v-2.455h2.454v2.455h-2.454z",
        fill: c.fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M18.091 9h-4.705v.818h5.523v-4.09h2.375L18.5 1.273l-2.783 4.453h2.374V9zm.41-6.183L17.192 4.91h2.615L18.5 2.817z",
        fill: d.fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: a.id,
        x1: "3.5",
        x2: "20.5",
        y1: "3.5",
        y2: "21.5"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#43E3E4" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".25", stopColor: "#4A9FFF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".5", stopColor: "#AA4BFB" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".75", stopColor: "#FC5978" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#FF6D32" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: b.id,
        x1: "3.5",
        x2: "20.5",
        y1: "3.5",
        y2: "21.5"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#43E3E4" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".25", stopColor: "#4A9FFF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".5", stopColor: "#AA4BFB" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".75", stopColor: "#FC5978" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#FF6D32" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: c.id,
        x1: "3.5",
        x2: "20.5",
        y1: "3.5",
        y2: "21.5"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#43E3E4" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".25", stopColor: "#4A9FFF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".5", stopColor: "#AA4BFB" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".75", stopColor: "#FC5978" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#FF6D32" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: d.id,
        x1: "3.5",
        x2: "20.5",
        y1: "3.5",
        y2: "21.5"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#43E3E4" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".25", stopColor: "#4A9FFF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".5", stopColor: "#AA4BFB" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".75", stopColor: "#FC5978" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#FF6D32" })
    ))
  );
});
var Color_default = Icon;
