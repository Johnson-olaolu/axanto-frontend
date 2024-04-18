import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import JumbotronBg from '../../../../assets/images/services-page-bg.png'

const Jumbotron = () => {
    return (
        <Box height={"auto"} backgroundImage={`url(${JumbotronBg})`} bgSize={"cover"}>
            <Box height={"140px"}></Box>
            <Box maxW={"1280px"} marginX={"auto"} position={"relative"} py={"100px"} textAlign={"center"}>
                <Text as={"h2"} lineHeight={1.2} textAlign={"center"} fontSize={"80px"} fontWeight={"extrabold"} fontFamily={"Nexa"} color={"#C1C7F9"} letterSpacing={"-5px"}>Tailored & Proactive <br /> Excellence </Text>
                <Text mt={"32px"} as={"h4"} textAlign={"center"} fontSize={"32px"} fontWeight={"medium"} fontFamily={"Satoshi"} color={"white"} letterSpacing={"-1px"}>
                    Our commitment to innovation and adaptability enables us to stay at the forefront of the ever-evolving cybersecurity landscape, ensuring our clients stay one step ahead in safeguarding their digital assets. Together, we forge a secure and resilient future in the face of emerging threats, building trust and confidence in our services.
                </Text>
            </Box>
        </Box>
    )
}

export default Jumbotron