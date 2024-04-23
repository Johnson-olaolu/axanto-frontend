import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import MiningImage from '../../../../assets/images/mining_15160661 1.svg'
import SharingImage from '../../../../assets/images/sharing_2399824 1.svg'
import RepairImage from '../../../../assets/images/repair_4862209 1.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ServiceProblems = () => {

    const wrapperRef = useRef(null)
    const item1Ref = useRef(null)
    const item2Ref = useRef(null)
    const item3Ref = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "center bottom",
            }
        })

        tl.fromTo(item1Ref.current, {
            x: "-150%"
        }, { x: 0, duration: 1.5 }, 0)
        tl.fromTo(item3Ref.current, {
            x: "150%"
        }, { x: 0, duration: 1.5 }, 0)
        tl.fromTo(item2Ref.current, {
            scale: 0
        }, { scale: 1, duration: 1.5 }, 0)
    }, [])
    return (
        <Box overflow={"hidden"} ref={wrapperRef} py={"100px"} px={"16px"}>
            <Grid maxW={"1280px"} mx={"auto"} gridTemplateColumns={{ md: "repeat(3, 1fr)" }} gap={"48px"}>
                <Flex ref={item1Ref} height={"420px"} direction={"column"} p={"40px"} border={"1px solid black"} rounded={"24px"} alignItems={"center"} textAlign={"center"} >
                    <Image src={MiningImage} height={"100px"} width={"100px"} mb={"48px"} />
                    <Text lineHeight={1.2} color={"black"} fontFamily={"Satoshi"} fontSize={"32px"} fontWeight={"black"} letterSpacing={"-2px"}>Problem Identification</Text>
                    <Text mt={"auto"} color={"black"} fontFamily={"Satoshi"} fontSize={"19px"} fontWeight={"medium"} letterSpacing={"-1px"}>
                        Meticulously identify challenges, understand unique requirements, pinpoint exact issues for addressing.
                    </Text>
                </Flex>
                <Flex ref={item2Ref} direction={"column"} p={"40px"} border={"1px solid black"} rounded={"24px"} alignItems={"center"} textAlign={"center"} >
                    <Image src={SharingImage} height={"100px"} width={"100px"} mb={"48px"} />
                    <Text lineHeight={1.2} color={"black"} fontFamily={"Satoshi"} fontSize={"32px"} fontWeight={"black"} letterSpacing={"-2px"}>Solution Development</Text>
                    <Text mt={"16px"} color={"black"} fontFamily={"Satoshi"} fontSize={"19px"} fontWeight={"medium"} letterSpacing={"-1px"}>
                        Understanding challenges, crafting tailored solutions, drawing on expertise to directly address problems.
                    </Text>
                </Flex>
                <Flex ref={item3Ref} direction={"column"} p={"40px"} border={"1px solid black"} rounded={"24px"} alignItems={"center"} textAlign={"center"} >
                    <Image src={RepairImage} height={"100px"} width={"100px"} mb={"48px"} />
                    <Text lineHeight={1.2} color={"black"} fontFamily={"Satoshi"} fontSize={"32px"} fontWeight={"black"} letterSpacing={"-2px"}>Implementation and Monitoring</Text>
                    <Text mt={"16px"} color={"black"} fontFamily={"Satoshi"} fontSize={"19px"} fontWeight={"medium"} letterSpacing={"-1px"}>
                        Continuous monitoring ensures lasting, adaptable solutions for sustained positive impact on operations.
                    </Text>
                </Flex>
            </Grid>
        </Box>
    )
}

export default ServiceProblems