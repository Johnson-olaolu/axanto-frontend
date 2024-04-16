import { Box, Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'
import FLink from '@frontity/components/link'

const SingleSection = ({ partners }) => {
    return (
        <Flex className='single-section' height={"600px"} width={"100vw"} alignItems={"center"} flex={"0 0 auto"}  >
            <Flex maxW={"1280px"} flexWrap={"wrap"} justifyContent={"center"} mx={"auto"} alignItems={"center"} rowGap={"40px"}>
                {partners.map((p, idx) => (
                    <Link href='#' display={"flex"} width={"33%"} justifyContent={"center"} as={FLink} key={idx} idx={idx} link={p.link}>
                        <Image src={p.image} />
                    </Link>
                ))}
            </Flex>
        </Flex>
    )
}

export default SingleSection