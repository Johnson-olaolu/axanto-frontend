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

export const securityServicesItems = [
    "Automated Security Awareness",
    "Managed Security Service Provider (MSSP)",
    "Continuous Threat Exposure Management",
    "Endpoint Detention and Response",
    "Governance, Risk, and Compliance Services",
    "Security Policies and Standards Development",
    "Web Application Security",
    "Continuous Threat Exposure Management",
];

const SecurityServices = () => {
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
                    At Axanto Group Inc., we prioritize safeguarding your digital assets
                    in today's cyber landscape. Our B2B security services offer advanced
                    encryption, intrusion detection, and access management to shield your
                    business from evolving threats. Partner with us to fortify your
                    digital realm and maintain trust and continuity.
                </Text>
            </Box>

            <Flex flexWrap={"wrap"} gap={"40px"}>
                {securityServicesItems.map((item, idx) => (
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
                            Security Services
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

export default SecurityServices;
