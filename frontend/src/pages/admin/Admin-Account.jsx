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
  Select,
  FormErrorMessage,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";

import "../../css/table-asset.css";

function CreateUser() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    contact_no: "",
    authority: "",
    email: "",
    password: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const data = user;
    axios
      .post("http://localhost:5000/user-create", data)
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
      <Button onClick={onOpen} colorScheme={"facebook"}>
        New User
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input name="fname" onChange={handleChange} type="text" />
              </FormControl>

              <Divider />
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input name="lname" onChange={handleChange} type="text" />
              </FormControl>

              <Divider />
              <FormControl>
                <FormLabel>Contact Number</FormLabel>
                <Input
                  name="contact_no"
                  onChange={handleChange}
                  type="tel"
                  pattern="[0-9]{11}"
                  maxLength={11}
                />
              </FormControl>

              <Divider />
              <FormControl>
                <FormLabel>User Role</FormLabel>
                <Select
                  name="authority"
                  placeholder="select role"
                  onChange={handleChange}
                >
                  <option value="Tech">Tech</option>
                  <option value="Head">Head</option>
                  <option value="Admin">Admin</option>
                </Select>
              </FormControl>

              <Divider />
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input name="email" onChange={handleChange} type="email" />
              </FormControl>
              <Divider />
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  onChange={handleChange}
                  type="password"
                />
              </FormControl>
              <Divider />
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select
                  name="status"
                  placeholder="select status"
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Select>
              </FormControl>

              <Button type="submit" id="modalButton" colorScheme="blue" mr={3}>
                Create
              </Button>
              <Button id="modalButton" onClick={onClose}>
                Cancel
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

// --------------------------------------------------------------------------------------------------------

function UpdateUser({ selected }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [user, setUser] = useState({
    id: selected.id,
    fname: selected.fname,
    lname: selected.lname,
    contact_no: selected.contact_no,
    authority: selected.authority,
    email: selected.email,
    password: selected.password,
    status: selected.status,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const data = user;
    axios
      .post("http://localhost:5000/user-update", data)
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
      <Button onClick={onOpen}>Details</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl isReadOnly>
                <FormLabel>User ID</FormLabel>
                <Input value={user.id} type="text" />
              </FormControl>
              <hr />
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  name="fname"
                  value={user.fname}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <hr />
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  name="lname"
                  value={user.lname}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <hr />
              <FormControl>
                <FormLabel>Contact Number</FormLabel>
                <Input
                  name="contact_no"
                  value={user.contact_no}
                  onChange={handleChange}
                  type="tel"
                  pattern="[0-9]{11}"
                  maxLength={11}
                />
              </FormControl>
              <hr />
              <FormControl isReadOnly>
                <FormLabel>User Role</FormLabel>
                <Input value={user.authority} type="text" />
              </FormControl>
              <hr />
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  type="email"
                />
              </FormControl>
              <hr />
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  type="password"
                />
              </FormControl>
              <hr />
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select
                  name="status"
                  value={user.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Select>
              </FormControl>

              <Button type="submit" colorScheme="blue" mr={3}>
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function AdminAccount() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    // Fetch data from the SQL database
    axios
      .get("http://localhost:5000/user/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="account-management">
      <VStack>
        <HStack
          justify={"space-between"}
          width={"100%"}
          padding={"0px 8px 0px 8px"}
        >
          <Heading size="xl" color={"black"} fontFamily={"rubik"}>
            Account Management
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
            <CreateUser />
          </HStack>
        </HStack>
        <TableContainer
          borderRadius={"10px"}
          width={"100%"}
          overflowY={"auto"}
          boxShadow={"xl"}
          height={"70vh"}
        >
          <Table colorScheme="facebook" variant="simple">
            <Thead>
              <Tr
                position={"sticky"}
                top={0}
                bgColor={"facebook.400"}
                zIndex={"1"}
              >
                <Th color={"white"}>ID</Th>
                <Th color={"white"}>Name</Th>
                <Th color={"white"}>Email</Th>
                <Th color={"white"}>User Role</Th>
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
                    srchVal.id.toString().includes(searchItem) ||
                    srchVal.fname.toLowerCase().includes(searchItem.toLowerCase()) ||
                    srchVal.lname.toLowerCase().includes(searchItem.toLowerCase()) ||
                    srchVal.email.toLowerCase().includes(searchItem.toLowerCase()) ||
                    srchVal.authority.toLowerCase().includes(searchItem.toLowerCase()) ||
                    srchVal.status.toLowerCase().includes(searchItem.toLowerCase())
                  ) {
                    return srchVal;
                  }
                })
                .map((user, index) => (
                  <Tr key={index}>
                    <Td>{user.id}</Td>
                    <Td>{`${user.fname} ${user.lname}`}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.authority}</Td>
                    <Td>{user.status}</Td>
                    <Td>
                      <UpdateUser selected={user} />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </div>
  );
}
