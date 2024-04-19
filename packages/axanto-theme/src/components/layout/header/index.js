import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useState, useRef, useEffect } from 'react'
import Logo from '../../../assets/images/axanto-logo.png'
import Link from "@frontity/components/link"
import { connect } from "frontity"
import MobileMenu from './components/MobileMenu'
import gsap from 'gsap'

export const menuItems = [
    { name: "Home", route: '/' },
    { name: "About", route: '/about/' },
    { name: "Services", route: '/about-2/' },
    { name: "Customer Portal", route: '/customer-portal/' },
    { name: "Knowledge Center", route: '/axanto-blogs/' },
]

const Header = ({ state }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [ctx] = useState(gsap.context(() => { }));

    const menuRef = useRef(null);
    useEffect(() => {
        ctx.add("addSticky", () => {
            gsap.fromTo(
                menuRef.current,
                {
                    position: "fixed",
                    width: "100%",
                    backgroundColor: "transparent",
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
            if (window.scrollY > 44) {
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

            if (window.scrollY > 800) {
                menuRef.current.style.backgroundColor = "black";
            } else {
                menuRef.current.style.backgroundColor = "transparent";
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
            <Box ref={menuRef} as='header' padding={"32px"} marginBottom={"-140px"} display={{ base: "none", md: "block" }} overflow={'hidden'}>
                <Flex maxW={"1280px"} marginX={"auto"} justify={'space-between'} align={'center'}  >
                    <Image height={"60px"} src={Logo} />
                    <Box as='nav'>
                        <Flex as={'ul'} listStyleType={'none'} gap={"70px"}>
                            {menuItems.map((item, idx) => (
                                <Box as={'li'} key={idx} fontSize={24} fontWeight={'bold'} color={state.router.link === item.route ? "white" : "#C1C7F9"} fontFamily={'Satoshi'} letterSpacing={"-2px"}>
                                    <Link link={item.route}>{item.name}</Link>
                                </Box>
                            ))}
                        </Flex>
                    </Box>

                    <Link link="/contact/">
                        <Box p={5} bg={'#6B97FF'} color={"black"} fontSize={24} fontWeight={'bold'} rounded={10} fontFamily={'Space Grotesk'} letterSpacing={"-2px"}>
                            Support channel
                        </Box>
                    </Link>

                </Flex>
            </Box>
            <MobileMenu />
        </>

    )
}

export default connect(Header)