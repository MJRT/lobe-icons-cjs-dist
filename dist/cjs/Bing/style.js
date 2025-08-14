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

// src/Bing/style.ts
var style_exports = {};
__export(style_exports, {
  AVATAR_BACKGROUND: () => AVATAR_BACKGROUND,
  AVATAR_COLOR: () => AVATAR_COLOR,
  AVATAR_ICON_MULTIPLE: () => AVATAR_ICON_MULTIPLE,
  COLOR_GRADIENT: () => COLOR_GRADIENT,
  COLOR_PRIMARY: () => COLOR_PRIMARY,
  COMBINE_SPACE_MULTIPLE: () => COMBINE_SPACE_MULTIPLE,
  COMBINE_TEXT_MULTIPLE: () => COMBINE_TEXT_MULTIPLE,
  TITLE: () => TITLE
});
module.exports = __toCommonJS(style_exports);
var TITLE = "Bing";
var COMBINE_TEXT_MULTIPLE = 0.8;
var COMBINE_SPACE_MULTIPLE = 0.1;
var COLOR_PRIMARY = "#174ae4";
var COLOR_GRADIENT = "linear-gradient(130deg, #2870EA 20%, #1B4AEF 77.5%)";
var AVATAR_BACKGROUND = COLOR_GRADIENT;
var AVATAR_COLOR = "#fff";
var AVATAR_ICON_MULTIPLE = 0.7;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AVATAR_BACKGROUND,
  AVATAR_COLOR,
  AVATAR_ICON_MULTIPLE,
  COLOR_GRADIENT,
  COLOR_PRIMARY,
  COMBINE_SPACE_MULTIPLE,
  COMBINE_TEXT_MULTIPLE,
  TITLE
});
