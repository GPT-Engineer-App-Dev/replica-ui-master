import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      w="250px"
      h="100vh"
      bg="gray.50"
      p={4}
      borderRight="1px solid"
      borderColor="gray.200"
    >
      <VStack align="start" spacing={4}>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Project Name
          </Text>
          <Text fontSize="sm" color="gray.500">
            Category
          </Text>
        </Box>
        <VStack align="start" spacing={2}>
          <Text>Call Tool</Text>
          <Text>Invoice Tool</Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;