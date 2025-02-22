// app/layout.tsx
import { AdminNavigation } from "@/components/adminNavigation";
import { Box, Button, Flex } from "@chakra-ui/react";
import { AuthProvider } from "context/AuthContext";
import { isAdminFunction, logout } from "./actions";

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  const isAdmin = await isAdminFunction();

  return (
    <AuthProvider>
      <Box>
        <Flex
          marginBottom={6}
          alignItems="center"
          justifyContent="space-between"
        >
          <AdminNavigation isAdmin={isAdmin} />
          <Button onClick={logout}>Logout</Button>
        </Flex>
        <Box>{children}</Box>
      </Box>
    </AuthProvider>
  );
}
