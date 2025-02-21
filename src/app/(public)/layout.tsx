import { Box } from "@chakra-ui/react";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return <Box h="100vh">{children}</Box>;
}
