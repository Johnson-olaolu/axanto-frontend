import { Box, Button, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import ContactFormBg from "../../../assets/images/contact-form-bg.png";
import { useFormik } from "formik";
import { FaCircle, FaCircleCheck } from "react-icons/fa6";

const options = ["General Inquiry", "Services", "Consultation", "Others"];

const ContactForm = () => {
    const [value, setValue] = React.useState("1");
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            subject: "",
            message: "",
        },
    });
    return (
        <Box px={"16px"} py={"160px"}>
            <Box>
                <Text></Text>
                <Text></Text>
            </Box>
            <Box mt={"100px"}>
                <Box
                    boxShadow={"0px 0px 65px 32px rgba(0,0,0, 0.03)"}
                    maxW={"1280px"}
                    mx={"auto"}
                    bg={"white"}
                    p={"12px"}
                >
                    <Flex direction={{ base: "column", md: "row" }} gap={"54px"} alignItems={"center"}>
                        <Box
                            flexShrink={0}
                            backgroundImage={`url(${ContactFormBg})`}
                            bgSize={"contain"}
                            width={{ base: "100%", md: "540px" }}
                            height={{ base: "540px" }}
                            rounded={"12px"}
                        ></Box>
                        <Box pr={{ md: "42px" }} as="form" flexGrow={1}>
                            <Grid
                                gridTemplateColumns={{ md: "repeat(2, 1fr)" }}
                                columnGap={"40px"}
                                rowGap={"48px"}
                                px={{ base: "20px", md: 0 }}
                            >
                                <Box>
                                    <Text
                                        fontWeight={"medium"}
                                        fontSize={"18px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        as={"label"}
                                        htmlFor="firstName"
                                    >
                                        First Name
                                    </Text>
                                    <Input
                                        fontSize={"14px"}
                                        fontWeight={"medium"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        value={formik.values.firstName}
                                        name="firstName"
                                        onChange={formik.handleChange}
                                        id="firstName"
                                        borderColor={"#8D8D8D"}
                                        variant="flushed"
                                        placeholder="John"
                                    />
                                </Box>
                                <Box>
                                    <Text
                                        fontWeight={"medium"}
                                        fontSize={"18px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        as={"label"}
                                        htmlFor="firstName"
                                    >
                                        Last Name
                                    </Text>
                                    <Input
                                        fontWeight={"medium"}
                                        fontSize={"14px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        value={formik.values.lastName}
                                        name="lastName"
                                        onChange={formik.handleChange}
                                        id="lastName"
                                        borderColor={"#8D8D8D"}
                                        variant="flushed"
                                        placeholder="Doe"
                                    />
                                </Box>
                                <Box>
                                    <Text
                                        fontWeight={"medium"}
                                        fontSize={"18px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        as={"label"}
                                        htmlFor="email"
                                    >
                                        Email
                                    </Text>
                                    <Input
                                        fontWeight={"medium"}
                                        fontSize={"14px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        value={formik.values.email}
                                        name="email"
                                        onChange={formik.handleChange}
                                        id="email"
                                        borderColor={"#8D8D8D"}
                                        variant="flushed"
                                        placeholder="johndoe@gmail.com"
                                    />
                                </Box>
                                <Box>
                                    <Text
                                        fontWeight={"medium"}
                                        fontSize={"18px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        as={"label"}
                                        htmlFor="phoneNumber"
                                    >
                                        Phone Number
                                    </Text>
                                    <Input
                                        fontWeight={"medium"}
                                        fontSize={"14px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        value={formik.values.firstName}
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        onChange={formik.handleChange}
                                        borderColor={"#8D8D8D"}
                                        variant="flushed"
                                        placeholder="Johnson"
                                    />
                                </Box>
                                <Box gridColumn={{ md: "1 / span 2" }}>
                                    <Text
                                        fontWeight={"medium"}
                                        fontSize={"18px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                    >
                                        Select Subject?
                                    </Text>
                                    <Flex flexWrap={"wrap"} gap={"28px"} mt={"16px"}>
                                        {options.map((data, idx) => (
                                            <Flex
                                                key={idx}
                                                gap={"8px"}
                                                alignItems={"center"}
                                                role="button"
                                                onClick={() => formik.setFieldValue("subject", data)}
                                            >
                                                <Box>
                                                    {formik.values.subject === data ? (
                                                        <FaCircleCheck size={16} color={"#030F22"} />
                                                    ) : (
                                                        <FaCircle size={16} color={"#E0E0E0"} />
                                                    )}
                                                </Box>
                                                <Text
                                                    color={"#030F22"}
                                                    fontWeight={"medium"}
                                                    fontSize={"14px"}
                                                    fontFamily={"Satoshi"}
                                                >
                                                    {data}
                                                </Text>
                                            </Flex>
                                        ))}
                                    </Flex>
                                </Box>
                                <Box gridColumn={{ md: "1 / span 2" }}>
                                    <Text
                                        fontWeight={"medium"}
                                        fontSize={"18px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        as={"label"}
                                        htmlFor="message"
                                    >
                                        Message
                                    </Text>
                                    <Input
                                        fontWeight={"medium"}
                                        fontSize={"14px"}
                                        fontFamily={"Satoshi"}
                                        color={"#030F22"}
                                        value={formik.values.firstName}
                                        id="message"
                                        name="message"
                                        onChange={formik.handleChange}
                                        borderColor={"#8D8D8D"}
                                        variant="flushed"
                                        placeholder="Write your message..."
                                    />
                                </Box>
                            </Grid>
                            <Flex mt={"64px"} justifyContent={"end"}>
                                <Button height={"auto"} py={"28px"} px={"32px"} fontSize={"28px"} fontWeight={"bold"} fontFamily={"Satoshi"} bg={"#6B97FF"} color={"white"} borderRadius={"12px"}>Submit Form</Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box >
        </Box >
    );
};

export default ContactForm;
