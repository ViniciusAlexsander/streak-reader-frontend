import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  // theme: {
  //   semanticTokens: {
  //     colors: {
  //       bg: {
  //         DEFAULT: {
  //           value: { _light: "#FFFFFF" },
  //         },
  //       },
  //     },
  //   },
  // },
});

export const system = createSystem(defaultConfig, customConfig);

// solid: { value: "#000000" },
// contrast: { value: "#FFCE04" },
// fg: { value: "#FFFFFF" },
// muted: { value: "#240E0B" },
// subtle: { value: "#615A5A" },
// emphasized: { value: "#FFCE04" },
// focusRing: { value: "#FFCE04" },
