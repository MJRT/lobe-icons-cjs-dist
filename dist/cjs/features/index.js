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

// src/features/index.ts
var features_exports = {};
__export(features_exports, {
  IconAvatar: () => import_IconAvatar.default,
  IconCombine: () => import_IconCombine.default,
  ModelIcon: () => import_ModelIcon.default,
  ModelProvider: () => import_providerEnum.ModelProvider,
  ModelTag: () => import_ModelTag.default,
  ProviderCombine: () => import_ProviderCombine.default,
  ProviderIcon: () => import_ProviderIcon.default,
  getLobeIconCDN: () => import_getLobeIconCDN.getLobeIconCDN,
  modelMappings: () => import_modelConfig.modelMappings,
  providerMappings: () => import_providerConfig.providerMappings
});
module.exports = __toCommonJS(features_exports);
var import_getLobeIconCDN = require("./getLobeIconCDN");
var import_IconAvatar = __toESM(require("./IconAvatar"));
var import_IconCombine = __toESM(require("./IconCombine"));
var import_modelConfig = require("./modelConfig");
var import_ModelIcon = __toESM(require("./ModelIcon"));
var import_ModelTag = __toESM(require("./ModelTag"));
var import_ProviderCombine = __toESM(require("./ProviderCombine"));
var import_providerConfig = require("./providerConfig");
var import_providerEnum = require("./providerEnum");
var import_ProviderIcon = __toESM(require("./ProviderIcon"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IconAvatar,
  IconCombine,
  ModelIcon,
  ModelProvider,
  ModelTag,
  ProviderCombine,
  ProviderIcon,
  getLobeIconCDN,
  modelMappings,
  providerMappings
});
