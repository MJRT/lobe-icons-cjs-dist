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

// src/AiHubMix/index.ts
var AiHubMix_exports = {};
__export(AiHubMix_exports, {
  default: () => AiHubMix_default
});
module.exports = __toCommonJS(AiHubMix_exports);
var import_Avatar = __toESM(require("./components/Avatar"));
var import_Color = __toESM(require("./components/Color"));
var import_Combine = __toESM(require("./components/Combine"));
var import_Mono = __toESM(require("./components/Mono"));
var import_Text = __toESM(require("./components/Text"));
var import_style = require("./style");
var Icons = import_Mono.default;
Icons.Color = import_Color.default;
Icons.Text = import_Text.default;
Icons.Combine = import_Combine.default;
Icons.Avatar = import_Avatar.default;
Icons.colorPrimary = import_style.COLOR_PRIMARY;
Icons.title = import_style.TITLE;
var AiHubMix_default = Icons;
