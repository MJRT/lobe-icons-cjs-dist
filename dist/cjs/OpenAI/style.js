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

// src/OpenAI/style.ts
var style_exports = {};
__export(style_exports, {
  AVATAR_BACKGROUND: () => AVATAR_BACKGROUND,
  AVATAR_COLOR: () => AVATAR_COLOR,
  AVATAR_ICON_MULTIPLE: () => AVATAR_ICON_MULTIPLE,
  COLOR_GPT_3: () => COLOR_GPT_3,
  COLOR_GPT_4: () => COLOR_GPT_4,
  COLOR_GPT_5: () => COLOR_GPT_5,
  COLOR_OSS: () => COLOR_OSS,
  COLOR_O_1: () => COLOR_O_1,
  COLOR_PLATFORM: () => COLOR_PLATFORM,
  COLOR_PRIMARY: () => COLOR_PRIMARY,
  COMBINE_SPACE_MULTIPLE: () => COMBINE_SPACE_MULTIPLE,
  COMBINE_TEXT_MULTIPLE: () => COMBINE_TEXT_MULTIPLE,
  TITLE: () => TITLE
});
module.exports = __toCommonJS(style_exports);
var TITLE = "OpenAI";
var COMBINE_TEXT_MULTIPLE = 0.75;
var COMBINE_SPACE_MULTIPLE = 0.1;
var COLOR_PRIMARY = "#000";
var COLOR_GPT_3 = "#19C37D";
var COLOR_GPT_4 = "#AB68FF";
var COLOR_GPT_5 = "#F86AA4";
var COLOR_O_1 = "#F9C322";
var COLOR_OSS = "#0099FF";
var COLOR_PLATFORM = "#0000FE";
var AVATAR_BACKGROUND = COLOR_PRIMARY;
var AVATAR_COLOR = "#fff";
var AVATAR_ICON_MULTIPLE = 0.75;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AVATAR_BACKGROUND,
  AVATAR_COLOR,
  AVATAR_ICON_MULTIPLE,
  COLOR_GPT_3,
  COLOR_GPT_4,
  COLOR_GPT_5,
  COLOR_OSS,
  COLOR_O_1,
  COLOR_PLATFORM,
  COLOR_PRIMARY,
  COMBINE_SPACE_MULTIPLE,
  COMBINE_TEXT_MULTIPLE,
  TITLE
});
