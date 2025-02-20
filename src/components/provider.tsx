"use client";

import { system } from "@/components/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, ThemeProviderProps } from "next-themes";

export function Provider(props: ThemeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
