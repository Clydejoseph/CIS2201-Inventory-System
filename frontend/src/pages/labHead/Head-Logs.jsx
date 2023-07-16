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
  import '../../css/table-asset.css'

export default function HeadLog(){
    return(

        <>

            <div className='table-request'>


            <VStack>
            <HStack justify={'space-between'} width={'100%'} padding={'0px 8px 0px 8px'}>
              <Heading size='xl' color={'black'} fontFamily={'rubik'}>Activity Log</Heading>
              <HStack>
              </HStack>
            </HStack>


            <TableContainer borderRadius={'10px'} width={'100%'} overflowY={'auto'} boxShadow={'xl'} height={'70vh'} >
                <Table colorScheme='facebook'  variant='simple' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

                    <Thead>
                    <Tr position={'sticky'} top={0} bgColor={'facebook.400'} zIndex={'1'}>
                        <Th color={'white'}>Date</Th>
                        <Th color={'white'}>User</Th>
                        <Th color={'white'}>Activity</Th>
                        <Th color={'white'}>Details</Th>
                    </Tr>
                    <Tr>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td><Button>Details</Button></Td>
                    </Tr>
                    </Thead>
                </Table>
            </TableContainer>
            </VStack>
            </div>
        </>
    )
}
