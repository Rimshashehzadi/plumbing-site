import React from 'react'
import Hero from '../../Components/Home/Hero'
import QualityAssurance from '../../Components/Home/QualityAssurance'
import Services from '../../Components/Home/Services'
import Projects from '../../Components/Home/Projects'
import ContactHero from '../../Components/Contact/ContactHero'
import Testimonial from '../../Components/Home/Testimonial'
import StateSection from '../../Components/Home/StateSection'


const Home = () => {
  return (
    <div>
        <Hero/>
        <QualityAssurance/>
        <Services/>
        <Projects/>
        <ContactHero/>
        <Testimonial/>
        <StateSection/>
    </div>
  )
}

export default Home