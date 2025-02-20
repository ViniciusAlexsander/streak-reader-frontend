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
import { ILoginResponse } from "models/login";
import { ChangeEvent, useState } from "react";
import { postLogin } from "repositories/loginRepository";

export default function SignIn() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onHandleSubmit = async () => {
    await postLogin({ username: email, password });
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Center w="100%" h="full">
      <VStack gap={10}>
        <Text>Login</Text>
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
        <Button w="full" onClick={onHandleSubmit}>
          Fazer login
        </Button>
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
