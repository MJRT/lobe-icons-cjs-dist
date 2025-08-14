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

// src/features/IconAvatar/util.ts
var util_exports = {};
__export(util_exports, {
  getAvatarShadow: () => getAvatarShadow,
  roundToEven: () => roundToEven
});
module.exports = __toCommonJS(util_exports);
var roundToEven = (number) => {
  return number % 2 === 0 ? number : number - 1;
};
var getAvatarShadow = (isDarkMode, background) => {
  if (!background)
    return;
  if (isDarkMode && background === "#000") {
    return "0 0 0 1px rgba(255,255,255,0.1) inset";
  } else if (!isDarkMode && background === "#fff") {
    return "0 0 0 1px rgba(0,0,0,0.05) inset";
  }
  return;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAvatarShadow,
  roundToEven
});
