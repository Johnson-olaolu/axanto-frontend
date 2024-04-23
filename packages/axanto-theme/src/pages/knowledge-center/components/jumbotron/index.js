import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import JumbotronBg from "../../../../assets/images/knowledge-page-bg.png";
import { Global, css } from "frontity";
import gsap from "gsap";


const Jumbotron = () => {
    const [count, setCount] = useState(1)
    const textRef = useRef(null)
    const wrapperRef = useRef(null)
    useEffect(() => {
        const newCount = wrapperRef.current.offsetWidth / textRef.current.offsetWidth
        setCount(Math.ceil(newCount))

        let row_width = wrapperRef.current.getBoundingClientRect().width;
        let row_item_width = textRef.current.getBoundingClientRect().width;
        let initial_offset = ((1 * row_item_width) / row_width) * 100 * -1;
        let x_translation = initial_offset * -1;

        gsap.set(wrapperRef.current, {
            xPercent: `${initial_offset}`
        });

        // let duration = 5 * (i + 1);

        var tl = gsap.timeline();

        tl.to(wrapperRef.current, {
            ease: "none",
            duration: 5,
            xPercent: 0,
            repeat: -1
        });
    }, [])
    return (
        <>
            <Box
                height={"auto"}
                backgroundImage={`url(${JumbotronBg})`}
                bgSize={"cover"}
                py={"100px"}
                px={"16px"}
            >
                <Box height={{ md: "140px" }}></Box>
                <Box
                    maxW={"1280px"}
                    marginX={"auto"}
                    position={"relative"}

                    textAlign={"center"}
                >
                    <Text
                        as={"h2"}
                        lineHeight={1.2}
                        textAlign={"center"}
                        fontSize={{ base: 48, md: "80px" }}
                        fontWeight={"extrabold"}
                        fontFamily={"Nexa"}
                        color={"#C1C7F9"}
                        letterSpacing={{ md: "-5px" }}
                    >
                        Cybersecurity and <br /> Infrastructure Blogs{" "}
                    </Text>
                    <Text
                        mt={"32px"}
                        as={"h4"}
                        textAlign={"center"}
                        fontSize={{ base: "24px", md: "32px" }}
                        fontWeight={"medium"}
                        fontFamily={"Satoshi"}
                        color={"white"}
                        letterSpacing={{ md: "-1px" }}
                    >
                        Explore the latest insights, strategies, and cutting-edge technologies to fortify your cyber security infrastructure.
                    </Text>
                </Box>
                <Box mt={"60px"} overflow={"hidden"}>
                    <Flex ref={wrapperRef} gap={""}>
                        {Array.from(Array(count).keys()).map((id) => (
                            <Text px={"5px"} flexShrink={0} key={id} ref={textRef} className="text-outline" fontSize={"80px"} fontWeight={"black"} color={"transparent"} fontFamily={"Nexa"} letterSpacing={"-2px"} >Knowledge portal.</Text>
                        ))}
                    </Flex>
                </Box>
            </Box>
        </>

    );
};

export default Jumbotron;
