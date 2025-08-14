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

// src/Civitai/components/TextColor.tsx
var TextColor_exports = {};
__export(TextColor_exports, {
  default: () => TextColor_default
});
module.exports = __toCommonJS(TextColor_exports);
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
      viewBox: "0 0 110 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M21.594 2H4.234L2 4.437v15.228L4.335 22h17.36v-5.28H7.28V7.38h14.315V2zM77.736 2H57.939v5.38h7.31v14.518h5.279V7.381h7.106L77.737 2zm-53.706.102v19.796h5.28V2.102h-5.28zm7.716 0v19.796h7.716l8.426-8.426V2.102H42.61v8.426l-5.482 6.091V2.102h-5.38zm18.579 0v19.796h5.28V2.102h-5.28z" }),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M102.305 2.102v19.796h5.279V2.102h-5.279zm-4.772 0H82.508l-2.335 2.335v17.462h5.279V14.69h9.035v7.208h5.28V4.438l-2.234-2.335zM94.589 9.31h-9.036V7.38h9.036v1.93zM47.888 16.72v5.178h-5.177",
        fill: "#1970C2"
      }
    )
  );
});
var TextColor_default = Icon;
