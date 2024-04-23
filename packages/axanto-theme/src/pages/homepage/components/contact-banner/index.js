import { Box, Flex, Text } from '@chakra-ui/react'
import Link from '@frontity/components/link'
import React from 'react'

const ContactBanner = () => {
    return (
        <Box bg={"#030F22"} px={"16px"}>
            <Flex maxW={"1280px"} mx={"auto"} py={{ base: "48px", md: "88px" }} pb={{ base: "48px", md: "200px" }} justifyContent={"space-between"} alignItems={"center"} direction={{ base: "column", md: "row" }} rowGap={"20px"}>
                <Box textAlign={{ base: "center", md: "left" }}>
                    <Text fontFamily={"Nexa"} fontWeight={"extrabold"} fontSize={{ base: 48, md: "80px" }} color={"white"} lineHeight={1.2} letterSpacing={"-5%"}>Ready for our <br /> solution?</Text>
                    <Text fontFamily={"Satoshi"} fontSize={{ base: 24, md: "32px" }} fontWeight={"medium"} color={"#C1C7F9"} letterSpacing={"-5%"}>Discover a Personalized Solution for Your Needs!</Text>
                </Box>
                <Link link="#">
                    <Box _hover={{ scale: 1.2, transitionDuration: "3s", transition: "all" }} display={"inline-block"} py={"24px"} px={"32px"} bg={"white"} transform={"auto"} rounded={"12px"} fontSize={{ md: "28px" }} fontWeight={"Bold"} color={"#030F22"} fontFamily={"Satoshi"}>Contact us today</Box>
                </Link>
            </Flex>
        </Box>
    )
}

export default ContactBanner