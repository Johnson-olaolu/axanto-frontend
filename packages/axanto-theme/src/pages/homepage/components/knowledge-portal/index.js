import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BlogCard from '../../../../components/cards/blog-card'

const KnowledgePortal = () => {
    return (
        <Box py={"80px"}>
            <Text
                fontWeight={"extrabold"}
                fontSize={48}
                fontFamily={"Nexa"}
                textAlign={"center"}
                mb={"120px"}
            >
                Knowledge Portal
            </Text>
            <Stack direction={"row"} spacing={"48px"} maxW={"1280px"} marginX={"auto"} >
                <BlogCard />
            </Stack>
        </Box>
    )
}

export default KnowledgePortal