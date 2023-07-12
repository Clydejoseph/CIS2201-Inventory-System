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


import '../../css/table-account.css'

export default function AdminAccount(){
    return(

        <>
            <div className='table'>

            <div id='account-header'>
                <Heading size='xl'>List of Users:</Heading>
            </div>

            <TableContainer>
                <Table className='account-table' variant='simple'>

                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

                    <Thead className='account-head'>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>User Role</Th>
                        <Th>Contact Number</Th>
                        <Th>Email</Th>
                        <Th>Status</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>aa</Td>
                        <Td>a</Td>
                        <Td>a</Td>
                        <Td>aa</Td>
                        <Td>a</Td>
                        <Td>a</Td>
                        <Td><Button>Details</Button></Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            </div>
        </>
    )
}