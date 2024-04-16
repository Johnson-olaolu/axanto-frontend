import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import AControls from '../../../../assets/images/partners/a-controls.png'
import ACronis from '../../../../assets/images/partners/acronis.png'
import Agio from '../../../../assets/images/partners/agio.png'
import Avast from '../../../../assets/images/partners/avast.png'
import Citrix from '../../../../assets/images/partners/citrix.png'
import Crescendo from '../../../../assets/images/partners/crescendo.png'
import CrowdStrike from '../../../../assets/images/partners/crowd-strike.png'
import CyberReady from '../../../../assets/images/partners/cybeready.png'
import DarkTrace from '../../../../assets/images/partners/darktrace.png'
import DropBox from '../../../../assets/images/partners/drop-box.png'
import EchoCommunities from '../../../../assets/images/partners/echo-communications.png'
import Ergo from '../../../../assets/images/partners/ergo.png'
import Hp from '../../../../assets/images/partners/hp.png'
import IbmCloud from '../../../../assets/images/partners/ibm-cloud.png'
import Juniper from '../../../../assets/images/partners/juniper.png'
import MAzure from '../../../../assets/images/partners/m-azure.png'
import Mapple from '../../../../assets/images/partners/maple.png'
import Poloalto from '../../../../assets/images/partners/paloalto.png'
import RockElectric from '../../../../assets/images/partners/rock-electric.png'
import RSA from '../../../../assets/images/partners/rsa.png'
import Sectigo from '../../../../assets/images/partners/sectigo.png'
import TorontoHousing from '../../../../assets/images/partners/toronto-housing.png'
import TrackEnsure from '../../../../assets/images/partners/track-ensure.png'
import VMware from '../../../../assets/images/partners/vmware.png'
import XMCyber from '../../../../assets/images/partners/xm-cyber.png'
import ZScaler from '../../../../assets/images/partners/zscaler.png'
import { splitArray } from '../../../../utils/misc'
import SingleSection from './components/SingleSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const partners = [
    { link: "#", image: AControls },
    { link: "#", image: ACronis },
    { link: "#", image: Agio },
    { link: "#", image: Avast },
    { link: "#", image: Citrix },
    { link: "#", image: Crescendo },
    { link: "#", image: CrowdStrike },
    { link: "#", image: CyberReady },
    { link: "#", image: DarkTrace },
    { link: "#", image: DropBox },
    { link: "#", image: EchoCommunities },
    { link: "#", image: Ergo },
    { link: "#", image: Hp },
    { link: "#", image: IbmCloud },
    { link: "#", image: Juniper },
    { link: "#", image: MAzure },
    { link: "#", image: Mapple },
    { link: "#", image: Poloalto },
    { link: "#", image: RockElectric },
    { link: "#", image: RSA },
    { link: "#", image: Sectigo },
    { link: "#", image: TorontoHousing },
    { link: "#", image: TrackEnsure },
    { link: "#", image: VMware },
    { link: "#", image: XMCyber },
    { link: "#", image: ZScaler }
]

const sections = splitArray(partners, 5)

const OurPartners = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

        let formats = document.querySelectorAll(".single-section");

        let scrollTween = gsap.to(formats, {
            xPercent: -100 * (formats.length - 1),
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: "bottom bottom",
                //snap: directionalSnap(1 / (sections.length - 1)),
                end: () => "+=" + containerRef.current.offsetWidth
            }
        });
    }, [])


    return (
        <Box py={"80px"}>
            <Text
                fontWeight={"extrabold"}
                fontSize={48}
                fontFamily={"Nexa"}
                textAlign={"center"}
            // mb={"120px"}
            >
                Our Partners
            </Text>
            <Box>
                <Flex ref={containerRef} justifyContent={"flex-start"}>
                    {sections.map((p, idx) => (
                        <SingleSection key={idx} partners={p} />
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}

export default OurPartners