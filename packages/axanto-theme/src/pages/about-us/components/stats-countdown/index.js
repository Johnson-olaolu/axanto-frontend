import React, { useEffect, useState, useRef } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import gsap, { Power1 } from 'gsap'

const StatsCountDown = () => {
    const wrapperRef = useRef()

    useEffect(() => {
        const items = document.querySelectorAll(".data-counter");

        gsap.from(items, {
            textContent: 0,
            duration: 2,
            ease: Power1.easeIn,
            snap: { textContent: 1 },
            // stagger: 1,
            // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            scrollTrigger: wrapperRef.current
        });
    }, [])
    return (
        <Box ref={wrapperRef} py={"100px"} mt={"80px"}>
            <Flex maxW={"1280px"} marginX={"auto"} justifyContent={"space-between"}>
                <Flex direction={"column"} gap={"36px"} align={"center"}>
                    <Text lineHeight={1} fontFamily={"Nexa"} fontSize={"36px"} color={"black"} fontWeight={"extrabold"} letterSpacing={"-2px"}>YEARS OF EXPERIENCE</Text>
                    <Text lineHeight={1} fontFamily={"Satoshi"} fontSize={"80px"} color={"#103166"} fontWeight={"black"} letterSpacing={"-5px"}> <span className='data-counter'>20</span>+</Text>
                </Flex>

                <Flex direction={"column"} gap={"36px"} align={"center"}>
                    <Text lineHeight={1} fontFamily={"Nexa"} fontSize={"36px"} color={"black"} fontWeight={"extrabold"} letterSpacing={"-2px"}>CERTIFIED SPECIALIZATIONS</Text>
                    <Text lineHeight={1} fontFamily={"Satoshi"} fontSize={"80px"} color={"#103166"} fontWeight={"black"} letterSpacing={"-5px"}><span className='data-counter'>10</span> +</Text>
                </Flex>

                <Flex direction={"column"} gap={"36px"} align={"center"}>
                    <Text lineHeight={1} fontFamily={"Nexa"} fontSize={"36px"} color={"black"} fontWeight={"extrabold"} letterSpacing={"-2px"}>SATISFACTION RATE</Text>
                    <Text lineHeight={1} fontFamily={"Satoshi"} fontSize={"80px"} color={"#103166"} fontWeight={"black"} letterSpacing={"-5px"}><span className='data-counter'>100</span>%</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default StatsCountDown