import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../../assets/images/axanto-logo3.png'
import Link from '@frontity/components/link'

export const footerMenu = [
    {
        title: "Explore", items: [
            { name: "Home", route: '/' },
            { name: "About", route: '/about/' },
            { name: "Services", route: '/services/' },
            { name: "Customer Portal", route: '/customer-portal/' },
            { name: "Knowledge Center", route: '/knowledge-center/' },
        ]
    },
    {
        title: "Information", items: [
            { name: "Home", route: '/' },
            { name: "About", route: '/about/' },
            { name: "Services", route: '/services/' },
            { name: "Customer Portal", route: '/customer-portal/' },
            { name: "Knowledge Center", route: '/knowledge-center/' },
        ]
    },
    {
        title: "Services", items: [
            { name: "Home", route: '/' },
            { name: "About", route: '/about/' },
            { name: "Services", route: '/services/' },
            { name: "Customer Portal", route: '/customer-portal/' },
            { name: "Knowledge Center", route: '/knowledge-center/' },
        ]
    }
]


const Footer = () => {
    return (
        <Box as='footer' py={"72px"} px={8}>
            <Box maxW={"1280px"} marginX={"auto"}>
                <Flex justifyContent={"space-between"} gap={6} flexDirection={{ base: "column", md: "row" }} pb={{ base: "32px", md: "72px" }}>
                    <Box>
                        <Image src={Logo} height={"96px"} />
                        <Text maxW={"360px"} mt={"24px"} fontFamily={"Satoshi"} fontSize={18}>
                            Access tailored solutions, support, and expert guidance via our contact page for your unique challenges.
                        </Text>
                    </Box>
                    {footerMenu.map((item, idx) => (
                        <Box key={idx}>
                            <Text fontFamily={"Nexa"} fontWeight={"extrabold"} letterSpacing={"-2px"} fontSize={24} as={"h5"}>{item.title}</Text>
                            <Flex mt={4} as="ul" flexDirection={"column"} listStyleType={"none"} gap={"8px"}>
                                {item.items.map((link, idx2) => (
                                    <Box as="li" key={idx2} fontSize={18} fontWeight={"medium"} letterSpacing={"-5%"} fontFamily={"Satoshi"}>
                                        <Link link={link.route} >{link.name}</Link>
                                    </Box>
                                ))}

                            </Flex>
                        </Box>
                    ))}
                    <Box >
                        <Text fontFamily={"Nexa"} fontWeight={"extrabold"} letterSpacing={"-2px"} fontSize={24} as={"h5"}>Social Links</Text>
                        <Flex mt={4} as="ul" flexDirection={"column"} listStyleType={"none"} gap={"8px"}>
                            <Box as="li" fontSize={18} fontWeight={"medium"} letterSpacing={"-5%"} fontFamily={"Satoshi"}>
                                <Link link={"https://www.linkedin.com/company/axanto-group-inc-/"} >LinkedIn</Link>
                            </Box>
                            <Box as="li" fontSize={18} fontWeight={"medium"} letterSpacing={"-5%"} fontFamily={"Satoshi"}>
                                <Link link={"#"} >Instagram</Link>
                            </Box>
                            <Box as="li" fontSize={18} fontWeight={"medium"} letterSpacing={"-5%"} fontFamily={"Satoshi"}>
                                <Link link={"#"} >Facebook</Link>
                            </Box>
                            <Box as="li" fontSize={18} fontWeight={"medium"} letterSpacing={"-5%"} fontFamily={"Satoshi"}>
                                <Link link={"#"} >X</Link>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Box pt={{ base: "32px", md: "72px" }} borderTopWidth={"1px"} borderColor={"black"}>
                    <Text textAlign={"center"} fontFamily={"Nexa"} fontWeight={"black"} fontSize={{ base: 14, 'md': 24 }}>{new Date().getFullYear()} Axanto Group Inc. All Rights Reserved</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer