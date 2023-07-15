import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  VStack,
  HStack,
  Divider,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

const formatDateString = (dateString) => {
  console.log(dateString);
  if (!dateString) {
    return "Invalid date"; // Return empty string or another fallback value
  }

  const formattedDate = new Date(dateString);
  return formattedDate.toLocaleDateString();
};

function ReportDetails({ report }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Read more</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Report Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isReadOnly>
              <FormLabel>Report ID</FormLabel>
              <Input value={report.id} type="text" />
            </FormControl>
            <Divider />
            <FormControl isReadOnly>
              <FormLabel>Date</FormLabel>
              <Input value={formatDateString(report.created_on)} type="text" />
            </FormControl>
            <Divider />
            <FormControl isReadOnly>
              <FormLabel>Report Content</FormLabel>
              <Textarea value={report.content} />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function CreateReport() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [report, setReport] = useState({
    created_on: new Date(),
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = report;
    axios
      .post("http://localhost:5000/report-create", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="facebook">
        New Report
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Report</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <Divider />
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input
                  name="created_on"
                  value={report.created_on}
                  onChange={handleChange}
                  type="date"
                />
              </FormControl>
              <Divider />
              <FormControl>
                <FormLabel>Report Title</FormLabel>
                <Input
                  name="title"
                  value={report.title}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <Divider />
              <FormControl>
                <FormLabel>Report Content</FormLabel>
                <Textarea
                  name="content"
                  value={report.content}
                  onChange={handleChange}
                  type="text"
                  rows="5"
                />
              </FormControl>
              <Divider />
              <Button type="submit" colorScheme="blue" mr={3}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function Report() {
  const [reports, setReports] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    // Fetch data from the SQL database
    axios
      .get("http://localhost:5000/report/")
      .then((response) => {
        setReports(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className="report">
      <VStack>
        <HStack
          justify={"space-between"}
          width={"100%"}
          padding={"0px 8px 0px 8px"}
        >
          <Heading size="xl" color={"black"} fontFamily={"rubik"}>
            Reports
          </Heading>
          <HStack>
            <FormControl>
              <Input
                type="text"
                placeholder="Search"
                value={searchItem}
                onChange={handleSearchChange}
              />
            </FormControl>
            <CreateReport />
          </HStack>
        </HStack>

        <TableContainer
          borderRadius="10px"
          width="100%"
          overflowY="auto"
          boxShadow="xl"
          height="70vh"
        >
          <Table colorScheme="facebook" size="lg">
            <Thead>
              <Tr position="sticky" top={0} bgColor="facebook.400" zIndex="1">
                <Th color="white">Date</Th>
                <Th color="white">Report Title</Th>
                <Th color="white">Content</Th>
                <Th color="white"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {reports
                .filter((srchVal) => {
                  if (searchItem === "") {
                    return srchVal;
                  } else if (
                    srchVal.id.toLowerCase().includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  } else if (
                    srchVal.date
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  } else if (
                    srchVal.text
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  }
                })
                .map((report, index) => {
                  return (
                    <Tr key={index}>
                      <Td>{formatDateString(report.created_on)}</Td>
                      <Td>{report.title}</Td>
                      <Td>{report.content.substring(0, 50) + "..."}</Td>
                      <Td>
                        <ReportDetails report={report} />
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </div>
  );
}
