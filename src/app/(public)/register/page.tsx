"use client";

import {
  Button,
  Center,
  Field,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { createUser } from "./actions";

export default function Page() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [name, setName] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const onHandleSubmit = async () => {
    setLoading(true);
    await createUser({ email, password, name });
    setTimeout(() => {
      setLoading(false);
      redirect("/sign-in");
    }, 5000);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Center w="100%" h="full">
      <VStack gap={8}>
        <Text>Cadastre-se</Text>
        <Field.Root>
          <Field.Label>Nome</Field.Label>
          <Input onChange={onChangeName} />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input placeholder="me@example.com" onChange={onChangeEmail} />
          <Field.HelperText>
            O mesmo email que você recebe suas noticias
          </Field.HelperText>
        </Field.Root>
        <Field.Root>
          <Field.Label>Senha</Field.Label>
          <Input type="password" onChange={onChangePassword} />
        </Field.Root>
        <VStack w="full">
          <Button w="full" loading={loading} onClick={onHandleSubmit}>
            Cadastrar
          </Button>
          {loading && (
            <Text fontSize="small">
              Criando conta e redirecionando para o login
            </Text>
          )}
        </VStack>
        <Text>
          Já tem uma conta?{" "}
          <Link variant="underline" href="/sign-in" colorPalette="teal">
            Fazer login
          </Link>{" "}
        </Text>
      </VStack>
    </Center>
  );
}
