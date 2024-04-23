import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import JumbotronBg from '../../../../assets/images/jumbotron-bg.png'
import JumbotronText from './components/JumbotronText'
import JumbotronImage from './components/JumbotronImage'
import JumbotronBadge from './components/JumbotronBadge'

const Jumbotron = () => {
    return (
        <Box height={"1000px"} backgroundImage={`url(${JumbotronBg})`} bgSize={"cover"} px={"16px"}>
            <Box height={{ base: "0px", md: "140px" }}></Box>
            <Box maxW={"1280px"} marginX={"auto"} position={"relative"}>
                <Flex justifyContent={"space-between"} flexDirection={{ base: "column", md: "row" }}>
                    <JumbotronText />
                    <JumbotronImage />
                </Flex>
                <Box position={"absolute"} left={0} bottom={"40px"}>
                    <JumbotronBadge />
                </Box>

            </Box>

        </Box>
    )
}

export default Jumbotron