import { Box, Flex, Text } from '@chakra-ui/react'
import gsap from 'gsap'
import React, { useRef, useState, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const SingleFaq = ({ title, text }) => {

    const [ctx] = useState(gsap.context(() => { }))
    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef(null)
    const childRef = useRef(null)
    const iconRef = useRef(null)

    useEffect(() => {
        ctx.add("openAccordion", () => {
            const tl = gsap.timeline()
            tl.to(wrapperRef.current, {
                paddingRight: "10px",
                paddingBottom: "10px",
                borderRadius: "14px"
            }, 0)

            tl.to(childRef.current, {
                height: "auto"
            }, 0)

            tl.to(iconRef.current, {
                rotate: "180"
            }, 0)
            setIsOpen(true)
        })
        ctx.add("closeAccordion", () => {
            const tl = gsap.timeline()
            tl.to(wrapperRef.current, {
                paddingRight: "0",
                paddingBottom: "0",
                borderRadius: "10px"
            }, 0)

            tl.to(childRef.current, {
                height: "0px"
            }, 0)

            tl.to(iconRef.current, {
                rotate: "0"
            }, 0)
            setIsOpen(false)
        })
    }, [])
    return (
        <Box role='button' onClick={() => {
            isOpen ? ctx.closeAccordion() : ctx.openAccordion()
        }} ref={wrapperRef} rounded={"10px"} shadow={"0px 4px 16px 4px rgba(0, 0, 0, .07)"} backgroundColor={"black"}  >
            <Box padding={"24px"} rounded={"10px"} background={"white"} >
                <Flex pb={"24px"} borderBottom={"1px solid rgba(3, 15, 34, 0.3)"} justifyContent={"space-between"} alignItems={"center"} gap={"8px"}>
                    <Text fontFamily={"Satoshi"} fontWeight={"black"} fontSize={{ base: 18, md: "24px" }} color={"#030F22"} letterSpacing={"-5%"}>
                        {title}
                    </Text>
                    <Flex ref={iconRef} alignItems={"center"} shrink={0} justifyContent={"center"} bg={"#030F22"} height={"36px"} width={"36px"} rounded={"full"}>
                        <FaChevronDown color={"#C1C7F9"} />
                    </Flex>
                </Flex>
                <Box ref={childRef} height={"0px"} overflow={"hidden"}>
                    <Text pt={"24px"} fontFamily={"Satoshi"} fontWeight={"medium"} ffontSize={{ md: "24px" }} color={"#030F22"} letterSpacing={"-5%"}>
                        {text}
                    </Text>
                </Box>

            </Box>
        </Box>
    )
}

export default SingleFaq