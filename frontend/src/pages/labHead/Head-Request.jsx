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


import '../../css/table-request.css'

export default function HeadRequest(){
    return(

        <>
            <div className='table'>

            <div id='req-header'>
                <Heading size='xl'>List of Requests:</Heading>
            </div>

            <TableContainer>
                <Table className='req-table' variant='simple'>

                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

                    <Thead className='req-head'>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Type</Th>
                        <Th>Item Requested</Th>
                        <Th>Date Requested</Th>
                        <Th>Date Needed</Th>
                        <Th>Status</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>aa</Td>
                        <Td>a</Td>
                        <Td>a</Td>
                        <Td>a</Td>
                        <Td>aa</Td>
                        <Td>a</Td>
                        <Td>a</Td>
                        <Td><Button>Actions</Button></Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            </div>
        </>
    )
}