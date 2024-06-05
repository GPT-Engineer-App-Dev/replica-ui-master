import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Button,
  IconButton,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DataTable = () => {
  const data = Array(10).fill({
    item: "Lorem dolore",
    value: "9,000",
    data1: "Data series",
    data2: "DD/MM/YY",
    status: "Status",
  });

  return (
    <Box w="100%" p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
            <Th>ITEM</Th>
            <Th>VALUE ($)</Th>
            <Th>DATA</Th>
            <Th>DATA</Th>
            <Th>STATUS</Th>
            <Th>ACTION</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>
                <Checkbox />
              </Td>
              <Td>{row.item}</Td>
              <Td>{row.value}</Td>
              <Td>{row.data1}</Td>
              <Td>{row.data2}</Td>
              <Td>
                <Button size="sm">{row.status}</Button>
              </Td>
              <Td>
                <IconButton icon={<FaEdit />} size="sm" mr={2} />
                <IconButton icon={<FaTrash />} size="sm" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justify="space-between" align="center" mt={4}>
        <Text>106 results</Text>
        <Flex>
          <Button size="sm" mr={2}>
            &lt;
          </Button>
          <Button size="sm" mr={2}>
            1
          </Button>
          <Button size="sm" mr={2}>
            2
          </Button>
          <Button size="sm" mr={2}>
            3
          </Button>
          <Button size="sm" mr={2}>
            4
          </Button>
          <Button size="sm" mr={2}>
            10
          </Button>
          <Button size="sm" mr={2}>
            11
          </Button>
          <Button size="sm">&gt;</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DataTable;