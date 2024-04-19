import React, { useEffect, useRef } from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import MultisectorImage from "../../../../assets/images/multisector-image.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MultiSectorImages from "./components/MultiSectorImages";

const MultiSectorExpertise = () => {
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
    <Box marginBottom={"256px"}>
      <Box ref={wrapperRef} pt={"80px"} mb={"142px"} overflow={"hidden"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          maxW={"1280px"}
          marginX={"auto"}
        >
          <Flex
            ref={section1Ref}
            flexDir={"column"}
            gap={"40px"}
            maxW={"600px"}
          >
            <Text
              fontSize={80}
              fontWeight={"extrabold"}
              fontFamily={"Nexa"}
              color={"#103166"}
              letterSpacing={"-5px"}
              lineHeight={1.2}
            >
              Our Multisector Expertise
            </Text>
            <Text
              fontSize={24}
              fontWeight={"medium"}
              fontFamily={"Satoshi"}
              color={"#030F22"}
              letterSpacing={"-5%"}
            >
              Axanto Group Inc. excels across sectors, offering tailored
              solutions to diverse industries, leveraging deep expertise and
              adaptable strategies for success and innovation.
            </Text>
            {/* <Link link="#">
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
            </Link> */}
          </Flex>
          <Image ref={section2Ref} src={MultisectorImage} height={"574px"} />
        </Flex>
      </Box>
      <MultiSectorImages />
    </Box>
  );
};

export default MultiSectorExpertise;
