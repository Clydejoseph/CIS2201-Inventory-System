import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Heading, VStack, Divider } from '@chakra-ui/react'
import '../../css/navbar-style.css';


import TechAsset from '../../pages/labTech/Tech-Asset';
import { useNavigate } from 'react-router-dom';


export default function TechNav(){
    const navigate = useNavigate();

    const fname = "firstname";
    const lname  = "lastname";

    const initial = fname[0] + lname[0];

    return(
        <div className='sideNav'>
            <VStack>
            <div className="headUser">
                <div className="nameInitial">
                    <Text>{initial.toUpperCase()}</Text>
                </div>
                <div className="profile">
                    <Heading as={'h5'} size={'sm'}>firstname lastname</Heading>
                    <Text align={'center'}>Lab Technician</Text>
                </div>
            </div>
            <Divider />
            <Tabs orientation={'vertical'} variant={'unstyled'}>
                <TabList>
                    {/* <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() =>{navigate('/asset')}}>Dashboard</Tab> */}
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() =>{navigate('/tech-asset')}}> Equipment/Tool</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() =>{navigate('/tech-request')}}>Request Forms</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() =>{navigate('/report')}}>Report/Analytics</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }} onClick={() =>{navigate('/')}}>Log Out</Tab>
                </TabList>
            </Tabs>
            </VStack>
        </div>
    )
}
