import React, { useRef, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import SafeHandsBg from '../../../../assets/images/safe-hands.png'
import LockImage1 from '../../../../assets/images/lock-image1.png'
import LockImage2 from '../../../../assets/images/lock-image2.png'
import gsap from "gsap";

const SafeHands = () => {
    const lockImage1Ref = useRef(null)
    const lockImage2Ref = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({})
        tl.to(lockImage1Ref.current, {
            x: -100,
            y: 100,
            yoyo: true,
            repeat: -1,
            duration: 2,
            rotate: 15,
            ease: "none",
        }, 0)
        tl.to(lockImage2Ref.current, {
            x: 100,
            y: -100,
            yoyo: true,
            rotate: 15,
            repeat: -1,
            duration: 2,
            ease: "none",
        }, 0)
    }, [])
    return (
        <Box bgImage={`url(${SafeHandsBg})`} px={0} bgSize={"cover"} bgPos={"center"} overflow={"hidden"}>
            <Flex maxW={"1280px"} justifyContent={"space-between"} py={"140px"} mx={"auto"}>
                <Box maxW={"600px"} flexShrink={0} zIndex={2}>
                    <Text fontFamily={"Nexa"} fontWeight={"extrabold"} fontSize={"70px"} color={"white"} mb={"40px"} letterSpacing={"-5%"} lineHeight={1.1}>Your Data is in Safe Hands</Text>
                    <Text fontFamily={"Satoshi"} fontWeight={"medium"} fontSize={"24px"} color={"white"} letterSpacing={"-5%"} lineHeight={1.1}>
                        Our proven track record in providing top-tier cyber security
                        solutions and cutting-edge cloud infrastructure is a testament to
                        our expertise and dedication. With a team of seasoned professionals
                        and a relentless pursuit of innovation, we’ve earned the trust of
                        countless clients. When you choose us, you’re choosing a partner who
                        prioritizes your security and success above all else. Experience the
                        difference and join hands with us to fortify your digital future.
                        Your trust is our driving force.
                    </Text>
                </Box>
                <Box flexGrow={1} position={"relative"}>
                    <Image ref={lockImage1Ref} height={"400px"} src={LockImage1} position={"absolute"} left={0} top={20} />
                    <Image ref={lockImage2Ref} height={"400px"} src={LockImage2} position={"absolute"} right={0} top={20} />
                </Box>
            </Flex>
        </Box>
    );
};

export default SafeHands;
