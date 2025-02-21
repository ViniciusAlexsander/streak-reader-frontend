import { Provider } from "@/components/provider";
import { Box } from "@chakra-ui/react";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Box py={6} px={6} h="100vh" maxWidth="42rem" mx="auto">
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
