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
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "center center",
            }
        });
    }, [])
    return (
        <Box ref={wrapperRef} py={{ base: "40px", md: "100px" }} mt={{ base: "20px", md: "80px" }} px={"16px"}>
            <Flex maxW={"1280px"} marginX={"auto"} justifyContent={"space-between"} direction={{ base: "column", md: "row" }} textAlign={"center"} gap={{ base: "40px", md: 0 }}>
                <Flex direction={"column"} gap={{ base: "16px", md: "36px" }} align={"center"}>
                    <Text lineHeight={1} fontFamily={"Nexa"} fontSize={{ base: "24px", md: "36px" }} color={"black"} fontWeight={"extrabold"} letterSpacing={{ md: "-2px" }}>YEARS OF EXPERIENCE</Text>
                    <Text lineHeight={1} fontFamily={"Satoshi"} fontSize={{ md: "80px", base: "48px" }} color={"#103166"} fontWeight={"black"} letterSpacing={{ md: "-5px" }}> <span className='data-counter'>20</span>+</Text>
                </Flex>

                <Flex direction={"column"} gap={{ base: "16px", md: "36px" }} align={"center"}>
                    <Text lineHeight={1} fontFamily={"Nexa"} fontSize={{ base: "24px", md: "36px" }} color={"black"} fontWeight={"extrabold"} letterSpacing={{ md: "-2px" }}>CERTIFIED SPECIALIZATIONS</Text>
                    <Text lineHeight={1} fontFamily={"Satoshi"} fontSize={{ md: "80px", base: "48px" }} color={"#103166"} fontWeight={"black"} letterSpacing={{ md: "-5px" }}><span className='data-counter'>10</span> +</Text>
                </Flex>

                <Flex direction={"column"} gap={{ base: "16px", md: "36px" }} align={"center"}>
                    <Text lineHeight={1} fontFamily={"Nexa"} fontSize={{ base: "24px", md: "36px" }} color={"black"} fontWeight={"extrabold"} letterSpacing={{ md: "-2px" }}>SATISFACTION RATE</Text>
                    <Text lineHeight={1} fontFamily={"Satoshi"} fontSize={{ md: "80px", base: "48px" }} color={"#103166"} fontWeight={"black"} letterSpacing={{ md: "-5px" }}><span className='data-counter'>100</span>%</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default StatsCountDown