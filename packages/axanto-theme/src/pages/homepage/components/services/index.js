import { Box, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import CloudService from './components/cloud'
import InfrastructureService from './components/infrastructure'
import SecurityService from './components/security'
import ServicesBg from '../../../../assets/images/servicesbg.png'

const Services = () => {
    const [activeService, setActiveService] = useState("")
    useEffect(() => {
        let text = ""
        setInterval(() => {
            if (text === "cloud") {
                setActiveService("infrastructure")
                text = "infrastructure"
            } else if (text === "infrastructure") {
                setActiveService("security")
                text = "security"
            } else {
                setActiveService("cloud")
                text = "cloud"
            }
        }, 5000)
    }, [])

    return (
        <Box _before={{
            background: `rgba(256,256,256, 0.1) url(${ServicesBg}) `,
            content: '""',
            position: "absolute",
            display: "block",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.2,
            backgroundPosition: "center",
            backgroundSize: "100% auto",
            zIndex: -1

        }} py={{ base: "80px", md: "128px" }} position={"relative"} overflow={"hidden"} px={{ base: "16px", md: "0px" }} >
            <Text textAlign={"center"} fontFamily={"Nexa"} fontWeight={"extrabold"} fontSize={{ base: "48px", md: "80px" }} mb={"64px"}>Services</Text>
            <Box>
                {activeService === "cloud" ? <CloudService /> : activeService === "infrastructure" ? <InfrastructureService /> : <SecurityService />}
            </Box>
        </Box >
    )
}

export default Services