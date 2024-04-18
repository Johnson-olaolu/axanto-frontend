import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "@frontity/components/link";
import React from "react";

const ContactBanner = () => {
    return (
        <Box bg={"#030F22"}>
            <Flex
                maxW={"1280px"}
                mx={"auto"}
                py={"88px"}
                pb={"200px"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Box maxW={"632px"}>
                    <Text
                        fontFamily={"Nexa"}
                        fontWeight={"extrabold"}
                        fontSize={"80px"}
                        color={"white"}
                        lineHeight={1.2}
                        letterSpacing={"-5px"}
                    >
                        Browse Solutions
                    </Text>
                    <Text
                        fontFamily={"Satoshi"}
                        fontSize={"24px"}
                        fontWeight={"medium"}
                        color={"#C1C7F9"}
                        letterSpacing={"-1px"}
                    >
                        Discover the full range of our exceptional support and
                        transformative solutions, empowering your company’s growth and
                        success starting today.
                    </Text>
                </Box>
                <Link link="#">
                    <Box
                        _hover={{ scale: 1.2, transitionDuration: "3s", transition: "all" }}
                        display={"inline-block"}
                        py={"24px"}
                        px={"32px"}
                        bg={"white"}
                        transform={"auto"}
                        rounded={"12px"}
                        fontSize={"28px"}
                        fontWeight={"Bold"}
                        color={"#030F22"}
                        fontFamily={"Satoshi"}
                    >
                        Check out our support & services
                    </Box>
                </Link>
            </Flex>
        </Box>
    );
};

export default ContactBanner;
