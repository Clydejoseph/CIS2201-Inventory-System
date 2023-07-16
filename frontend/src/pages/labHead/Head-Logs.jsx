import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

export default function HeadLogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the SQL database
    axios
      .get("http://localhost:5000/logs/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const formatDateString = (dateString) => {
    if (!dateString) {
      return "Invalid date";
    }

    const formattedDate = new Date(dateString);
    return formattedDate.toLocaleDateString();
  };

  return (
    <div className="head-logs">
      <VStack>
        <TableContainer
          borderRadius={"10px"}
          width={"100%"}
          overflowY={"auto"}
          boxShadow={"xl"}
          height={"70vh"}
        >
          <Table colorScheme={"facebook"} variant="simple">
            <Thead>
              <Tr position={"sticky"} top={0} bgColor={"facebook.400"} zIndex={"1"}>
                <Th color={"white"}>ID</Th>
                <Th color={"white"}>Activity</Th>
                <Th color={"white"}>Date Done</Th>
                <Th color={"white"}>User ID</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((log) => (
                <Tr key={log.id}>
                  <Td>{log.id}</Td>
                  <Td>{log.activity}</Td>
                  <Td>{formatDateString(log.date_done)}</Td>
                  <Td>{log.userID}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </div>
  );
}
