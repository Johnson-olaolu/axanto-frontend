import { Box, Flex, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import AxantoSvg from '../../../assets/images/axanto.svg'

const BlogCard = () => {
    return (
        <Box padding={"16px"} maxW={"392px"} rounded={12} border={"1px solid #E8E8EA"}>
            <Image height={240} width={360} rounded={6} />
            <Box mt={"24px"}>
                <Text
                    as={"span"}
                    py={"4px"}
                    px={"12px"}
                    display={"inline-block"}
                    rounded={"6"}
                    bg={"rgba(75, 107, 251, 0.05)"}
                    color={"#4B6BFB"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                    fontFamily={"Satoshi"}
                >
                    Technology
                </Text>
                <Text
                    as={"h6"}
                    color={"#181A2A"}
                    fontSize={"24px"}
                    fontWeight={"black"}
                    fontFamily={"Satoshi"}
                    mt={"16px"}
                    lineHeight={1.2}
                >
                    How Digital Certificates work
                </Text>
                <Text fontSize={"12px"} mt={"20px"} color={"#4D5055"} fontWeight={"medium"} fontFamily={"Satoshi"}>
                    Lorem ipsum dolor sit amet consectetur. Enim consequat amet volutpat
                    at sapien lorem egestas ipsum molestie. A ut vestibulum fringilla
                    massa volutpat. Non pharetra odio nisi dignissim. Erat tortor sit non
                    ipsum.
                </Text>
                <Flex mt={"20px"} justifyContent={"space-between"} alignItems={"end"}>
                    <Image height={"28px"} width={"28px"} src={AxantoSvg} />
                    <Text fontSize={"12px"} color={"#97989F"} fontWeight={"medium"} fontFamily={"Satoshi"}>Axanto</Text>
                    <Text fontSize={"12px"} color={"#97989F"} fontWeight={"medium"} fontFamily={"Satoshi"}>{moment().format(`MMMM DD, YYYY`)}</Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default BlogCard;
