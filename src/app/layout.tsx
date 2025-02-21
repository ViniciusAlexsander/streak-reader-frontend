import { Provider } from "@/components/provider";
import { Box } from "@chakra-ui/react";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Box
            px={6}
            paddingTop={6}
            paddingBottom={12}
            maxWidth="60rem"
            mx="auto"
          >
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
