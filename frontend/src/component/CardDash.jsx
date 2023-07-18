import { Card, CardHeader, Heading ,HStack ,StackDivider , Text ,Box, CardBody } from '@chakra-ui/react'
import React from 'react'

function CardDash({count , title}) {
  return (
    <Card direction={'row'} size={'lg'} width={'15vw'} variant={'elevated'} _hover={'grey'}>
      <CardBody>
          < HStack divider={<StackDivider bgColor={'black'} width={'4px'}/>} align={'stretch'}>
                        <Heading color={'blackAlpha.900'} size={'sm'} as={'h6'} width={'100%'}>
                            <Text  textTransform={'uppercase'}>{title}</Text>
                        </Heading>
                        <Box>
                            <Text>{count}</Text>
                        </Box>
                    </HStack>
      </CardBody>
    </Card>
  )
}

export default CardDash