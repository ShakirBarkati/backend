import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Fatwas from '../components/Fatwas'
import CTA from '../components/Cta'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Fatwas />
            <CTA />
            <Footer />
        </>
    )
}

export default Home