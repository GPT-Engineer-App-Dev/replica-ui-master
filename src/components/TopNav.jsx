import { useState } from "react";
import { Box, Flex, Input, Button, IconButton, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel } from "@chakra-ui/react";
import { FaBell, FaQuestionCircle, FaUserCircle } from "react-icons/fa";

const TopNav = ({ onAddReport }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportName, setReportName] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [status, setStatus] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = () => {
    const newReport = { item: reportName, value, data1: category, data2: data, status };
    onAddReport(newReport);
    closeModal();
  };

  return (
    <Box w="100%" bg="white" p={4} borderBottom="1px solid" borderColor="gray.200">
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
          <Button colorScheme="blue" mr={4} onClick={openModal}>
            + Add report
          </Button>
          <IconButton icon={<FaQuestionCircle />} mr={2} />
          <IconButton icon={<FaBell />} mr={2} />
          <IconButton icon={<FaUserCircle />} />
        </Flex>
      </Flex>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Report</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="report-name" mb={4}>
              <FormLabel>Report Name</FormLabel>
              <Input placeholder="Enter report name" value={reportName} onChange={(e) => setReportName(e.target.value)} />
            </FormControl>
            <FormControl id="category" mb={4}>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </Select>
            </FormControl>
            <FormControl id="value" mb={4}>
              <FormLabel>Value ($)</FormLabel>
              <Input placeholder="Enter value" value={value} onChange={(e) => setValue(e.target.value)} />
            </FormControl>
            <FormControl id="data" mb={4}>
              <FormLabel>Data</FormLabel>
              <Input type="date" value={data} onChange={(e) => setData(e.target.value)} />
            </FormControl>
            <FormControl id="status" mb={4}>
              <FormLabel>Status</FormLabel>
              <Select placeholder="Select status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="status1">Status 1</option>
                <option value="status2">Status 2</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TopNav;