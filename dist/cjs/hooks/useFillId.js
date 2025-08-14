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

// src/hooks/useFillId.ts
var useFillId_exports = {};
__export(useFillId_exports, {
  useFillId: () => useFillId,
  useFillIds: () => useFillIds
});
module.exports = __toCommonJS(useFillId_exports);
var import_react = require("react");
var useFillId = (namespace) => {
  const id = `lobe-icons-${namespace.toLowerCase()}-fill`;
  return (0, import_react.useMemo)(
    () => ({
      fill: `url(#${id})`,
      id
    }),
    [namespace]
  );
};
var useFillIds = (namespace, length) => {
  return (0, import_react.useMemo)(() => {
    const ids = Array.from({ length }, (_, i) => {
      const id = `lobe-icons-${namespace.toLowerCase()}-fill-${i}`;
      return {
        fill: `url(#${id})`,
        id
      };
    });
    return ids;
  }, [namespace, length]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useFillId,
  useFillIds
});
