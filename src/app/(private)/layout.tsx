import { Box, Button, Flex } from "@chakra-ui/react";
import { logout } from "./actions";
import { AuthProvider } from "context/AuthContext";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <AuthProvider>
      <Box>
        <Flex marginBottom={6} alignItems="center" justifyContent="flex-end">
          <Button onClick={logout}>Logout</Button>
        </Flex>
        <Box>{children}</Box>
      </Box>
    </AuthProvider>
  );
}
