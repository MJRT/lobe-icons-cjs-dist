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

// src/components/Editor/useSvgo.ts
var useSvgo_exports = {};
__export(useSvgo_exports, {
  useSvgo: () => useSvgo
});
module.exports = __toCommonJS(useSvgo_exports);
var import_react = require("react");
var import_svgo = __toESM(require("./svgo"));
var useSvgo = (svg, config) => {
  const svgoInstance = (0, import_react.useRef)(null);
  const [isLoading, setIsLoading] = (0, import_react.useState)(true);
  const [newSvg, setNewSvg] = (0, import_react.useState)(svg);
  const compressionSvg = (0, import_react.useCallback)(async () => {
    if (!svgoInstance.current)
      return;
    const data = await svgoInstance.current.optimize(svg);
    setNewSvg(data);
    setIsLoading(false);
  }, [svg]);
  (0, import_react.useEffect)(() => {
    svgoInstance.current = new import_svgo.default(config);
  }, [config]);
  (0, import_react.useEffect)(() => {
    setIsLoading(false);
    compressionSvg();
  }, [config, svg]);
  return {
    isLoading,
    precent: `${-Math.floor((1 - newSvg.length / svg.length) * 100)}%`,
    svg: newSvg
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useSvgo
});
