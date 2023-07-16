import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading, Button
  } from '@chakra-ui/react'

  import '../../css/table-asset.css'

export default function HeadAsset(){
    return (
        <div className="tech-asset">
              <Heading size="xl" color={"black"} fontFamily={"rubik"}>
                Equipment
              </Heading>
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
                </Tbody>
              </Table>
            </TableContainer>
        </div>
      );
    }
