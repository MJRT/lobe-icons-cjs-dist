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

// src/features/getLobeIconCDN/index.tsx
var getLobeIconCDN_exports = {};
__export(getLobeIconCDN_exports, {
  getLobeIconCDN: () => getLobeIconCDN
});
module.exports = __toCommonJS(getLobeIconCDN_exports);
var ALIYUN_ICON_CDN = (type) => `https://registry.npmmirror.com/@lobehub/icons-static-${type}/latest/files`;
var UNPKG_ICON_CDN = (type) => `https://unpkg.com/@lobehub/icons-static-${type}@latest`;
var getLobeIconCDN = (id, config) => {
  const { format = "png", isDarkMode = false, type = "color", cdn = "aliyun" } = config || {};
  const baseUrl = cdn === "unpkg" ? UNPKG_ICON_CDN(format) : ALIYUN_ICON_CDN(format);
  const addon = type === "mono" ? "" : `-${type}`;
  switch (format) {
    case "svg": {
      return `${baseUrl}/icons/${id.toLowerCase() + addon}.svg`;
    }
    case "webp": {
      return `${baseUrl}/${isDarkMode ? "dark" : "light"}/${id.toLowerCase() + addon}.webp`;
    }
    default: {
      return `${baseUrl}/${isDarkMode ? "dark" : "light"}/${id.toLowerCase() + addon}.png`;
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLobeIconCDN
});
