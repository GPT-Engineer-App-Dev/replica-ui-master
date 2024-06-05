import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import DataTable from "../components/DataTable";

const Index = () => {
  const [reports, setReports] = useState([]);

  const handleAddReport = (newReport) => {
    setReports([...reports, newReport]);
  };

  const handleEditReport = (index, updatedReport) => {
    const newReports = [...reports];
    newReports[index] = updatedReport;
    setReports(newReports);
  };

  const handleDeleteReport = (index) => {
    const newReports = [...reports];
    newReports.splice(index, 1);
    setReports(newReports);
  };

  return (
    <Flex>
      <Sidebar />
      <Box flex="1">
        <TopNav onAddReport={handleAddReport} />
        <DataTable data={reports} onEditReport={handleEditReport} onDeleteReport={handleDeleteReport} />
      </Box>
    </Flex>
  );
};

export default Index;