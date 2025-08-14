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

// src/features/providerConfig.tsx
var providerConfig_exports = {};
__export(providerConfig_exports, {
  providerMappings: () => providerMappings
});
module.exports = __toCommonJS(providerConfig_exports);
var import_react = require("react");
var import_Ai21 = __toESM(require("../Ai21"));
var import_Ai302 = __toESM(require("../Ai302"));
var import_Ai360 = __toESM(require("../Ai360"));
var import_AiHubMix = __toESM(require("../AiHubMix"));
var import_AiMass = __toESM(require("../AiMass"));
var import_AlibabaCloud = __toESM(require("../AlibabaCloud"));
var import_Anthropic = __toESM(require("../Anthropic"));
var import_Aws = __toESM(require("../Aws"));
var import_Azure = __toESM(require("../Azure"));
var import_AzureAI = __toESM(require("../AzureAI"));
var import_Baichuan = __toESM(require("../Baichuan"));
var import_BaiduCloud = __toESM(require("../BaiduCloud"));
var import_Bedrock = __toESM(require("../Bedrock"));
var import_BurnCloud = __toESM(require("../BurnCloud"));
var import_Claude = __toESM(require("../Claude"));
var import_Cloudflare = __toESM(require("../Cloudflare"));
var import_Cohere = __toESM(require("../Cohere"));
var import_DeepSeek = __toESM(require("../DeepSeek"));
var import_Doubao = __toESM(require("../Doubao"));
var import_Fal = __toESM(require("../Fal"));
var import_Fireworks = __toESM(require("../Fireworks"));
var import_Gemini = __toESM(require("../Gemini"));
var import_GiteeAI = __toESM(require("../GiteeAI"));
var import_Github = __toESM(require("../Github"));
var import_Google = __toESM(require("../Google"));
var import_Groq = __toESM(require("../Groq"));
var import_Higress = __toESM(require("../Higress"));
var import_HuggingFace = __toESM(require("../HuggingFace"));
var import_Hunyuan = __toESM(require("../Hunyuan"));
var import_Infinigence = __toESM(require("../Infinigence"));
var import_InternLM = __toESM(require("../InternLM"));
var import_Jina = __toESM(require("../Jina"));
var import_LmStudio = __toESM(require("../LmStudio"));
var import_LobeHub = __toESM(require("../LobeHub"));
var import_Minimax = __toESM(require("../Minimax"));
var import_Mistral = __toESM(require("../Mistral"));
var import_ModelScope = __toESM(require("../ModelScope"));
var import_Moonshot = __toESM(require("../Moonshot"));
var import_Novita = __toESM(require("../Novita"));
var import_Nvidia = __toESM(require("../Nvidia"));
var import_Ollama = __toESM(require("../Ollama"));
var import_OpenAI = __toESM(require("../OpenAI"));
var import_OpenRouter = __toESM(require("../OpenRouter"));
var import_PPIO = __toESM(require("../PPIO"));
var import_Perplexity = __toESM(require("../Perplexity"));
var import_Player2 = __toESM(require("../Player2"));
var import_Qiniu = __toESM(require("../Qiniu"));
var import_Qwen = __toESM(require("../Qwen"));
var import_SambaNova = __toESM(require("../SambaNova"));
var import_Search1API = __toESM(require("../Search1API"));
var import_SenseNova = __toESM(require("../SenseNova"));
var import_SiliconCloud = __toESM(require("../SiliconCloud"));
var import_Spark = __toESM(require("../Spark"));
var import_Stepfun = __toESM(require("../Stepfun"));
var import_TencentCloud = __toESM(require("../TencentCloud"));
var import_Together = __toESM(require("../Together"));
var import_Upstage = __toESM(require("../Upstage"));
var import_V0 = __toESM(require("../V0"));
var import_Vercel = __toESM(require("../Vercel"));
var import_VertexAI = __toESM(require("../VertexAI"));
var import_Vllm = __toESM(require("../Vllm"));
var import_Volcengine = __toESM(require("../Volcengine"));
var import_Wenxin = __toESM(require("../Wenxin"));
var import_WorkersAI = __toESM(require("../WorkersAI"));
var import_XAI = __toESM(require("../XAI"));
var import_Xinference = __toESM(require("../Xinference"));
var import_ZeroOne = __toESM(require("../ZeroOne"));
var import_Zhipu = __toESM(require("../Zhipu"));
var import_Combine = __toESM(require("./ProviderCombine/Combine"));
var import_providerEnum = require("./providerEnum");
var providerMappings = [
  { Icon: import_LobeHub.default, keywords: [import_providerEnum.ModelProvider.LobeHub] },
  { Icon: import_Zhipu.default, combineMultiple: 1.25, keywords: [import_providerEnum.ModelProvider.ZhiPu] },
  {
    Combine: (0, import_react.memo)(({ size = 24, type = "color", ...props }) => /* @__PURE__ */ React.createElement(
      import_Combine.default,
      {
        left: type === "color" ? /* @__PURE__ */ React.createElement(import_Aws.default.Color, { size: size * 1.2 }) : /* @__PURE__ */ React.createElement(import_Aws.default, { size: size * 1.2 }),
        right: /* @__PURE__ */ React.createElement(import_Bedrock.default.Combine, { size, type }),
        size,
        ...props
      }
    )),
    Icon: import_Bedrock.default,
    combineMultiple: 1.1,
    keywords: [import_providerEnum.ModelProvider.Bedrock]
  },
  { Icon: import_DeepSeek.default, combineMultiple: 1.16, keywords: [import_providerEnum.ModelProvider.DeepSeek] },
  {
    Combine: (0, import_react.memo)(({ size = 24, type = "color", ...props }) => /* @__PURE__ */ React.createElement(
      import_Combine.default,
      {
        left: type === "color" ? /* @__PURE__ */ React.createElement(import_Google.default.BrandColor, { size: size * 0.95 }) : /* @__PURE__ */ React.createElement(import_Google.default.Brand, { size: size * 0.95 }),
        right: /* @__PURE__ */ React.createElement(import_Gemini.default.Combine, { size, type }),
        size,
        ...props
      }
    )),
    Icon: import_Google.default,
    combineMultiple: 0.92,
    keywords: [import_providerEnum.ModelProvider.Google]
  },
  {
    Combine: (0, import_react.memo)(({ size = 24, type = "color", ...props }) => /* @__PURE__ */ React.createElement(
      import_Combine.default,
      {
        left: /* @__PURE__ */ React.createElement(import_Azure.default.Combine, { size: size * 0.92, type }),
        right: /* @__PURE__ */ React.createElement(import_OpenAI.default.Combine, { size }),
        size,
        ...props
      }
    )),
    Icon: import_Azure.default,
    combineMultiple: 0.9,
    keywords: [import_providerEnum.ModelProvider.Azure]
  },
  { Icon: import_Moonshot.default, combineMultiple: 0.9, keywords: [import_providerEnum.ModelProvider.Moonshot] },
  { Icon: import_Novita.default, keywords: [import_providerEnum.ModelProvider.Novita] },
  { Icon: import_OpenAI.default, keywords: [import_providerEnum.ModelProvider.OpenAI] },
  { Icon: import_Ollama.default, combineMultiple: 1.16, keywords: [import_providerEnum.ModelProvider.Ollama] },
  { Icon: import_Perplexity.default, keywords: [import_providerEnum.ModelProvider.Perplexity] },
  { Icon: import_Minimax.default, combineMultiple: 1.3, keywords: [import_providerEnum.ModelProvider.Minimax] },
  { Icon: import_Mistral.default, keywords: [import_providerEnum.ModelProvider.Mistral] },
  {
    Combine: (0, import_react.memo)(({ size = 24, type = "color", ...props }) => /* @__PURE__ */ React.createElement(
      import_Combine.default,
      {
        left: /* @__PURE__ */ React.createElement(import_Anthropic.default.Text, { size: size * 0.75 }),
        right: /* @__PURE__ */ React.createElement(import_Claude.default.Combine, { size, type }),
        size,
        ...props
      }
    )),
    Icon: import_Anthropic.default,
    combineMultiple: 0.83,
    keywords: [import_providerEnum.ModelProvider.Anthropic]
  },
  { Icon: import_Groq.default, keywords: [import_providerEnum.ModelProvider.Groq] },
  { Icon: import_OpenRouter.default, combineMultiple: 0.8, keywords: [import_providerEnum.ModelProvider.OpenRouter] },
  { Icon: import_ZeroOne.default, combineMultiple: 1, keywords: [import_providerEnum.ModelProvider.ZeroOne] },
  { Icon: import_Together.default, keywords: [import_providerEnum.ModelProvider.TogetherAI] },
  { Icon: import_Qiniu.default, combineMultiple: 1.1, keywords: [import_providerEnum.ModelProvider.Qiniu] },
  {
    Combine: (0, import_react.memo)(({ size = 24, type = "color", ...props }) => /* @__PURE__ */ React.createElement(
      import_Combine.default,
      {
        left: /* @__PURE__ */ React.createElement(import_AlibabaCloud.default.Combine, { size, type }),
        right: /* @__PURE__ */ React.createElement(import_Qwen.default.Combine, { size: size * 0.9, type }),
        size,
        ...props
      }
    )),
    Icon: import_AlibabaCloud.default,
    combineMultiple: 1.1,
    keywords: [import_providerEnum.ModelProvider.Qwen]
  },
  { Icon: import_Stepfun.default, combineMultiple: 0.83, keywords: [import_providerEnum.ModelProvider.Stepfun] },
  { Icon: import_Spark.default, combineMultiple: 0.92, keywords: [import_providerEnum.ModelProvider.Spark] },
  { Icon: import_Fireworks.default, combineMultiple: 1.14, keywords: [import_providerEnum.ModelProvider.FireworksAI] },
  { Icon: import_Baichuan.default, combineMultiple: 0.83, keywords: [import_providerEnum.ModelProvider.Baichuan] },
  { Icon: import_BurnCloud.default, combineMultiple: 1.2, keywords: [import_providerEnum.ModelProvider.BurnCloud] },
  { Icon: import_AiMass.default, combineMultiple: 1.16, keywords: [import_providerEnum.ModelProvider.Taichu] },
  { Icon: import_Ai360.default, combineMultiple: 0.83, keywords: [import_providerEnum.ModelProvider.Ai360] },
  { Icon: import_SiliconCloud.default, combineMultiple: 1, keywords: [import_providerEnum.ModelProvider.SiliconCloud] },
  { Icon: import_Upstage.default, combineMultiple: 0.9, keywords: [import_providerEnum.ModelProvider.Upstage] },
  { Icon: import_Ai21.default, combineMultiple: 0.9, keywords: [import_providerEnum.ModelProvider.Ai21] },
  { Icon: import_Player2.default, combineMultiple: 0.9, keywords: [import_providerEnum.ModelProvider.Player2] },
  { Icon: import_Github.default, combineMultiple: 0.95, keywords: [import_providerEnum.ModelProvider.Github] },
  { Icon: import_Doubao.default, keywords: [import_providerEnum.ModelProvider.Doubao] },
  { Icon: import_Hunyuan.default, keywords: [import_providerEnum.ModelProvider.Hunyuan] },
  { Icon: import_Nvidia.default, keywords: [import_providerEnum.ModelProvider.Nvidia] },
  { Icon: import_TencentCloud.default, keywords: [import_providerEnum.ModelProvider.TencentCloud] },
  {
    Combine: (0, import_react.memo)(({ size = 24, type = "color", ...props }) => /* @__PURE__ */ React.createElement(
      import_Combine.default,
      {
        left: /* @__PURE__ */ React.createElement(import_BaiduCloud.default.Combine, { size: size * 0.9, type }),
        right: /* @__PURE__ */ React.createElement(import_Wenxin.default.Combine, { extra: "千帆", size, type, ...props }),
        size,
        ...props
      }
    )),
    Icon: import_Wenxin.default,
    keywords: [import_providerEnum.ModelProvider.Wenxin]
  },
  { Icon: import_SenseNova.default, combineMultiple: 0.95, keywords: [import_providerEnum.ModelProvider.SenseNova] },
  { Icon: import_HuggingFace.default, combineMultiple: 1.16, keywords: [import_providerEnum.ModelProvider.HuggingFace] },
  { Icon: import_LmStudio.default, keywords: [import_providerEnum.ModelProvider.LmStudio] },
  { Icon: import_XAI.default, combineMultiple: 0.85, keywords: [import_providerEnum.ModelProvider.XAI] },
  {
    Combine: (0, import_react.memo)(({ size = 24, type = "color", ...props }) => /* @__PURE__ */ React.createElement(
      import_Combine.default,
      {
        left: /* @__PURE__ */ React.createElement(import_Cloudflare.default.Combine, { size: size * 1.1, type }),
        right: /* @__PURE__ */ React.createElement(import_WorkersAI.default.Combine, { size: size * 0.9, type }),
        size,
        ...props
      }
    )),
    Icon: import_Cloudflare.default,
    combineMultiple: 1.1,
    keywords: [import_providerEnum.ModelProvider.Cloudflare]
  },
  { Icon: import_InternLM.default, combineMultiple: 0.95, keywords: [import_providerEnum.ModelProvider.InternLM] },
  { Icon: import_Higress.default, keywords: [import_providerEnum.ModelProvider.Higress] },
  { Icon: import_Vllm.default, combineMultiple: 0.85, keywords: [import_providerEnum.ModelProvider.VLLM] },
  { Icon: import_GiteeAI.default, combineMultiple: 0.95, keywords: [import_providerEnum.ModelProvider.GiteeAI] },
  { Icon: import_ModelScope.default, combineMultiple: 1.2, keywords: [import_providerEnum.ModelProvider.ModelScope] },
  { Icon: import_VertexAI.default, keywords: [import_providerEnum.ModelProvider.VertexAI] },
  { Icon: import_PPIO.default, combineMultiple: 0.85, keywords: [import_providerEnum.ModelProvider.PPIO] },
  { Icon: import_Jina.default, keywords: [import_providerEnum.ModelProvider.Jina] },
  { Icon: import_AzureAI.default, keywords: [import_providerEnum.ModelProvider.AzureAI] },
  { Icon: import_Volcengine.default, keywords: [import_providerEnum.ModelProvider.Volcengine] },
  { Icon: import_SambaNova.default, combineMultiple: 0.8, keywords: [import_providerEnum.ModelProvider.SambaNova] },
  { Icon: import_Cohere.default, keywords: [import_providerEnum.ModelProvider.Cohere] },
  { Icon: import_Search1API.default, combineMultiple: 0.9, keywords: [import_providerEnum.ModelProvider.Search1API] },
  { Icon: import_Infinigence.default, combineMultiple: 0.8, keywords: [import_providerEnum.ModelProvider.InfiniAI] },
  { Icon: import_Xinference.default, combineMultiple: 0.85, keywords: [import_providerEnum.ModelProvider.Xinference] },
  { Icon: import_Fal.default, combineMultiple: 0.8, keywords: [import_providerEnum.ModelProvider.Fal] },
  { Icon: import_Ai302.default, combineMultiple: 0.9, keywords: [import_providerEnum.ModelProvider.Ai302] },
  { Icon: import_AiHubMix.default, combineMultiple: 0.9, keywords: [import_providerEnum.ModelProvider.AiHubMix] },
  {
    Combine: (0, import_react.memo)(({ size = 24, ...props }) => /* @__PURE__ */ React.createElement(
      import_Combine.default,
      {
        left: /* @__PURE__ */ React.createElement(import_Vercel.default.Combine, { size: size * 0.9 }),
        right: /* @__PURE__ */ React.createElement(import_V0.default, { size }),
        size,
        ...props
      }
    )),
    Icon: import_Vercel.default,
    keywords: [import_providerEnum.ModelProvider.V0]
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  providerMappings
});
