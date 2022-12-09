import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Section1 from '../components/section1'
import Section2 from '../components/section2'


export default function Home() {
  return (
    <div className='bg-night'>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  )
}
