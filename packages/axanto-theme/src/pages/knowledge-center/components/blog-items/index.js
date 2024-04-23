import { Box, Flex, Grid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BlogCard from '../../../../components/cards/blog-card'
import Link from '@frontity/components/link'

const BlogItems = () => {
    return (
        <Box my={"140px"} px={"16px"}>
            <Text
                fontWeight={"extrabold"}
                fontSize={{ base: 32, md: 48 }}
                fontFamily={"Nexa"}
                textAlign={"center"}
                mb={{ base: "80px", md: "120px" }}
            >
                Knowledge Portal
            </Text>
            <Grid gridTemplateColumns={{ md: "repeat(3, 1fr)" }} justifyItems={"center"} direction={"row"} gap={"48px"} maxW={"1280px"} marginX={"auto"} >
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </Grid>
            <Flex mt={"48px"} justifyContent={"center"}>
                <Link link="#">
                    <Box display={"inline-block"} paddingX={"32px"} paddingY={"24px"} bg={"#6B97FF"} color={"white"} rounded={"14px"} textAlign={"center"} fontFamily={"Space Grotesk"} fontSize={{ md: "28px" }} letterSpacing={{ md: "-2px" }} fontWeight={"bold"}>Request for our Services</Box>
                </Link>
            </Flex>
        </Box>
    )
}

export default BlogItems