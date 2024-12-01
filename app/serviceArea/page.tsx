'use client'
import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from './Hero'
import Expansion from './Expansion'
import Country1 from './Country-1'
import Country2 from './Country-2'
import Country3 from './Country-3'
import Country4 from './Country-4'
import Country5 from './Country-5'
import Country6 from './Country-6'
import Country7 from './Country-7'
import Country8 from './Country-8'

const serviceArea = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <div className='bg-white flex flex-col gap-4 text-black p-14 ax:p-7'>
          <Expansion/>
          <Country1/>
          <Country2/>
          <Country3/>
          <Country4/>
          <Country5/>
          <Country6/>
          <Country7/>
          <Country8/>
        </div>
        <Footer/>
    </div>
  )
}

export default serviceArea