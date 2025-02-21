"use client";

import { GoalsBox } from "@/components/goalsBox";
import {
  calendarLabels,
  formatDate,
  getAllDaysOfYear,
} from "@/shared/dateUtils";
import { getRandomQuote } from "@/shared/quotesUtils";
import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import { IUserStreaks } from "models/streaks";
import { IUserProfileResponse } from "models/user";
import { useEffect, useState } from "react";
import {
  Activity,
  ActivityCalendar,
  BlockElement,
} from "react-activity-calendar";
import { Tooltip } from "./ui/tooltip";

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

  const getActiveDate = () => {
    const year = new Date().getFullYear();
    const allDays = getAllDaysOfYear(year);

    const activityMap = new Map(
      userData.userStreaks.readPostHistory.map((post) => [
        new Date(post.createdAt).toISOString().split("T")[0],
        { count: 1, level: 1 },
      ])
    );

    const mergedData = allDays.map((day) => ({
      ...day,
      ...(activityMap.get(day.date) || {}),
    }));

    return mergedData;
  };

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
      <Text fontSize={{ base: "xl", md: "xl" }} textAlign="center">
        Seu histórico de Leituras
      </Text>
      <ActivityCalendar
        data={getActiveDate()}
        maxLevel={1}
        labels={calendarLabels}
        showWeekdayLabels
        renderBlock={ReadTooltip}
      />
    </VStack>
  );
}

const ReadTooltip = (block: BlockElement, activity: Activity) => {
  let content;
  let formatActivityDate = formatDate(activity.date);

  if (activity.count > 0) {
    content = `Leitura do dia ${formatActivityDate}`;
  } else {
    content = `Nenhuma leitura no dia ${formatActivityDate}`;
  }
  return (
    <Tooltip showArrow content={content}>
      {block}
    </Tooltip>
  );
};
