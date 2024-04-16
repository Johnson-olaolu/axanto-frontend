import { Box } from '@chakra-ui/react'
import React from 'react'
import OurComprehension from './components/OurComprehension'
import WeEmpower from './components/WeEmpower'

const Values = () => {
    return (
        <Box bg={"white"} mb={"200px"}>
            <OurComprehension />
            <WeEmpower />
        </Box>
    )
}

export default Values