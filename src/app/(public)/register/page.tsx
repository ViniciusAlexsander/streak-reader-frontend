import { Center, Link, Text, VStack } from "@chakra-ui/react";

export default function Page() {
  return (
    <Center w="100%" h="full">
      <VStack gap={10}>
        <Text>Cadastre-se</Text>
        <Text>
          Voltar para{" "}
          <Link variant="underline" href="/" colorPalette="teal">
            Login
          </Link>{" "}
        </Text>
      </VStack>
    </Center>
  );
}
