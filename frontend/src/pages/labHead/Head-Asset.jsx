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
    return(

        <>
            <div className='table'>

            <div id='asset-header'>
                <Heading size='xl'>List of Items:</Heading>
            </div>

            <TableContainer>
                <Table className='asset-table' variant='simple'>

                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

                    <Thead className='asset-head'>
                    <Tr>
                        <Th>Asset Code</Th>
                        <Th>Name</Th>
                        <Th>Brand</Th>
                        <Th>Serial No.</Th>
                        <Th>Date Aquired</Th>
                        <Th>Location</Th>
                        <Th>Status</Th>
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
                    </Tr>
                    <Tr>
                        <Td>aa</Td>
                        <Td>a</Td>
                        <Td>a</Td>
                        <Td>a</Td>
                        <Td>aa</Td>
                        <Td>a</Td>
                        <Td>a</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            </div>
        </>
    )
}