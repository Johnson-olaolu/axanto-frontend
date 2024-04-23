import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import CloudLottie from '../../../../../../assets/lottie/Cloud support & services- 1713104422556.json'
import Link from "@frontity/components/link"
import Loadable from 'react-loadable';
import gsap from 'gsap'


const Loading = () => <div></div>;

const LottieComponent = Loadable({
    loader: () => import('react-lottie'),
    loading: Loading,
});

const CloudService = () => {
    const lottieRef = useRef(null)
    const textRef = useRef(null)
    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(lottieRef.current, {
            scale: 0
        }, { scale: 1, duration: 2 }, 0)
        tl.fromTo(textRef.current, {
            x: "100%",
        }, { x: 0, duration: 2 }, 0)
    }, [])
    return (
        <Box maxW={"1280px"} marginX={"auto"}>
            <Flex height={{ md: "446px", base: "auto" }} alignItems={"center"} justifyContent={"space-between"} direction={{ base: "column", md: "row" }}>
                <Box ref={lottieRef} height={{ base: "200px", md: "400px" }} width={{ base: "330px", md: "660px" }}>
                    <LottieComponent options={{
                        animationData: CloudLottie,
                        loop: true
                    }}

                    // isStopped={this.state.isStopped}
                    // isPaused={this.state.isPaused} 

                    />
                </Box>

                <Flex ref={textRef} direction={"column"} gap={"20px"} textAlign={{ md: "right", base: "center" }} maxW={"548px"}>
                    <Text fontSize={36} fontWeight={"black"} color={"#103166"} letterSpacing={"-5%"} fontFamily={"Satoshi"}>Cloud Support & Services</Text>
                    <Text fontSize={{ base: 20, md: 36 }} fontWeight={"bold"} color={"black"} letterSpacing={"-5%"} fontFamily={"Nexa"}>Sky-High Solutions: Elevate Your Business with Cloud Services!</Text>
                    <Link link="#">
                        <Box display={"inline-block"} paddingX={"28px"} paddingY={"24px"} bg={"#6B97FF"} color={"#030F22"} rounded={"14px"} textAlign={"center"} fontFamily={"Space Grotesk"} fontSize={{ base: "16px", md: "28px" }} letterSpacing={""} fontWeight={"bold"}>Request for our Services</Box>
                    </Link>
                </Flex>

            </Flex>
        </Box>
    )
}

export default CloudService