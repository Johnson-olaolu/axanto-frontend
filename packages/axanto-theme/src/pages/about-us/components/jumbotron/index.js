import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import JumbotronBg from '../../../../assets/images/about-us-bg.png'

const Jumbotron = () => {
    return (
        <Box height={"auto"} backgroundImage={`url(${JumbotronBg})`} bgSize={"cover"} px={"16px"}>
            <Box height={{ md: "140px" }}></Box>
            <Box maxW={"1280px"} marginX={"auto"} position={"relative"} py={{ base: "100px" }} textAlign={"center"}>
                <Text as={"h2"} lineHeight={1.2} textAlign={"center"} fontSize={{ base: 48, md: "80px" }} fontWeight={"extrabold"} fontFamily={"Nexa"} color={"#C1C7F9"} letterSpacing={{ md: "-5px" }}>Cybersecurity and IT Infrastructure Solutions  <Text as={"span"} color={"#6B97FF"}>since 2003</Text> </Text>
                <Text mt={"32px"} as={"h4"} textAlign={"center"} fontSize={{ base: 24, md: "32px" }} fontWeight={"medium"} fontFamily={"Satoshi"} color={"white"} letterSpacing={{ md: "-1px" }}>We Identify, Acquire, Build, Secure, Manage and Transform <br /> systems for our customers.</Text>
            </Box>
        </Box>
    )
}

export default Jumbotron