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
    Textarea,
    InputGroup,
    InputLeftElement,
    HStack,
    VStack
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
        labor_cost: '',
        requestor: ''
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
          <ModalContent>
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

            <FormControl>
                <FormLabel>Item</FormLabel>
                <Select name='item' placeholder='select item' onChange={handleChange}>
                    <option value="Mouse">Mouse</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Tool">Tool</option>
                </Select>
            </FormControl>

            {showRIS && (
                <>
                <FormControl>
                <FormLabel>Unit</FormLabel>
                <Input  name='unit'
                        onChange={handleChange}
                        type="text" />
                </FormControl>

                <FormControl>
                <FormLabel>Unit Cost</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'
                                        fontSize='1.2em'
                                        children='₱'/>
                    <Input  name='unit_cost'
                            onChange={handleChange}
                            type="number" />
                </InputGroup>
                </FormControl>

                <FormControl>
                <FormLabel>Quantity</FormLabel>
                <Input  name='quantity'
                        onChange={handleChange}
                        type="number" />
                </FormControl>

                <FormControl>
                <FormLabel>Total Amount</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'
                                        fontSize='1.2em'
                                        children='₱'/>
                    <Input  name='total_amount'
                            value={request.unit_cost * request.quantity}
                            onChange={handleChange}
                            type="number" />
                </InputGroup>
                </FormControl>

                <FormControl>
                <FormLabel>Payee</FormLabel>
                <Input  name='payee'
                            onChange={handleChange}
                            type="text" />
                </FormControl>

                <FormControl>
                    <FormLabel>Payment Instructions</FormLabel>
                    <Textarea  name='instructions'
                            onChange={handleChange}
                            type="text" />
                </FormControl>
                </>
            )}

            {showWRF && (
                <>
                <FormControl>
                <FormLabel>Quantity</FormLabel>
                <Input  name='quantity'
                        onChange={handleChange}
                        type="number" />
                </FormControl>

                <FormControl>
                <FormLabel>Date Needed</FormLabel>
                <Input  name='date_needed'
                        onChange={handleChange}
                        size="md"
                        type="date" />
                </FormControl>

                <FormControl>
                <FormLabel>Labor Cost</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'
                                        fontSize='1.2em'
                                        children='₱'/>
                    <Input  name='labor_cost'
                            value={request.unit_cost * request.quantity}
                            onChange={handleChange}
                            type="number" />
                </InputGroup>
                </FormControl> 
                </>
            )}

                <FormControl>
                <FormLabel>Requested by</FormLabel>
                <Input  name='requestor'
                        onChange={handleChange}
                        type="text" />
                </FormControl>

            

            <Button type='submit' id='modalButton' colorScheme='blue' mr={3}>
                Submit
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

    const [data, setData] = useState([]);
    const [searchItem ,setSearchItem] = useState('');

    const formatDateString = (dateString) => {
      if (!dateString) {
        return 'invalid date'; // Return empty string or another fallback value
      }
    
      const formattedDate = new Date(dateString);
      return formattedDate.toLocaleDateString();
    };


    useEffect(() => {
      // Fetch data from the SQL database
      axios.get('http://localhost:5000/request/')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    return(

        <>

            <div className='table-request'>


            <VStack>
            <HStack justify={'space-between'} width={'100%'} padding={'0px 8px 0px 8px'}>
              <Heading size='xl' color={'black'} fontFamily={'rubik'}>Request</Heading>
              <HStack>
                  <FormControl>
                    <Input type='text'  placeholder='SEARCH' onChange={(e) =>{setSearchItem(e.target.value)}}/>
                  </FormControl>
                  <CreateRequest />
              </HStack>
            </HStack>


            <TableContainer borderRadius={'10px'} width={'100%'} overflowY={'auto'} boxShadow={'xl'} height={'70vh'} >
                <Table colorScheme='facebook'  variant='simple' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

                    <Thead>
                    <Tr position={'sticky'} top={0} bgColor={'facebook.400'} zIndex={'1'}>
                        <Th color={'white'}>ID</Th>
                        <Th color={'white'}>Name</Th>
                        <Th color={'white'}>Type</Th>
                        <Th color={'white'}>Item Requested</Th>
                        <Th color={'white'}>Date Requested</Th>
                        <Th color={'white'}>Date Needed</Th>
                        <Th color={'white'}>Status</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {data.filter((srchVal) =>{
                        if(searchItem == '' ){
                          return srchVal;
                        }
                        else if(srchVal.id.toLowerCase().includes(searchItem.toLowerCase())){
                          return srchVal;
                        }
                        else if(srchVal.name.toLowerCase().includes(searchItem.toLowerCase())){
                          return srchVal;
                        }
                        else if(srchVal.type.toLowerCase().includes(searchItem.toLowerCase())){
                          return srchVal;
                        }
                        else if(srchVal.item.toLowerCase().includes(searchItem.toLowerCase())){
                          return srchVal;
                        }
                        else if(srchVal.date_requested.toLowerCase().includes(searchItem.toLowerCase())){
                          return srchVal;
                        }
                        else if(srchVal.date_needed.toLowerCase().includes(searchItem.toLowerCase())){
                          return srchVal;
                        }
                        else if(srchVal.status.toLowerCase().includes(searchItem.toLowerCase())){
                          return srchVal;
                        }
                      }).map((request , index ) => {
                        return(
                          <Tr key={index}>
                            <Td>{request.id}</Td>
                            <Td>{request.name}</Td>
                            <Td>{request.type}</Td>
                            <Td>{request.item}</Td>
                            <Td>{formatDateString(request.date_requested)}</Td>
                            <Td>{formatDateString(request.date_needed)}</Td>
                            <Td>{request.status}</Td>
                          </Tr>
                        )
                      })}
                    </Tbody>
                </Table>
            </TableContainer>
            </VStack>
            </div>
        </>
    )
}