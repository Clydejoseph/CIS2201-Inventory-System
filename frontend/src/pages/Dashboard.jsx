import React, { useState } from 'react'

import '../css/dashboardcss.css'

import {  Card, CardHeader, Divider, HStack,VStack, Heading, Stack, CardBody, StackDivider, Text, Box  } from '@chakra-ui/react'
import CardDash from '../component/CardDash'
import { Equipments } from '../dataExport/EquipmentCounts'
import BarChart from '../component/charts/BarChart'
import DashComponent from '../component/DashComponent'
import { useEffect } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

function Dashboard() {


    
    const activeAcc = sessionStorage.getItem('account') == null ? null : JSON.parse(sessionStorage.getItem('account'));
    const [item , setItem] = useState([]);

    const [barData , setBar] = useState([]);
    
    console.log(activeAcc);

    useEffect(() =>{
        axios.get('http://localhost:5000/itemcount').then((res) =>{
            setItem(res.data);
        }).catch((error) =>{
            console.log(error);
        })
    },[])

    useEffect(() =>{
        axios.get('http://localhost:5000/barChartData').then((res)=>{
            setBar(res.data);
        }).catch((error) =>{
            console.log(error);
        })
    })
    

  const dash = item.map((elem)=>{return (
    <Box key={elem.id}>
        <CardDash title={elem.name} count ={elem.count}/>
    </Box>
   )})

  return (
    <VStack align={'center'} padding={'0.5rem'}>
        <HStack flexWrap={'wrap'}>
           {dash}
           <CardDash title={'request'} count={5}/>
        </HStack>
        
        <HStack align={'stretch'}>
        <Card width={'50vw'}>
            <BarChart />
        </Card>
        </HStack>
    </VStack>
  )
}

export default Dashboard