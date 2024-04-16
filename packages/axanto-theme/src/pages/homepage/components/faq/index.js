import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SingleFaq from "./components/SingleFaq";

export const faqs = [
    {
        title: "What sets Axanto Group Inc. apart in the industry?",
        text: "At Axanto Group Inc., we stand out through our commitment to tailored solutions, cutting-edge technology, and collaborative approach. Our deep expertise and proven track record ensure we deliver results that elevate your business.",
    },
    {
        title: "Do you offer customized solutions for specific business requirements?",
        text: "Absolutely! We understand that every business has unique needs. Our team excels at crafting tailored IT and security infrastructure solutions to match your specific requirements. Feel free to discuss your needs with us; we’ll work together to find the best approach.",
    },
    {
        title: "How do you ensure data confidentiality?",
        text: "Data confidentiality is paramount to us. We employ industry-leading encryption, access controls, and secure protocols to safeguard your data. Our team follows best practices to prevent unauthorized access and data leaks.",
    },
];

const Faqs = () => {
    return (
        <Box py={"80px"}>
            <Text
                fontWeight={"extrabold"}
                fontSize={48}
                fontFamily={"Nexa"}
                textAlign={"center"}
                mb={"120px"}
            >
                Frequently Asked Questions
            </Text>
            <Stack spacing={"60px"} maxW={"1280px"} marginX={"auto"}>
                {faqs.map((it, idx) => (
                    <SingleFaq key={idx} text={it.text} title={it.title} />
                ))}

            </Stack>
        </Box>
    );
};

export default Faqs;
