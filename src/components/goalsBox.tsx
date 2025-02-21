import { Box, Text } from "@chakra-ui/react";

interface IGoalsBoxProps {
  quantity: number;
  goalText: string;
}

export function GoalsBox({ goalText, quantity }: IGoalsBoxProps) {
  return (
    <Box
      borderWidth="1px"
      borderColor="MenuText"
      borderRadius="md"
      padding={5}
      width={44}
    >
      <Text textAlign="center" fontWeight="bold" fontSize="5xl">
        {quantity}
      </Text>
      <Text textAlign="center" fontWeight="bold">
        {goalText}
      </Text>
    </Box>
  );
}
