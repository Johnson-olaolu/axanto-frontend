import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CloudServices from './components/CloudServices'
import SecurityServices from './components/SecurityServices'
import InfrastructureServices from './components/InfrastructureServices'

const OurServices2 = () => {
    const [activeService, setActiveService] = useState("cloud")
    return (
        <Box overflow={"hidden"}>
            <Flex maxW={"1280px"} marginX={"auto"} alignItems={"start"}>
                <Box py={"92px"} w={"328px"} borderRight={"1px solid rgba(0,0,0, 0.1)"} flexShrink={0}
                // {/* shadow={"0px 0px 4px 0px rgba(0,0,0,0.06)" } */}
                >
                    <Text color={"#2865C8"} fontFamily={"Nexa"} fontSize={"28px"} fontWeight={"extrabold"}>Our services</Text>
                    <Flex mt={"28px"} direction={"column"}>
                        <Flex _before={{
                            content: '""',
                            height: "100%",
                            width: "200%",
                            position: "absolute",
                            top: 0,
                            right: "-5px",
                            backgroundColor: activeService == "cloud" ? "#2865C8" : "",
                            zIndex: 1,
                            borderRightRadius: "5px"
                        }} onClick={() => setActiveService("cloud")} position={"relative"} role='button' direction={"column"} height={"140px"} justifyContent={"center"} gap={"4px"} color={activeService == "cloud" ? "white" : "black"}>
                            <Text zIndex={2} fontFamily={"Nexa"} fontSize={"28px"} fontWeight={"extrabold"} lineHeight={1.2} >Cloud Services</Text>
                            <Text zIndex={2} fontFamily={"Satoshi"} fontSize={"18px"} fontWeight={"medium"} >Empowering Your Business with Cutting-Edge Solutions</Text>
                        </Flex>
                        <Flex _before={{
                            content: '""',
                            height: "100%",
                            width: "200%",
                            position: "absolute",
                            top: 0,
                            right: "-5px",
                            backgroundColor: activeService == "security" ? "#2865C8" : "",
                            zIndex: 1,
                            borderRightRadius: "5px"
                        }} onClick={() => setActiveService("security")} position={"relative"} role='button' direction={"column"} height={"140px"} justifyContent={"center"} gap={"4px"} color={activeService == "security" ? "white" : "black"}>
                            <Text zIndex={2} fontFamily={"Nexa"} fontSize={"28px"} fontWeight={"extrabold"} lineHeight={1.2} >Security Services</Text>
                            <Text zIndex={2} fontFamily={"Satoshi"} fontSize={"18px"} fontWeight={"medium"} >Safeguarding Your Digital Realm</Text>
                        </Flex>
                        <Flex _before={{
                            content: '""',
                            height: "100%",
                            width: "200%",
                            position: "absolute",
                            top: 0,
                            right: "-5px",
                            backgroundColor: activeService == "infrastructure" ? "#2865C8" : "",
                            zIndex: 1,
                            borderRightRadius: "5px"
                        }} onClick={() => setActiveService("infrastructure")} position={"relative"} role='button' direction={"column"} height={"140px"} justifyContent={"center"} gap={"4px"} color={activeService == "infrastructure" ? "white" : "black"}>
                            <Text zIndex={2} fontFamily={"Nexa"} fontSize={"28px"} fontWeight={"extrabold"} lineHeight={1.2} >Infrastructure Services</Text>
                            <Text zIndex={2} fontFamily={"Satoshi"} fontSize={"18px"} fontWeight={"medium"} >Building the Foundation for Business Excellence</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box flexGrow={1} minH={"1024px"} p={"72px"} pt={"152px"}>
                    {activeService === "cloud" ? <CloudServices /> : activeService == "security" ? <SecurityServices /> : <InfrastructureServices />}
                </Box>
            </Flex>
        </Box>
    )
}

export default OurServices2