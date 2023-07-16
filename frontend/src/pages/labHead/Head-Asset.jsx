import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  FormControl,
  Input,
  HStack,
  VStack,
  } from '@chakra-ui/react'
  import axios from "axios";

  import '../../css/table-asset.css'

export default function HeadAsset(){
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    // Fetch data from the SQL database
    axios
      .get("http://localhost:5000/asset/")
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
      return "invalid date"; // Return empty string or another fallback value
    }

    const formattedDate = new Date(dateString);
    return formattedDate.toLocaleDateString();
  };
  return (
    <div className="tech-asset">
      <VStack>
        <HStack
          justify={"space-between"}
          width={"100%"}
          padding={"0px 8px 0px 8px"}
        >
          <Heading size="xl" color={"black"} fontFamily={"rubik"}>
            Equipment
          </Heading>
          <HStack>
            <FormControl>
              <Input
                type="text"
                placeholder="SEARCH"
                onChange={(e) => {
                  setSearchItem(e.target.value);
                }}
              />
            </FormControl>
          </HStack>
        </HStack>
        <TableContainer
          borderRadius={"10px"}
          width={"100%"}
          overflowY={"auto"}
          boxShadow={"xl"}
          height={"70vh"}
        >
          <Table colorScheme={"facebook"} variant="simple">
            <Thead>
              <Tr
                position={"sticky"}
                top={0}
                bgColor={"facebook.400"}
                zIndex={"1"}
              >
                <Th color={"white"}>Asset Code</Th>
                <Th color={"white"}>Name</Th>
                <Th color={"white"}>Brand</Th>
                <Th color={"white"}>Serial No.</Th>
                <Th color={"white"}>Date Aquired</Th>
                <Th color={"white"}>Location</Th>
                <Th color={"white"}>Status</Th>
                <Th color={"white"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data
                .filter((srchVal) => {
                  if (searchItem === "") {
                    return srchVal;
                  } else if (
                    srchVal.asset_code
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  } else if (
                    srchVal.name
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  } else if (
                    srchVal.brand
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  } else if (
                    srchVal.serial_no
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  } else if (
                    srchVal.date_acquired
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  } else if (
                    srchVal.location
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  } else if (
                    srchVal.status
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  }
                })
                .map((item, index) => {
                  return (
                    <Tr key={index}>
                      <Td>{item.asset_code}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.brand}</Td>
                      <Td>{item.serial_no}</Td>
                      <Td>{formatDateString(item.date_acquired)}</Td>
                      <Td>{item.location}</Td>
                      <Td>{item.status}</Td>
                      <Td>
                      
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
