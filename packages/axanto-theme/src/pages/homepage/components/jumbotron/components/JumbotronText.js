import { Box, Text } from '@chakra-ui/react'
import gsap from 'gsap'
import React, { useRef, useEffect } from 'react'

const JumbotronText = () => {
    const typingRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(typingRef.current, {
            width: 0
        }, {
            width: "10.32em",
            ease: "steps(21)",
            duration: 4,
            yoyo: true,
            repeat: -1
        }, 0)

        tl.fromTo(typingRef.current, {
            borderRightColor: "rgba(255,255,255,0.75)"
        }, {
            borderRightColor: "rgba(255,255,255,0)",
            repeat: -1,
            duration: 0.5,
            ease: "steps(21)",
        }, 0)


    }, [])
    return (
        <Box maxWidth={{ base: "100%", md: "760px" }} mt={{ base: "48px", md: "140px" }}>
            <Text fontFamily={"Space Grotesk"} fontSize={{ base: "32px", md: "64px" }} fontWeight={"bold"} letterSpacing={"-5%"} color={"white"} lineHeight={"1.4"}>
                Cybersecurity, Information Technology, & <Text ref={typingRef} boxSizing='content-box' lineHeight={"0.75"} as={"span"} display={{ base: "block", md: "inline-block" }} whiteSpace={"nowrap"} overflow={"hidden"} width={"10.32em"} borderRight={"2px solid rgba(255,255,255,.75)"}>
                    Professional Services</Text>
            </Text>
            <Text mt={"20px"} fontWeight={"bold"} fontSize={{ base: "16px", md: "20px" }} fontFamily={"Satoshi"} color={"white"} letterSpacing={"-5%"} lineHeight={1.4}>
                Market leaders in Cybersecurity and Infrastructure services by helping our customers reduce risk, design secure systems, implement solutions, and maintain consistent operational and delivery excellence.
            </Text>
        </Box>
    )
}

export default JumbotronText