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

// src/Inference/components/Text.tsx
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
      viewBox: "0 0 158 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M22.667 21.689h-5.053V2.308h5.053v19.38zM14.95 21.689h-3.585V2.308h3.584v19.38zM8.99 21.689H6.24V2.308h2.75v19.38zM3.966 21.689H2V2.308h1.966v19.38zM30.247 2.308l8.25 11.312V2.308h4.85v19.38H39.04l-8.537-11.49v11.49h-4.848V2.309h4.591zM46.339 2.308h11.913v4.14h-6.96v3.495h6.703v4.14H51.29v7.61H46.34V2.307zM60.52 2.308h12.146v4.14h-7.194v3.265h6.937v4.14h-6.937v3.702h7.194v4.14H60.52V2.308zM80.192 14.75v6.942h-5V2.308h6.42c4.614 0 7.786 2.26 7.786 6.22 0 2.594-1.573 4.499-3.997 5.474l6.187 7.687h-6.086l-5.313-6.942.003.003zm0-3.754h1.39c1.678 0 2.682-.9 2.682-2.313 0-1.413-1.004-2.287-2.681-2.287h-1.39v4.6zM92.286 2.308h12.144v4.14h-7.195v3.265h6.938v4.14h-6.938v3.702h7.195v4.14H92.286V2.308zM111.549 2.308L119.8 13.62V2.308h4.848v19.38h-4.306l-8.536-11.49v11.49h-4.848V2.309h4.591zM136.999 17.27c1.907 0 3.455-.77 4.384-1.775v5.579c-1.342.615-2.915.926-4.488.926-5.673 0-10.236-4.5-10.236-10s4.563-10 10.236-10c1.573 0 3.146.334 4.488.926v5.579c-.929-1.001-2.477-1.775-4.384-1.775-3.067 0-5.286 2.235-5.286 5.27 0 3.035 2.215 5.27 5.286 5.27zM143.703 2.308h12.143v4.14h-7.195v3.265h6.939v4.14h-6.939v3.702h7.195v4.14h-12.143V2.308z" })
  );
});
var Text_default = Icon;
