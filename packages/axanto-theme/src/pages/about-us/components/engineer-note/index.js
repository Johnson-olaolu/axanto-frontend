import React, { useEffect, useRef } from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import DiverseImage from "../../../../assets/images/sustainability-image.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const EngineerNote = () => {
    const wrapperRef = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top center",
            },
        });

        tl.fromTo(
            section1Ref.current,
            {
                x: "-120%",
            },
            { x: 0 },
            0
        );
        tl.fromTo(
            section2Ref.current,
            {
                x: "120%",
            },
            { x: 0 },
            0
        );
    }, []);

    return (
        <Box px={"16px"}>
            <Text
                fontWeight={"extrabold"}
                fontSize={{ base: 48, md: 80 }}
                fontFamily={"Nexa"}
                textAlign={"center"}
                lineHeight={1.1}
                letterSpacing={{ md: "-5px" }}
                color={"#103166"}
            >
                A note from our Chief <br /> Sustainability Officer
            </Text>

            <Box ref={wrapperRef} pt={"80px"} mb={"142px"} overflow={"hidden"}>
                <Flex
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    maxW={"1280px"}
                    marginX={"auto"}
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: "20px", md: 0 }}
                >
                    <Image ref={section1Ref} src={DiverseImage} height={{ base: "auto", md: "600px" }} width={{ base: "100%", md: "auto" }} />
                    <Flex
                        ref={section2Ref}
                        flexDir={"column"}
                        gap={{ base: "16px", md: "40px" }}
                        maxW={"600px"}
                    >
                        <Box mb={{ base: "16px", md: "40px" }}>
                            <Text
                                fontSize={{ sm: 20, md: 28 }}
                                fontWeight={"medium"}
                                fontFamily={"Satoshi"}
                                color={"black"}
                                letterSpacing={{ md: "-2px" }}
                            >
                                Axanto Group Inc. is committed to corporate social
                                responsibility, environmental sustainability, and a responsible
                                supply chain, all aimed at protecting our planet and
                                contributing to societal well-being with focus on:
                            </Text>
                            <Box mt={"20px"} fontSize={{ sm: 20, md: 28 }}
                                fontWeight={"medium"}
                                fontFamily={"Satoshi"}
                                color={"black"}
                                letterSpacing={{ md: "-2px" }} paddingLeft={"20px"} as="ul" listStyleType={"disc"}>
                                <Box as="li">Recycling</Box>
                                <Box as="li">Pollution Prevention </Box>
                                <Box as="li"> Supply Chain Sustainability </Box>
                                <Box as="li">Transparency and Continuous Improvement</Box>
                            </Box>
                        </Box>

                        <Link link="#">
                            <Box
                                _hover={{ backgroundColor: "#030F22" }}
                                display={"inline-block"}
                                py={"24px"}
                                px={"32px"}
                                bg={"#2865C8"}
                                color={"#F8FBFF"}
                                fontSize={{ md: "24px" }}
                                rounded={"12px"}
                                fontWeight={"bold"}
                                fontFamily={"Satoshi"}
                                letterSpacing={"-5%"}
                            >
                                Learn more about us
                            </Box>
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default EngineerNote;
