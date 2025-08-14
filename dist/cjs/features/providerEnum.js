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

// src/features/providerEnum.ts
var providerEnum_exports = {};
__export(providerEnum_exports, {
  ModelProvider: () => ModelProvider
});
module.exports = __toCommonJS(providerEnum_exports);
var ModelProvider = /* @__PURE__ */ ((ModelProvider2) => {
  ModelProvider2["Ai21"] = "ai21";
  ModelProvider2["Ai302"] = "ai302";
  ModelProvider2["Ai360"] = "ai360";
  ModelProvider2["AiHubMix"] = "aihubmix";
  ModelProvider2["Anthropic"] = "anthropic";
  ModelProvider2["Azure"] = "azure";
  ModelProvider2["AzureAI"] = "azureai";
  ModelProvider2["Baichuan"] = "baichuan";
  ModelProvider2["Bedrock"] = "bedrock";
  ModelProvider2["BurnCloud"] = "burncloud";
  ModelProvider2["Cloudflare"] = "cloudflare";
  ModelProvider2["Cohere"] = "cohere";
  ModelProvider2["DeepSeek"] = "deepseek";
  ModelProvider2["Doubao"] = "Doubao";
  ModelProvider2["Fal"] = "fal";
  ModelProvider2["FireworksAI"] = "fireworksai";
  ModelProvider2["GiteeAI"] = "giteeai";
  ModelProvider2["Github"] = "github";
  ModelProvider2["Google"] = "google";
  ModelProvider2["Groq"] = "groq";
  ModelProvider2["Higress"] = "higress";
  ModelProvider2["HuggingFace"] = "huggingface";
  ModelProvider2["Hunyuan"] = "hunyuan";
  ModelProvider2["InfiniAI"] = "infiniai";
  ModelProvider2["InternLM"] = "internlm";
  ModelProvider2["Jina"] = "jina";
  ModelProvider2["LmStudio"] = "lmstudio";
  ModelProvider2["LobeHub"] = "lobehub";
  ModelProvider2["Minimax"] = "minimax";
  ModelProvider2["Mistral"] = "mistral";
  ModelProvider2["ModelScope"] = "modelscope";
  ModelProvider2["Moonshot"] = "moonshot";
  ModelProvider2["Novita"] = "novita";
  ModelProvider2["Nvidia"] = "nvidia";
  ModelProvider2["Ollama"] = "ollama";
  ModelProvider2["OpenAI"] = "openai";
  ModelProvider2["OpenRouter"] = "openrouter";
  ModelProvider2["PPIO"] = "ppio";
  ModelProvider2["Perplexity"] = "perplexity";
  ModelProvider2["Player2"] = "Player2";
  ModelProvider2["Qiniu"] = "qiniu";
  ModelProvider2["Qwen"] = "qwen";
  ModelProvider2["SambaNova"] = "sambanova";
  ModelProvider2["Search1API"] = "search1api";
  ModelProvider2["SenseNova"] = "sensenova";
  ModelProvider2["SiliconCloud"] = "siliconcloud";
  ModelProvider2["Spark"] = "spark";
  ModelProvider2["Stepfun"] = "stepfun";
  ModelProvider2["Taichu"] = "taichu";
  ModelProvider2["TencentCloud"] = "tencentcloud";
  ModelProvider2["TogetherAI"] = "togetherai";
  ModelProvider2["Upstage"] = "upstage";
  ModelProvider2["V0"] = "v0";
  ModelProvider2["VLLM"] = "vllm";
  ModelProvider2["VertexAI"] = "vertexai";
  ModelProvider2["Volcengine"] = "volcengine";
  ModelProvider2["Wenxin"] = "wenxin";
  ModelProvider2["XAI"] = "xai";
  ModelProvider2["Xinference"] = "xinference";
  ModelProvider2["ZeroOne"] = "zeroone";
  ModelProvider2["ZhiPu"] = "zhipu";
  return ModelProvider2;
})(ModelProvider || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ModelProvider
});
