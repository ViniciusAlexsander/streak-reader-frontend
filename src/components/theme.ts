import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          // ...
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "#000000" },
          contrast: { value: "#FFCE04" },
          fg: { value: "#FFFFFF" },
          muted: { value: "#240E0B" },
          subtle: { value: "#615A5A" },
          emphasized: { value: "#FFCE04" },
          focusRing: { value: "#FFCE04" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
