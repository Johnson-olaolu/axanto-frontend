import { Box, Flex, Text } from '@chakra-ui/react'
import Link from '@frontity/components/link'
import React from 'react'

const ContactBanner = () => {
    return (
        <Box bg={"#030F22"}>
            <Flex maxW={"1280px"} mx={"auto"} py={"88px"} pb={"200px"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Text fontFamily={"Nexa"} fontWeight={"extrabold"} fontSize={"80px"} color={"white"} lineHeight={1.2} letterSpacing={"-5%"}>Ready for our <br /> solution?</Text>
                    <Text fontFamily={"Satoshi"} fontSize={"32px"} fontWeight={"medium"} color={"#C1C7F9"} letterSpacing={"-5%"}>Discover a Personalized Solution for Your Needs!</Text>
                </Box>
                <Link link="#">
                    <Box _hover={{ scale: 1.2, transitionDuration: "3s", transition: "all" }} display={"inline-block"} py={"24px"} px={"32px"} bg={"white"} transform={"auto"} rounded={"12px"} fontSize={"28px"} fontWeight={"Bold"} color={"#030F22"} fontFamily={"Satoshi"}>Contact us today</Box>
                </Link>
            </Flex>
        </Box>
    )
}

export default ContactBanner