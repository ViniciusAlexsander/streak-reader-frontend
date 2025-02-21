import { Box, Button, Flex } from "@chakra-ui/react";
import { logout } from "./actions";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <Box>
      <Flex marginBottom={6} alignItems="center" justifyContent="flex-end">
        <Button onClick={logout}>Logout</Button>
      </Flex>
      <Box>{children}</Box>
    </Box>
  );
}
