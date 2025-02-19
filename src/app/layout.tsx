import { Provider } from "@/components/provider";
import { Box } from "@chakra-ui/react";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Box padding="4" h="100vh">
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
