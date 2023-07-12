import React, { useState, useEffect } from 'react'
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
    Select,
    FormErrorMessage
  } from '@chakra-ui/react'
  import axios from 'axios';

import '../../css/table-request.css'



function CreateRequest(){
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [request, setRequest] = useState({
        name: '',
        description: '',
        type: '',
        item: '',
        date_requested: '',
        date_needed: '',
        status: 'Pending',
        unit: '',
        unit_cost: '',
        quantity: '',
        total_amount: '',
        payee: '',
        instructions: '',
        endorser: '',
        labor: '',
        total_charge: ''
      });


    const [showRIS, setShowRIS] = useState(false);
    const [showWRF, setShowWRF] = useState(false);

    const handleSelect = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
        setShowRIS(e.target.value === 'RIS');
        setShowWRF(e.target.value === 'WRF');
    };


    const handleChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const HandleSubmit = (e) => {
      const data = request;
      axios.post('http://localhost:5000/request-create', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      onClose();
    }
  
    return (
      <>
        <Button onClick={onOpen}>Create Request</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent maxW="800px">
            <ModalHeader>Add New Request</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

          <form onSubmit={HandleSubmit}>

            <FormControl>
                <FormLabel>Request Name</FormLabel>
                <Input  name='name'
                        onChange={handleChange}
                        type="text" />
            </FormControl>
  
            <FormControl>
                <FormLabel>Request Description</FormLabel>
                <Input  name='description'
                        onChange={handleChange}
                        type="text" />
            </FormControl>

            <FormControl>
                <FormLabel>Request Type</FormLabel>
                <Select name='type' placeholder='select category' onChange={handleSelect}>
                    <option value="RIS">RIS</option>
                    <option value="WRF">WRF</option>
                </Select>
            </FormControl>

            {showRIS && (
                <>
                  <FormControl>
                  <FormLabel>Item</FormLabel>
                  <Select name='item' placeholder='select item' onChange={handleChange}>
                    <option value="Mouse">Mouse</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Tool">Tool</option>
                </Select>
                </FormControl>

                <FormControl>
                <FormLabel>Unit</FormLabel>
                <Input  name='supplier'
                        onChange={handleChange}
                        type="text" />
                </FormControl>
                </>
              )}

            <FormControl>
                <FormLabel>Unit</FormLabel>
                <Input  name='supplier'
                        onChange={handleChange}
                        type="text" />
            </FormControl>

            <FormControl>
                <FormLabel>Serial Number</FormLabel>
                <Input  name='serial'
                        onChange={handleChange}
                        type="text" />
            </FormControl>

            <FormControl>
                <FormLabel>Date Aquired</FormLabel>
                <Input  name='date'
                        onChange={handleChange}
                        size="md"
                        type="date" />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Location</FormLabel>
                <Input  name='location'
                        onChange={handleChange}
                        type="text" />
            </FormControl>

            <Button type='submit' id='modalButton' colorScheme='blue' mr={3}>
                Add
            </Button>
            <Button id='modalButton' onClick={onClose}>Cancel</Button>

          </form>

            </ModalBody>

          </ModalContent>
        </Modal>
      </>
    )
}



export default function TechRequest(){
    return(

        <>

            <div className='table'>

            <div id='req-header'>
                <Heading size='xl'>List of Requests:</Heading>
                <CreateRequest />
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