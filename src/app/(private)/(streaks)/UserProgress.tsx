// app/dashboard/UserProgress.tsx
"use client";

import { GoalsBox } from "@/components/goalsBox";
import { getRandomQuote } from "@/shared/quotesUtils";
import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Timeline } from "./timeline";
import { IUserProfileResponse } from "models/user";
import { IUserStreaks } from "models/streaks";

export default function UserProgress({
  userData,
}: {
  userData: {
    user: IUserProfileResponse;
    userStreaks: IUserStreaks;
  };
}) {
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <VStack gap={"12"}>
      <VStack>
        <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
          Seu progresso diário
        </Text>
        <Text fontSize="md" textAlign="center">
          Acompanhe todos os dias.
        </Text>
      </VStack>
      <Box h={20}>
        <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
          {quote.text}
        </Text>
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-evenly" }}
        gap={{ base: 10, md: 0 }}
        alignItems="center"
        width="full"
      >
        <GoalsBox
          goalText="Dias seguidos"
          quantity={userData.userStreaks.dailyStreak}
        />
        <GoalsBox
          goalText="Total de leituras"
          quantity={userData.userStreaks.readPostHistory.length}
        />
      </Stack>
      <Timeline userStreaks={userData.userStreaks} />
    </VStack>
  );
}
