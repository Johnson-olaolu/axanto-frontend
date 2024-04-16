import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import BadgeText from '../.../../../../../../assets/images/Badge-text.svg'
import JumboCartoon from '../.../../../../../../assets/images/jumbo-cartoon.svg'
import gsap from 'gsap'

const JumbotronBadge = () => {
    const textRef = useRef(null)
    const divRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(textRef.current, {
            rotate: 360,
            repeat: -1,
            delay: 0,
            duration: 4,
            ease: "none"
        }, 0)
        // tl.fromTo(divRef.current,
        //     {
        //         y: 10,
        //         repeat: -1,
        //         delay: 0,
        //         yoyo: true,
        //         ease: "none"
        //     },
        //     {
        //         y: -10,
        //         repeat: -1,
        //         delay: 0,
        //         yoyo: true,
        //         duration: 2,
        //         ease: "none"
        //     }, 0
        // )
    }, [])
    return (
        <Box ref={divRef} position={"relative"}>
            <Flex bg={"white"} height={"96px"} width={"96px"} position={"absolute"} left={"50%"} top={"50%"} translateX={"-50%"} translateY={"-50%"} transform={"auto"} rounded={"full"} alignItems={"center"} justifyContent={"center"}>
                <Image src={JumboCartoon} height={"48px"} width={"36px"} />
            </Flex>
            <Image ref={textRef} src={BadgeText} />
        </Box>
    )
}

export default JumbotronBadge