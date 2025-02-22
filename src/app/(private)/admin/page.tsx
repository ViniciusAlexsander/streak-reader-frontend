"use client";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import {
  Box,
  Flex,
  HStack,
  Spinner,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "context/AuthContext";
import { Pagination, User } from "models/streaks";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { getRankingStreaks } from "repositories/streaksRepository";

const pageSize = 10;
export default function Page() {
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
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getRankingStreaks(currentPage, pageSize);

        setUsers(response.users);
        setPagination(response.pagination);
      } catch (error) {
        console.error("Erro na requisição:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const userPosition = (index: number) => {
    return (currentPage - 1) * pageSize + index + 1;
  };

  return (
    <Stack width="full" gap="5" alignItems="center">
      <Box>
        <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
          Ranking de leitores
        </Text>
      </Box>
      {loading && (
        <Flex alignItems="center" justifyContent="center" h="100%">
          <Spinner size={{ base: "lg" }} />
        </Flex>
      )}
      {!loading &&
        users.map((user, index) => (
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
              {userPosition(index)}º
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
                <Text fontWeight="bold">Total de leituras:</Text>
                <Text>{user._count.readPosts}</Text>
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
        onPageChange={(e) => setCurrentPage(e.page)}
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
