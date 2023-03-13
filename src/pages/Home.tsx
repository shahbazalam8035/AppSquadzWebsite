import React from 'react'
import Header from '../Components/Header'
import SectionFive from '../Components/SectionFive'
import SectionFour from '../Components/SectionFour'
import SectionOne from '../Components/SectionOne'
import SectionThree from '../Components/SectionThree'
import ImageSlider from '../Components/sectionPortfolio'
import SectionTechno from '../Components/SectionTechno'
import Footer from '../Components/Footer'
import TabBar from '../Components/TabBar'

const Home = () => {
  return (
    <div>
      <Header/>
      <SectionOne/>
      <TabBar/>
      <SectionThree/>
      <SectionFour/>
      <ImageSlider/>
      <SectionTechno/>
      <SectionFive/>
      <Footer/>
    </div>
  )
}

export default Home
