// app/layout.tsx
import { Box, Flex, Button } from "@chakra-ui/react";
import { AuthProvider } from "context/AuthContext";
import { adminPage, isAdminFunction, logout } from "./actions";
import { redirect } from "next/navigation";
import { AdminNavigation } from "@/components/adminNavigation";

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
