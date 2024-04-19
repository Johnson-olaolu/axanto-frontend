import React from 'react'
import Jumbotron from './components/jumbotron'
import ServiceProblems from './components/problems'
import OurServices2 from './our-services'
import ContactBanner from './components/contact-banner'
import MultiSectorExpertise from './components/multisector-expertise'

const ServicesPage = () => {
    return (
        <>
            <Jumbotron />
            <ServiceProblems />
            <OurServices2 />
            <MultiSectorExpertise />
            <ContactBanner />

        </>
    )
}

export default ServicesPage