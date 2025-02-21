"use client";
import { Button, Center, Text, VStack } from "@chakra-ui/react";
import { logout } from "../actions";

export default function Page() {
  return (
    <Center w="100%" h="full">
      <VStack gap={10}>
        <Text>DASHBOARD</Text>
        <Button onClick={logout}>Logout</Button>
      </VStack>
    </Center>
  );
}
