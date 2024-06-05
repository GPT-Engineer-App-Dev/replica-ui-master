import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import DataTable from "../components/DataTable";

const Index = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1">
        <TopNav />
        <DataTable />
      </Box>
    </Flex>
  );
};

export default Index;