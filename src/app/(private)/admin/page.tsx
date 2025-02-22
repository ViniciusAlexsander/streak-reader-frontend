"use client";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { HStack, Stack, Table, Text } from "@chakra-ui/react";
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
    <Stack width="full" gap="5">
      <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
        Ranking de leitores
      </Text>
      <Table.Root size="sm" variant="outline" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>E-mail do usuario</Table.ColumnHeader>
            <Table.ColumnHeader>Streak atual</Table.ColumnHeader>
            <Table.ColumnHeader>Streak recorde</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.email}>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.actualStreak}</Table.Cell>
              <Table.Cell>{user.recordStreak}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

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
