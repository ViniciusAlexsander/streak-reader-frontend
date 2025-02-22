"use client";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { Box, Flex, HStack, Stack, Table, Text } from "@chakra-ui/react";
import { useAuth } from "context/AuthContext";
import { Pagination, User } from "models/streaks";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { getRankingStreaks } from "repositories/streaksRepository";

const pageSize = 10;
export default function Page() {
  const { user } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>({
    currentPage: 1,
    hasNextPage: true,
    hasPrevPage: false,
    pageSize,
    totalCount: 0,
    totalPages: 0,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getRankingStreaks(currentPage, pageSize);

        setUsers(response.users);
        setPagination(response.pagination);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchUsers();
  }, [currentPage]);

  return (
    <Stack width="full" gap="5" alignItems="center">
      <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
        Ranking de leitores
      </Text>
      {users.map((user, index) => (
        <Flex
          gap={{ base: 5, md: 10 }}
          alignItems="center"
          justifyContent="center"
          width="full"
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            width="15%"
            textAlign="center"
          >
            {index + 1 * pagination.currentPage}º
          </Text>
          <Box
            key={user.email}
            borderWidth="1px"
            borderColor="MenuText"
            borderRadius="md"
            padding={{ base: 2, md: 5 }}
            width="85%"
            maxWidth={{ base: "60", md: "96" }}
          >
            <Flex gap={2}>
              <Text fontWeight="bold">Streak atual:</Text>
              <Text>{user.actualStreak}</Text>
            </Flex>
            <Flex gap={2}>
              <Text fontWeight="bold">Record de streak:</Text>
              <Text>{user.recordStreak}</Text>
            </Flex>
            <Flex
              gap={{ base: 0, md: 2 }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Text fontWeight="bold">Usuário:</Text>
              <Text>{user.email}</Text>
            </Flex>
          </Box>
        </Flex>
      ))}

      <PaginationRoot
        count={pagination.totalCount}
        pageSize={pagination.pageSize}
        page={pagination.currentPage}
        onPageChange={() => setCurrentPage(currentPage + 1)}
      >
        <HStack wrap="wrap">
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Stack>
  );
}
