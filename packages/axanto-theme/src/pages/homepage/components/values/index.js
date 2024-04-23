import { Stack } from '@chakra-ui/react'
import React from 'react'
import OurComprehension from './components/OurComprehension'
import WeEmpower from './components/WeEmpower'

const Values = () => {
    return (
        <Stack gap={"40px"} bg={"white"} mb={{ base: "80px", md: "200px" }} >
            <OurComprehension />
            <WeEmpower />
        </Stack>
    )
}

export default Values