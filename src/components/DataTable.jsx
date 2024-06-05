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
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DataTable = () => {
  const [data, setData] = useState([
    { item: "Lorem dolore", value: "9,000", data1: "Data series", data2: "DD/MM/YY", status: "Status" },
    // Add more initial data if needed
  ]);

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (index, updatedRow) => {
    const newData = [...data];
    newData[index] = updatedRow;
    setData(newData);
  };

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
                <IconButton icon={<FaEdit />} size="sm" mr={2} onClick={() => handleEdit(index, row)} />
                <IconButton icon={<FaTrash />} size="sm" onClick={() => handleDelete(index)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justify="space-between" align="center" mt={4}>
        <Text>{data.length} results</Text>
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