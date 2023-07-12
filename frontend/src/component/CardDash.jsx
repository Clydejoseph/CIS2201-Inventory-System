import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'
import React from 'react'

function CardDash({title , count,color}) {
  return (
    <Card zIndex={'-1'} bgColor={color} size={'sm'} width={'100%'} justify={'center'} textAlign={'center'} variant={'outline'}>
          <CardHeader><Heading as={'h4'} size={'sm'}>{title.toUpperCase()}</Heading></CardHeader>
          <CardBody>
            <Heading  as={'h6'} size={'2xs'}>{count}</Heading>
          </CardBody>
        </Card>
  )
}

export default CardDash