import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import CloudLottie from "../../../../assets/lottie/Cloud support & services-page.json";
import Loadable from "react-loadable";
import gsap from "gsap";

const Loading = () => <div></div>;

const LottieComponent = Loadable({
    loader: () => import("react-lottie"),
    loading: Loading,
});

export const infrastructureServicesItems = [
    "Digital Office Services",
    "Managed Services",
    "Quantum-Safe Key Management Systems",
];

const InfrastructureServices = () => {
    return (
        <Box>
            <Box mb={"40px"}>
                {/* <Box float={"left"} p={"8px"}>
                <LottieComponent options={{
                    animationData: CloudLottie,
                    loop: true
                }}
                    height={200}
                    width={200}
                // isStopped={this.state.isStopped}
                // isPaused={this.state.isPaused} 

                />
            </Box> */}
                <Text fontSize={"24px"} fontWeight={"medium"} fontFamily={"Satoshi"}>
                    Axanto Group Inc. acknowledges the critical importance of a strong
                    infrastructure in business success. Our customized suite of
                    infrastructure services ensures a secure and reliable foundation for
                    your operations, fostering efficiency and innovation. With a
                    commitment to scalability, reliability, and security, we empower your
                    business to excel in today's dynamic landscape.
                </Text>
            </Box>

            <Flex flexWrap={"wrap"} gap={"48px"}>
                {infrastructureServicesItems.map((item, idx) => (
                    <Box
                        key={idx}
                        p={"28px"}
                        border={"0.3px solid #030F22"}
                        shadow={"0px 4px 5px 3px rgba(0,0,0, 0.03)"}
                        rounded={"20px"}
                        bg={"white"}
                    >
                        <Text
                            mb={"4px"}
                            fontFamily={"Nexa"}
                            fontWeight={"medium"}
                            fontSize={"16px"}
                            lineHeight={1.2}
                        >
                            Cloud Services
                        </Text>
                        <Text
                            fontFamily={"Satoshi"}
                            fontWeight={"bold"}
                            fontSize={"18px"}
                            color={"#2865C8"}
                            lineHeight={1.2}
                        >
                            {item}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default InfrastructureServices;
