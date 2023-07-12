import React from 'react'

import '../css/dashboardcss.css'

import {  Card, CardHeader, Divider, HStack,VStack, Heading, Stack, CardBody, StackDivider  } from '@chakra-ui/react'
import CardDash from '../component/CardDash'
import { Equipments } from '../dataExport/EquipmentCounts'
import BarChart from '../component/charts/BarChart'
import DashComponent from '../component/DashComponent'

// function Dashboard() {

  
//   // console.log(equipmentCount);
  
//   return (
//     <div className='dshbrd'>
//       <VStack spacing={'40px'}>
//         <DashComponent />
//         <Divider width={'90%'} borderColor={'black'}/>
//         <Stack width={'100%'} direction={'column'}>
//           <Card variant={'elevated'} width={'100%'}>
//             <CardHeader>
//               <Heading as={'h4'} fontSize={'24px'} paddingLeft={'5%'}>Report</Heading>
//             </CardHeader>
//             <Divider width={'90%'} alignSelf={'center'}/>
//             <CardBody>
//               <BarChart></BarChart>
//             </CardBody>
//           </Card>
//           <Card variant={'elevated'}  width={'100%'}>
//             <CardHeader>
//               <Heading paddingLeft={'5%'}>Room</Heading>
//             </CardHeader>
//             <Divider width={'90%'} alignSelf={'center'}/>
//             <CardBody>
//               XXXXX
//             </CardBody>
//           </Card>
//         </Stack>
//       </VStack>
//     </div>
//   )
// }

// export default Dashboard