import React, { useEffect, useRef } from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import DiverseImage from "../../../../assets/images/diverse-image.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const DiverseExpert = () => {
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
        <Box ref={wrapperRef} pt={"80px"} mb={"142px"} overflow={"hidden"}>
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                maxW={"1280px"}
                marginX={"auto"}
            >
                <Flex ref={section1Ref} flexDir={"column"} gap={"40px"} maxW={"600px"}>
                    <Text
                        fontSize={80}
                        fontWeight={"extrabold"}
                        fontFamily={"Nexa"}
                        color={"#103166"}
                        letterSpacing={"-5px"}
                        lineHeight={1.2}
                    >
                        Diverse expertise across industries.
                    </Text>
                    <Text
                        fontSize={24}
                        fontWeight={"medium"}
                        fontFamily={"Satoshi"}
                        color={"#030F22"}
                        letterSpacing={"-5%"}
                    >
                        Since 2003, we have successfully provided services in various
                        sectors including Retail, Education, Not-for-Profit, Government,
                        Banking, Insurance, Manufacturing, Engineering, Logistics, FinTech,
                        Consulting, and Entertainment. With a proven track record of
                        excellence, we tailor innovative solutions to each industry’s unique
                        challenges.
                    </Text>
                    <Link link="#">
                        <Box
                            _hover={{ backgroundColor: "#030F22" }}
                            display={"inline-block"}
                            py={"24px"}
                            px={"32px"}
                            bg={"#2865C8"}
                            color={"#F8FBFF"}
                            fontSize={"24px"}
                            rounded={"12px"}
                            fontWeight={"bold"}
                            fontFamily={"Satoshi"}
                            letterSpacing={"-5%"}
                        >
                            Check out our services
                        </Box>
                    </Link>
                </Flex>
                <Image ref={section2Ref} src={DiverseImage} height={"574px"} />
            </Flex>
        </Box>
    );
};

export default DiverseExpert;
