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

export default function HeadLog(){
    return(

        <>
            <div className='table'>

            <div id='asset-header'>
                <Heading size='lg'>Recent Activity</Heading>
            </div>

            <TableContainer>
                <Table className='asset-table' variant='simple'>

                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

                    <Thead className='asset-head'>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Name</Th>
                        <Th id='a-h'>Activity</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>aa</Td>
                        <Td>a</Td>
                        <Td id='activity'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Td>
                        <Td><Button>Details</Button></Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            </div>
        </>
    )
}