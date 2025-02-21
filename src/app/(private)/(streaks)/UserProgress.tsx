"use client";

import { GoalsBox } from "@/components/goalsBox";
import { getRandomQuote } from "@/shared/quotesUtils";
import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import { IUserStreaks } from "models/streaks";
import { IUserProfileResponse } from "models/user";
import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

export function UserProgress({
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
      <ActivityCalendar
        data={userData.userStreaks.readPostHistory.map((post) => {
          return {
            date: new Date(post.createdAt).toISOString().split("T")[0],
            count: 1,
            level: 1,
          };
        })}
        maxLevel={1}
        showWeekdayLabels
        hideTotalCount
      />
    </VStack>
  );
}
