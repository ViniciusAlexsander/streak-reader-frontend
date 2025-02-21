import { Box, Stack, Text, Icon, VStack } from "@chakra-ui/react";
import { IUserStreaks } from "models/streaks";
import { MdAccessTime } from "react-icons/md";

const TimelineItem = ({
  date,
  title,
  excerpt,
}: {
  date: string;
  title: string;
  excerpt: string;
}) => {
  return (
    <Stack direction="row" gap={4} align="center" mb={6}>
      <Box>
        <Icon as={MdAccessTime} boxSize={6} color="teal.500" />
      </Box>
      <Box>
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm" color="gray.500">
          {new Date(date).toLocaleDateString()}
        </Text>
        <Text>{excerpt}</Text>
      </Box>
    </Stack>
  );
};

export const Timeline = ({ userStreaks }: { userStreaks: IUserStreaks }) => {
  return (
    <VStack gap={8} align="stretch">
      {userStreaks.readPostHistory.map((post, index) => (
        <TimelineItem
          key={post.id}
          date={post.createdAt.toString()}
          title={post.utmCampaign}
          excerpt={post.resourceId}
        />
      ))}
    </VStack>
  );
};
