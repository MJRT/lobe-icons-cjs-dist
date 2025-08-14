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

// src/Higress/components/Color.tsx
var Color_exports = {};
__export(Color_exports, {
  default: () => Color_default
});
module.exports = __toCommonJS(Color_exports);
var import_react = require("react");
var import_useFillId = require("../../hooks/useFillId");
var import_style = require("../style");
var Icon = (0, import_react.memo)(({ size = "1em", style, ...rest }) => {
  const [a, b] = (0, import_useFillId.useFillIds)(import_style.TITLE, 2);
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
        d: "M11.853 15.257c-.318.069-.648.101-.99.101H7.933a7.89 7.89 0 01-4.072-1.132 8.15 8.15 0 01-.616-.406 8.033 8.033 0 01-2.541-3.154c-.1-.23-.19-.46-.274-.7a8.007 8.007 0 01-.407-2.522V1H3.27v6.444c0 .153.004.298.025.443.016.214.048.415.1.616a4.681 4.681 0 002.223 2.985 4.667 4.667 0 002.296.616h.024a4.043 4.043 0 013.919 3.153h-.004z",
        fill: a.fill
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M3.246 14.557v8.039H0v-12.24c.105.39.274.834.362 1.007a8.474 8.474 0 002.884 3.198v-.004z",
        fill: "#1E8CFE"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M15.824 16.151v6.445h-3.246V16.15a3.26 3.26 0 00-.024-.447 4.683 4.683 0 00-2.32-3.6 4.706 4.706 0 00-2.3-.616H7.91a4.047 4.047 0 01-3.919-3.146c.318-.068.649-.1.991-.1H7.91a7.89 7.89 0 014.072 1.131c.213.125.419.262.616.407a7.959 7.959 0 012.537 3.154 7.849 7.849 0 01.689 3.218z",
        fill: b.fill
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M19.904 3.868c0-.552.201-1.027.6-1.426.399-.403.882-.6 1.442-.6.56 0 1.055.201 1.454.6.403.39.6.874.6 1.442s-.201 1.055-.6 1.454c-.39.402-.87.6-1.442.6a1.979 1.979 0 01-1.454-.6c-.403-.403-.6-.89-.6-1.47zm3.73 5.107v13.62h-3.36V8.972h3.36v.004z",
        fill: "#0418FF"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12.578 9.039V1h3.246v12.24a6.393 6.393 0 00-.362-1.007 8.474 8.474 0 00-2.884-3.198v.004z",
        fill: "#1E8CFE"
      }
    ),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: a.id,
        x1: ".024",
        x2: "11.853",
        y1: "8.177",
        y2: "8.177"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#0418FF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#1E8CFE" })
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: b.id,
        x1: "15.824",
        x2: "3.991",
        y1: "15.418",
        y2: "15.418"
      },
      /* @__PURE__ */ React.createElement("stop", { stopColor: "#0418FF" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#1E8CFE" })
    ))
  );
});
var Color_default = Icon;
