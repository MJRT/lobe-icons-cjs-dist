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

// src/Smithery/components/Mono.tsx
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
    /* @__PURE__ */ React.createElement("path", { d: "M10.52 3.554l11.345.015c.188 0 1.787-.025 1.83 0a.5.5 0 01.244.238c0 .38.055 2.416-.006 2.65-.026.097-.122.183-.186.235-.226.187-.495.325-.736.48-.502.323-1.001.652-1.498.988l-2.579 1.668c-.56.36-1.154.7-1.698 1.094a.621.621 0 00-.158.15c-.845.034-1.696.009-2.543.009h-4.239l-.003-.032c-.054-.508-.021-1.196-.021-1.73V5.96c0-.205-.014-2.283.015-2.322.053-.07.161-.072.233-.083zM10.583 13.998c.854-.025 1.714 0 2.568 0 1.053 0 2.109-.019 3.162-.004.037 0 .112-.004.142.02.094.077.207.279.292.388l.877 1.105c.485.616.981 1.221 1.472 1.83.223.275.451.545.667.83.053.07.139.172.158.267.042.2.015.544.015.759.001.546 0 1.093-.005 1.64-.027.058-.054.12-.092.169a.326.326 0 01-.172.12c-.257.051-.673.013-.95.013h-2.03v-2.708l-.443-.567c-.129-.168-.256-.351-.397-.503H12.96c-.552-.001-1.104-.01-1.655.003-.104.108-.194.25-.288.37-.17.22-.35.427-.51.66l.001 2.745c-1.022 0-2.048.024-3.07-.006a.462.462 0 01-.21-.29c-.064-.233-.02-.773-.022-1.041 0-.294-.037-1.197.028-1.412.037-.122.146-.253.216-.347.205-.279.43-.538.641-.809l1.873-2.382c.176-.225.516-.575.62-.85zM8.82 5.162c.105 0 .21-.001.314-.005l.002 5.97c-1.813-.043-3.67-.79-5.255-1.896-.433-.302-.835-.654-1.253-.985A41.094 41.094 0 01.702 6.323C.5 6.108.233 5.875.08 5.605a.285.285 0 01-.038-.202c.018-.106.101-.173.17-.222l6.053-.001 1.712-.001c.272 0 .577.034.844-.017z" })
  );
});
var Mono_default = Icon;
