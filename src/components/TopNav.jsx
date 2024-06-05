import { Box, Flex, Input, Button, IconButton, Select } from "@chakra-ui/react";
import { FaBell, FaQuestionCircle, FaUserCircle } from "react-icons/fa";

const TopNav = () => {
  return (
    <Box
      w="100%"
      bg="white"
      p={4}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex justify="space-between" align="center">
        <Flex align="center" w="60%">
          <Input placeholder="Search" mr={4} />
          <Select placeholder="Category" mr={4}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>
          <Button mr={4}>Filter</Button>
          <Button mr={4}>Sort</Button>
        </Flex>
        <Flex align="center">
          <Button colorScheme="blue" mr={4}>
            + Add report
          </Button>
          <IconButton icon={<FaQuestionCircle />} mr={2} />
          <IconButton icon={<FaBell />} mr={2} />
          <IconButton icon={<FaUserCircle />} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;