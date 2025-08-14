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

// src/components/Editor/svgo.ts
var svgo_exports = {};
__export(svgo_exports, {
  default: () => SVGO,
  defaultPlugins: () => defaultPlugins
});
module.exports = __toCommonJS(svgo_exports);
var import_get_svgo_instance = __toESM(require("svgo-browser/lib/get-svgo-instance"));
var defaultPlugins = {
  cleanupAttrs: true,
  cleanupEnableBackground: true,
  cleanupIDs: true,
  cleanupNumericValues: true,
  collapseGroups: true,
  convertColors: true,
  convertPathData: true,
  convertShapeToPath: true,
  convertStyleToAttrs: true,
  convertTransform: true,
  mergePaths: true,
  moveGroupAttrsToElems: true,
  removeComments: true,
  removeDesc: true,
  removeDimensions: true,
  removeDoctype: true,
  removeEditorsNSData: true,
  removeEmptyAttrs: true,
  removeEmptyContainers: true,
  removeEmptyText: true,
  removeHiddenElems: true,
  removeMetadata: true,
  removeNonInheritableGroupAttrs: true,
  removeRasterImages: false,
  removeTitle: true,
  removeUnknownsAndDefaults: true,
  removeUnusedNS: true,
  removeUselessDefs: true,
  removeUselessStrokeAndFill: true,
  removeViewBox: false,
  removeXMLProcInst: true,
  sortAttrs: true
};
var SVGO = class {
  constructor(config) {
    this.app = (0, import_get_svgo_instance.default)({ ...defaultPlugins, ...config });
  }
  async optimize(svgData) {
    const { data } = await this.app.optimize(svgData);
    return data;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultPlugins
});
