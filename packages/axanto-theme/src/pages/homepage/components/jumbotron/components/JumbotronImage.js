import React, { useRef, useEffect } from 'react'
import HeroHeader from '../../../../../assets/images/HeroHeader.svg'
import Ellipse1 from '../../../../../assets/images/Ellipse 7.svg'
import Ellipse2 from '../../../../../assets/images/Ellipse 6.svg'
import { Box, Image } from '@chakra-ui/react'
import gsap from 'gsap'
const JumbotronImage = () => {

    const heroHeaderRef = useRef(null)
    const ellipse1Ref = useRef(null)
    const ellipse2Ref = useRef(null)

    useEffect(() => {
        const ellipseTl = gsap.timeline()
        ellipseTl.to(
            [ellipse1Ref.current, ellipse2Ref.current], {
            y: 40,
            opacity: 0.5,
            duration: 2,
            repeat: -1,
            yoyo: true
        })

        const headerTl = gsap.timeline({ repeat: Infinity, repeatDelay: 0 })
        headerTl.to(
            heroHeaderRef.current, {
            y: 25,
            duration: 2,
            repeat: -1,
            yoyo: true
        })
    }, [])

    return (
        <Box position={'relative'}>
            <Image ref={heroHeaderRef} src={HeroHeader} height={{ base: '200px', 'md': '820px' }} pb={"72px"} />
            <Image ref={ellipse1Ref} src={Ellipse1} position={"absolute"} height={{ base: '', md: '160px' }} left={'314px'} top={'56px'} />
            <Image ref={ellipse2Ref} src={Ellipse2} position={"absolute"} height={{ base: '', md: '160px' }} left={'28px'} bottom={'148px'} />
        </Box>
    )
}

export default JumbotronImage