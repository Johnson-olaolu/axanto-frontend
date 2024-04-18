import React from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "@frontity/components/link";
import OurServices1 from '../../../../assets/images/our-services1.png'
import OurServices2 from '../../../../assets/images/our-services2.png'
import OurServices3 from '../../../../assets/images/our-services3.png'
const OurServices = () => {
    return (
        <Box>
            <Box textAlign={"center"}>
                <Text
                    fontWeight={"extrabold"}
                    fontSize={80}
                    fontFamily={"Nexa"}
                    textAlign={"center"}
                    lineHeight={1.1}
                    letterSpacing={"-5px"}
                    color={"#103166"}
                >
                    Our Services
                </Text>
                <Text
                    fontSize={28}
                    fontWeight={"medium"}
                    fontFamily={"Satoshi"}
                    color={"black"}
                    letterSpacing={"-2px"}
                    maxW={"1120px"}
                    mx={"auto"}
                    textAlign={"center"}
                    marginBottom={"24px"}
                >
                    From safeguarding customer experiences in retail to empowering the
                    next generation in education, driving societal impact for
                    not-for-profits, ensuring security and compliance in banking and
                    insurance, securing processes in manufacturing and logistics, and
                    enabling regulatory compliance in FinTech, Our team is well-equipped
                    to deliver exceptional results across diverse domains.
                </Text>
                <Link link="#">
                    <Box
                        _hover={{ backgroundColor: "#030F22" }}
                        display={"inline-block"}
                        py={"24px"}
                        px={"32px"}
                        bg={"#2865C8"}
                        color={"#F8FBFF"}
                        fontSize={"24px"}
                        rounded={"12px"}
                        fontWeight={"bold"}
                        fontFamily={"Satoshi"}
                        letterSpacing={"-5%"}
                    >
                        Learn more about us
                    </Box>
                </Link>
            </Box>
            <Grid mt={"100px"} maxW={"1280px"} mx={"auto"} templateColumns='repeat(3, 1fr)' gap={"24px"}>
                <Box rounded={"28px"} border={"0.5px solid black"}>
                    <Image src={OurServices1} height={"204px"} width={"full"} rounded={"28px"} />
                    <Box py={"40px"} px={"28px"}>
                        <Text letterSpacing={"-2px"} lineHeight={1.2} fontSize={"34px"} fontWeight={"extrabold"} fontFamily={"Nexa"}>Cloud Security Access Broker Implementation</Text>
                        <Text mt={"12px"} fontWeight={"bold"} fontFamily={"Satoshi"} fontSize={"20px"}>Architected, implemented and operationalised CASB solution for several financial organizations.</Text>
                    </Box>
                </Box>
                <Box rounded={"28px"} border={"0.5px solid black"}>
                    <Image src={OurServices2} height={"204px"} width={"full"} rounded={"28px"} />
                    <Box py={"40px"} px={"28px"}>
                        <Text letterSpacing={"-2px"} lineHeight={1.2} fontSize={"34px"} fontWeight={"extrabold"} fontFamily={"Nexa"}>Cloud Security Access Broker Implementation</Text>
                        <Text mt={"12px"} fontWeight={"bold"} fontFamily={"Satoshi"} fontSize={"20px"}>Architected, implemented and operationalised CASB solution for several financial organizations.</Text>
                    </Box>
                </Box>
                <Box rounded={"28px"} border={"0.5px solid black"}>
                    <Image src={OurServices3} height={"204px"} width={"full"} rounded={"28px"} />
                    <Box py={"40px"} px={"28px"}>
                        <Text letterSpacing={"-2px"} lineHeight={1.2} fontSize={"34px"} fontWeight={"extrabold"} fontFamily={"Nexa"}>Cloud Security Access Broker Implementation</Text>
                        <Text mt={"12px"} fontWeight={"bold"} fontFamily={"Satoshi"} fontSize={"20px"}>Architected, implemented and operationalised CASB solution for several financial organizations.</Text>
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
};

export default OurServices;
