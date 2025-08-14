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

// src/Ai360/style.ts
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
var TITLE = "AI360";
var COMBINE_TEXT_MULTIPLE = 0.7;
var COMBINE_SPACE_MULTIPLE = 0.2;
var COLOR_PRIMARY = "#006ffb";
var COLOR_GRADIENT = "linear-gradient(to bottom, #12B7FA,  #006ffb)";
var AVATAR_BACKGROUND = COLOR_GRADIENT;
var AVATAR_COLOR = "#fff";
var AVATAR_ICON_MULTIPLE = 0.75;
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
