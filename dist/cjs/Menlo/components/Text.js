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

// src/Menlo/components/Text.tsx
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
      viewBox: "0 0 86 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...rest
    },
    /* @__PURE__ */ React.createElement("title", null, import_style.TITLE),
    /* @__PURE__ */ React.createElement("path", { d: "M70.792 3.258L72.05 2h9.678l1.258 1.258-1.258 1.272H72.05l-1.258-1.272zm0 17.484l1.258-1.258h9.678l1.258 1.258L81.728 22H72.05l-1.258-1.258zm12.194-8.75l1.258 1.273v6.219l-1.258 1.258-1.258-1.258v-6.219l1.258-1.272zM70.792 3.259L69.534 4.53v6.22l1.258 1.243 1.258-1.244V4.53l-1.258-1.272zm12.194 0L81.728 4.53v6.22l1.258 1.243 1.258-1.244V4.53l-1.258-1.272zM70.792 20.742l-1.258-1.258v-6.219l1.258-1.272 1.258 1.272v6.219l-1.258 1.258zM53.494 3.258v7.477l1.258 1.258 1.258-1.244V3.258L54.752 2l-1.258 1.258zm1.258 17.484l-1.258-1.258v-6.219l1.258-1.272 1.258 1.272v6.219l-1.258 1.258zm12.194 0L65.688 22H56.01l-1.258-1.258 1.258-1.258h9.678l1.258 1.258zM35.91 13.265l1.258-1.258 1.258 1.258v7.477L37.168 22l-1.258-1.258v-7.477zm0-10.007L37.168 2l1.258 1.258v7.491l-1.258 1.258-1.258-1.258V3.258zm12.194 0L49.362 2l1.258 1.258v7.491l-1.258 1.258-1.258-1.258V3.258zm0 10.007l1.258-1.258 1.258 1.258v7.477L49.362 22l-1.258-1.258v-7.477zm-9.42-8.849l.643-1.658 1.658.657 2.988 6.862-.658 1.659-1.658-.658-2.974-6.862zm3.974 9.178l.657-1.658 1.659.643 2.987 6.862-.657 1.658-1.659-.657-2.988-6.848zM20.842 20.742l1.258-1.258h9.678l1.258 1.258L31.778 22H22.1l-1.258-1.258zm0-17.484L22.1 2h9.678l1.258 1.258-1.258 1.272H22.1l-1.258-1.272zm0 8.735l1.258-1.258h9.678l1.258 1.258-1.258 1.258H22.1l-1.258-1.258zm0-8.735L19.584 4.53v6.22l1.258 1.243 1.258-1.244V4.53l-1.258-1.272zm0 17.484l-1.258-1.258v-6.219l1.258-1.272 1.258 1.272v6.219l-1.258 1.258zM15.452 3.244L16.71 4.53v6.22l-1.258 1.257-1.258-1.258V4.53l1.258-1.286zm-6.104 0L10.62 4.53v6.22l-1.272 1.257L8.09 10.75V4.53l1.258-1.286zm-6.09 8.763L2 10.75V4.53l1.258-1.286L4.516 4.53v6.22l-1.258 1.257zM2 13.265l1.258-1.258 1.258 1.258v7.477L3.258 22 2 20.742v-7.477zM15.452 22l-1.258-1.258v-7.477l1.258-1.258 1.258 1.258v7.477L15.453 22zM4.516 2H8.09l1.258 1.244L8.09 4.53H4.516L3.258 3.244 4.516 2zm6.104 0h3.574l1.258 1.244-1.258 1.286H10.62L9.348 3.244 10.62 2z" })
  );
});
var Text_default = Icon;
