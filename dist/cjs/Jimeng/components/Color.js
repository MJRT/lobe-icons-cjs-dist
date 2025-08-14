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

// src/Jimeng/components/Color.tsx
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
      fill: "none",
      height: size,
      style: { flex: "none", lineHeight: 1, ...style },
      viewBox: "0 0 24 24",
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("g", { clipPath: a.fill }, /* @__PURE__ */ React.createElement("g", { transform: "matrix(-0.009271 -0.017448 0.0215011 -0.0134883 13.0472 18.2292)" }, /* @__PURE__ */ React.createElement(
      "rect",
      {
        fill: b.fill,
        height: "666.506",
        opacity: "1",
        shapeRendering: "crispEdges",
        width: "1077.71",
        x: "0",
        y: "0"
      }
    ), /* @__PURE__ */ React.createElement(
      "rect",
      {
        fill: b.fill,
        height: "666.506",
        opacity: "1",
        shapeRendering: "crispEdges",
        transform: "scale(1 -1)",
        width: "1077.71",
        x: "0",
        y: "0"
      }
    ), /* @__PURE__ */ React.createElement(
      "rect",
      {
        fill: b.fill,
        height: "666.506",
        opacity: "1",
        shapeRendering: "crispEdges",
        transform: "scale(-1 1)",
        width: "1077.71",
        x: "0",
        y: "0"
      }
    ), /* @__PURE__ */ React.createElement(
      "rect",
      {
        fill: b.fill,
        height: "666.506",
        opacity: "1",
        shapeRendering: "crispEdges",
        transform: "scale(-1)",
        width: "1077.71",
        x: "0",
        y: "0"
      }
    ))),
    /* @__PURE__ */ React.createElement("g", { clipPath: c.fill }, /* @__PURE__ */ React.createElement("g", { transform: "matrix(-0.00282575 -0.00489434 0.00971874 -0.00561112 16.5909 23.2227)" }, /* @__PURE__ */ React.createElement(
      "rect",
      {
        fill: d.fill,
        height: "1485.61",
        opacity: "1",
        shapeRendering: "crispEdges",
        width: "4828.03",
        x: "0",
        y: "0"
      }
    ), /* @__PURE__ */ React.createElement(
      "rect",
      {
        fill: d.fill,
        height: "1485.61",
        opacity: "1",
        shapeRendering: "crispEdges",
        transform: "scale(1 -1)",
        width: "4828.03",
        x: "0",
        y: "0"
      }
    ), /* @__PURE__ */ React.createElement(
      "rect",
      {
        fill: d.fill,
        height: "1485.61",
        opacity: "1",
        shapeRendering: "crispEdges",
        transform: "scale(-1 1)",
        width: "4828.03",
        x: "0",
        y: "0"
      }
    ), /* @__PURE__ */ React.createElement(
      "rect",
      {
        fill: d.fill,
        height: "1485.61",
        opacity: "1",
        shapeRendering: "crispEdges",
        transform: "scale(-1)",
        width: "4828.03",
        x: "0",
        y: "0"
      }
    ))),
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: a.id }, /* @__PURE__ */ React.createElement("path", { d: "M5.25711 1.80765C8.76812 6.74075 14.4314 9.45056 20.0636 8.40323C20.4619 8.32917 20.8947 8.19661 21.3451 8.02311C22.2001 7.69374 23.3197 9.03389 22.6709 9.68084C22.2415 10.1091 21.8312 10.5013 21.4634 10.8278C18.9269 13.0793 16.1264 15.1096 13.0744 16.8717C10.003 18.6449 6.8237 20.0618 3.58429 21.1352C3.13145 21.2853 2.60446 21.4391 2.038 21.5917C1.15348 21.8301 0.554197 20.1919 1.2674 19.617C1.6464 19.3114 1.98071 19.0005 2.246 18.6902C5.96908 14.3363 6.29888 8.17371 3.71732 2.69665C3.6056 2.45961 3.48162 2.17153 3.35287 1.85684C2.99465 0.981289 4.04156 0.335123 4.65576 1.05462C4.89891 1.33945 5.10904 1.5996 5.25711 1.80765Z" })), /* @__PURE__ */ React.createElement("clipPath", { id: c.id }, /* @__PURE__ */ React.createElement("path", { d: "M19.529 13.6948C17.2056 16.5579 16.7138 19.6388 17.1514 22.2781C17.1594 22.3264 17.1678 22.3799 17.1763 22.4375C17.2926 23.2284 16.3596 23.7154 15.7279 23.2254C15.6957 23.2004 15.6645 23.1765 15.6347 23.1538C13.5149 21.5401 11.0142 20.326 7.68635 20.7079C9.70085 20.1175 11.7605 19.243 13.7728 18.0812C15.9822 16.8056 17.9201 15.3074 19.529 13.6948Z" })), /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: b.id, x1: "0", x2: "500", y1: "0", y2: "500" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#27B2F0" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.203234", stopColor: "#26DFFB" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.406468", stopColor: "#30F5FE" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.652506", stopColor: "#F0FEFC" }), /* @__PURE__ */ React.createElement("stop", { offset: "0.863327", stopColor: "#FBC610" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#FD9C22" })), /* @__PURE__ */ React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: d.id, x1: "0", x2: "500", y1: "0", y2: "500" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#1C6FFF" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "#24B5EF" })))
  );
});
var Color_default = Icon;
