import { ChakraStylesConfig, Select } from "chakra-react-select";
import { Box, Stack, Heading } from "@chakra-ui/react";
import { useState } from "react";

const months = Array.from({ length: 12 }, (_, i) => ({
  value: i + 1,
  label: new Date(0, i).toLocaleString("default", { month: "long" }),
}));

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => ({
  value: currentYear - i,
  label: `${currentYear - i}`,
}));

export interface ISelectedOption {
  value: number;
  label: string;
}

interface IUserStreakFilterProps {
  selectedMonth: ISelectedOption;
  selectedYear: ISelectedOption;
  onChangeMonth: (value: ISelectedOption) => void;
  onChangeYear: (value: ISelectedOption) => void;
}

export default function UserStreakFilter({
  onChangeMonth,
  onChangeYear,
  selectedMonth,
  selectedYear,
}: IUserStreakFilterProps) {
  const handleMonthChange = (option: ISelectedOption) => {
    onChangeMonth(option);
  };

  const handleYearChange = (option: ISelectedOption) => {
    onChangeYear(option);
  };

  return (
    <Box>
      <Heading size="md" mb={4}>
        Filtre pelo ano e mês
      </Heading>
      <Stack direction="row" gap={4}>
        <Select
          options={months}
          placeholder="Selecione um mês"
          onChange={handleMonthChange}
          value={selectedMonth}
          isClearable
        />
        <Select
          options={years}
          placeholder="Selecione um ano"
          onChange={handleYearChange}
          value={selectedYear}
          isClearable
        />
      </Stack>
    </Box>
  );
}
