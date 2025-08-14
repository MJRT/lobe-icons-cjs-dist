"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/MyShell/components/Combine.tsx
var Combine_exports = {};
__export(Combine_exports, {
  default: () => Combine_default
});
module.exports = __toCommonJS(Combine_exports);
var import_react = require("react");
var import_IconCombine = __toESM(require("../../features/IconCombine"));
var import_style = require("../style");
var import_Color = __toESM(require("./Color"));
var import_Mono = __toESM(require("./Mono"));
var import_Text = __toESM(require("./Text"));
var Combine = (0, import_react.memo)(({ type = "mono", ...rest }) => {
  const Icon = type === "color" ? import_Color.default : import_Mono.default;
  return /* @__PURE__ */ React.createElement(
    import_IconCombine.default,
    {
      Icon,
      Text: import_Text.default,
      "aria-label": import_style.TITLE,
      spaceMultiple: import_style.COMBINE_SPACE_MULTIPLE,
      textMultiple: import_style.COMBINE_TEXT_MULTIPLE,
      ...rest
    }
  );
});
var Combine_default = Combine;
