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

    const [isSticky, setIsSticky] = useState(false);

    const menuRef = useRef(null);
    useEffect(() => {
        ctx.add("addSticky", () => {
            gsap.fromTo(
                menuRef.current,
                {
                    position: "fixed",
                    width: "100%",
                    top: 0,
                    left: 0,
                    translateY: "-100%",
                    boxShadow: "0 -6px 10px 5px rgba(0,0,0,0.5)",
                    zIndex: 100,
                    opacity: 0,
                },
                {
                    translateY: "0",
                    opacity: 1,
                    duration: 1,
                }
            );
        });
        ctx.add("removeSticky", () => {
            gsap.to(menuRef.current, {
                position: "relative",
                boxShadow: "none",
                duration: 0,
            });
            // menuRef;
        });
        // menuRef.current
        const handleScroll = () => {
            if (window.scrollY > 84) {
                if (menuRef.current.style.position !== "fixed") {
                    ctx.addSticky();
                    setIsSticky(true);
                }
            }
            else {
                if (menuRef.current.style.position === "fixed") {
                    ctx.removeSticky();
                    setIsSticky(false);
                    menuRef.current.style.transform = "";
                }
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            ctx.revert();
        };
    }, []);
    return (
        <>
            <Box ref={menuRef} as='header' paddingX={"32px"} py={"24px"} bg={'white'} display={{ base: "block", md: "none" }}>
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
                                <Box onClick={() => ctx.closeMenu()} as={'li'} key={idx} fontSize={24} fontWeight={'bold'} color={state.router.link === item.route ? "white" : "#C1C7F9"} fontFamily={'Satoshi'} letterSpacing={"-2px"}>
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