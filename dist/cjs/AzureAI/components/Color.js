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

// src/AzureAI/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const [a, b, c] = (0, import_useFillId.useFillIds)(import_style.TITLE, 3);
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
        clipRule: "evenodd",
        d: "M16.233 0c.713 0 1.345.551 1.572 1.329.227.778 1.555 5.59 1.555 5.59v9.562h-4.813L14.645 0h1.588z",
        fill: a.fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M23.298 7.47c0-.34-.275-.6-.6-.6h-2.835a3.617 3.617 0 00-3.614 3.615v5.996h3.436a3.617 3.617 0 003.613-3.614V7.47z",
        fill: b.fill
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M16.233 0a.982.982 0 00-.989.989l-.097 18.198A4.814 4.814 0 0110.334 24H1.6a.597.597 0 01-.567-.794l7-19.981A4.819 4.819 0 0112.57 0h3.679-.016z",
        fill: c.fill,
        fillRule: "evenodd"
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: a.id,
        x1: "18.242",
        x2: "14.191",
        y1: "16.837",
        y2: ".616"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#712575" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".09", stopColor: "#9A2884" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".18", stopColor: "#BF2C92" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".27", stopColor: "#DA2E9C" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".34", stopColor: "#EB30A2" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".4", stopColor: "#F131A5" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".5", stopColor: "#EC30A3" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".61", stopColor: "#DF2F9E" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".72", stopColor: "#C92D96" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".83", stopColor: "#AA2A8A" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".95", stopColor: "#83267C" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#712575" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: b.id,
        x1: "19.782",
        x2: "19.782",
        y1: ".34",
        y2: "23.222"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#DA7ED0" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".08", stopColor: "#B17BD5" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".19", stopColor: "#8778DB" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".3", stopColor: "#6276E1" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".41", stopColor: "#4574E5" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".54", stopColor: "#2E72E8" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".67", stopColor: "#1D71EB" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".81", stopColor: "#1471EC" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#1171ED" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: c.id,
        x1: "18.404",
        x2: "3.236",
        y1: ".859",
        y2: "25.183"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#DA7ED0" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".05", stopColor: "#B77BD4" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".11", stopColor: "#9079DA" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".18", stopColor: "#6E77DF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".25", stopColor: "#5175E3" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".33", stopColor: "#3973E7" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".42", stopColor: "#2772E9" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".54", stopColor: "#1A71EB" }),
      /* @__PURE__ */ React.createElement("stop", { offset: ".68", stopColor: "#1371EC" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#1171ED" })
    ))
  );
});
var Color_default = Icon;
