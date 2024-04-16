import React, { useEffect, useRef } from 'react'
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import EmpowerImage from '../../../../../assets/images/empower-image.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const WeEmpower = () => {
    const wrapperRef = useRef(null)
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top center"
            }
        })

        tl.fromTo(section1Ref.current, {
            x: "-120%"
        }, { x: 0 }, 0)
        tl.fromTo(section2Ref.current, {
            x: "120%"
        }, { x: 0 }, 0)

    }, [])

    return (
        <Box ref={wrapperRef} pt={"172px"} overflow={"hidden"}>
            <Flex justifyContent={"space-between"} alignItems={"center"} maxW={"1280px"} marginX={"auto"}>
                <Image ref={section1Ref} src={EmpowerImage} width={"640px"} />

                <Flex ref={section2Ref} flexDir={"column"} gap={"40px"} maxW={"600px"} textAlign={"right"} alignItems={"end"}>
                    <Text fontSize={48} fontWeight={"extrabold"} fontFamily={"Nexa"} color={"#2865C8"} letterSpacing={"-5%"} lineHeight={1.2}>We Empower Growth Worldwide</Text>
                    <Text fontSize={24} fontWeight={"medium"} fontFamily={"Satoshi"} color={"#030F22"} letterSpacing={"-5%"}>Pioneering global industry shifts with visionary solutions, safeguarding businesses, and transforming digital landscapes with innovation.</Text>
                    <Link link="#">
                        <Box _hover={{ backgroundColor: "#030F22" }} display={"inline-block"} py={"24px"} px={"32px"} bg={"#2865C8"} color={"#F8FBFF"} fontSize={"24px"} rounded={"12px"} fontWeight={"bold"} fontFamily={"Satoshi"} letterSpacing={"-5%"}>Learn more about us</Box>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default WeEmpower