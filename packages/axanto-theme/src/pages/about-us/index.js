import React from 'react'
import { Box } from '@chakra-ui/react'
import Jumbotron from './components/jumbotron'
import StatsCountDown from './components/stats-countdown'
import DiverseExpert from './components/diverse-expert'
import EngineerNote from './components/engineer-note'
import OurServices from './components/our-services'
import OurPartners from '../homepage/components/our-partners'
import ContactBanner from './components/contact-banner'
const AboutUs = () => {
    return (
        <>
            <Jumbotron />
            <StatsCountDown />
            <DiverseExpert />
            <EngineerNote />
            <OurServices />
            <OurPartners />
            <ContactBanner />
        </>
    )
}

export default AboutUs