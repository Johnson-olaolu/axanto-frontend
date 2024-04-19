import { Box } from '@chakra-ui/react'
import React from 'react'
import Jumbotron from './components/jumbotron'
import BlogItems from './components/blog-items'

const KnowledgeCenter = () => {
    return (
        <Box>
            <Jumbotron />
            <BlogItems />
        </Box>
    )
}

export default KnowledgeCenter