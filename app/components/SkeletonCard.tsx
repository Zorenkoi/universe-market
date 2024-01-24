import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "./Skeleton";

const SkeletonCard = () => {
  return (
    <Card>
      <Flex direction={"column"} gap={"4"} height={"100%"}>
        <Box className="relative h-64 bg-white">
          <Skeleton className="h-full" />
        </Box>
        <Flex direction={"column"} gap={"1"}>
          <Skeleton className="h-16" />
          <Skeleton className="h-10" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default SkeletonCard;
