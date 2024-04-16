import { Box, Flex, Image } from '@chakra-ui/react'
import { connect } from 'frontity'
import Logo from '../../../../assets/images/axanto-logo2.png'
import React, { useState, useRef, useEffect } from 'react'
import HamburgerCyberSquareIcon from '../../../../assets/icons/HamburgerCyberSquareIcon'
import HamburgerCyberSquareIcon2 from '../../../../assets/icons/HamburgerCyberSquareIcon2'
import { menuItems } from '..'
import Link from '@frontity/components/link'
import gsap from 'gsap'

const MobileMenu = ({ state }) => {

    const mobileWrapperRef = useRef(null);
    const [ctx] = useState(gsap.context(() => { }));
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        ctx.add("openMenu", () => {
            gsap.fromTo(
                mobileWrapperRef.current,
                {
                    translateX: '-100%',

                },
                {
                    translateX: "0",
                    duration: 1,
                },
            );
        })

        ctx.add("closeMenu", () => {
            gsap.to(mobileWrapperRef.current, {
                translateX: "-100%",
                duration: 1,
                onComplete: () => {
                    setMenuOpen(false)
                }
            });
        });
    }, [menuOpen, ctx])
    return (
        <>
            <Box as='header' paddingX={"32px"} py={"24px"} bg={'white'} display={{ base: "block", md: "none" }}>
                <Flex justifyContent={"space-between"} align={"center"}>
                    <Image src={Logo} height={"36px"} />
                    <HamburgerCyberSquareIcon role="button" onClick={() => ctx.openMenu()} />
                </Flex>
                <Box ref={mobileWrapperRef} transform={'auto'} translateX={"-100%"} paddingX={"32px"} zIndex={50} top={0} left={0} position={"fixed"} height={"100vh"} width={"100vw"} backgroundColor={"#030F22"}>
                    <Flex justifyContent={"end"} py={"24px"} >
                        <HamburgerCyberSquareIcon2 role="button" onClick={() => ctx.closeMenu()} />
                    </Flex>
                    <Box as={'nav'}>
                        <Flex as={'ul'} listStyleType={'none'} direction={"column"} gap={"20px"}>
                            {menuItems.map((item, idx) => (
                                <Box as={'li'} key={idx} fontSize={24} fontWeight={'bold'} color={state.router.link === item.route ? "white" : "#C1C7F9"} fontFamily={'Satoshi'} letterSpacing={"-2px"}>
                                    <Link link={item.route}>{item.name}</Link>
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default connect(MobileMenu)