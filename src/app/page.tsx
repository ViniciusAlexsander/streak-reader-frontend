import {
  Button,
  Center,
  Field,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Page() {
  return (
    <Center w="100%" h="full">
      <VStack gap={10}>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input placeholder="me@example.com" />
          <Field.HelperText>
            O mesmo email que você recebe suas noticias
          </Field.HelperText>
        </Field.Root>
        <Field.Root>
          <Field.Label>Senha</Field.Label>
          <Input type="password" />
        </Field.Root>
        <Button w="full">Fazer login</Button>
        <Text>
          Não tem uma conta?{" "}
          <Link variant="underline" href="/register" colorPalette="teal">
            Cadastrar
          </Link>{" "}
        </Text>
      </VStack>
    </Center>
  );
}
