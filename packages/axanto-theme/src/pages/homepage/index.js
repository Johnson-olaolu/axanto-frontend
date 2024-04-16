import React from 'react'
import Jumbotron from './components/jumbotron'
import Services from './components/services'
import SafeHands from './components/safe-hands'
import ContactBanner from './components/contact-banner'
import Values from './components/values'
import Faqs from './components/faq'
import KnowledgePortal from './components/knowledge-portal'
import OurPartners from './components/our-partners'

const Homepage = () => {
    return (
        <>
            <Jumbotron />
            <Services />
            <SafeHands />
            <Values />
            <OurPartners />
            <Faqs />
            <KnowledgePortal />
            <ContactBanner />
        </>

    )
}

export default Homepage