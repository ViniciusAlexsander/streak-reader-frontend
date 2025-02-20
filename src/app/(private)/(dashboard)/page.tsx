"use client";
import { Button, Center, Text, VStack } from "@chakra-ui/react";
import { destroyCookie } from "nookies";

export default function Page() {
  const handleLogout = () => {
    console.log("logout");
    destroyCookie(null, "access_token");
  };
  return (
    <Center w="100%" h="full">
      <VStack gap={10}>
        <Text>DASHBOARD</Text>
        <Button onClick={handleLogout}>Logout</Button>
      </VStack>
    </Center>
  );
}
