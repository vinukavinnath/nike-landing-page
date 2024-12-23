import Nav from "./components/Nav"
import Feedback from "./sections/Feedback"
import Footer from "./sections/Footer"
import Offer from "./sections/Offer"
import {Hero, PopularProducts, Newsletter} from './sections/sections'
import Services from "./sections/Services"
import SuperQuality from "./sections/SuperQuality"

export default function App() {
  return (
    <main>
      {/* Nav */}
      <Nav/>
      {/* Hero */}
      <Hero/>
      
      {/* Popular Products */}
      <PopularProducts/>
      
      {/* Super Quality */}
      <SuperQuality/>

      {/* Services */}
      <Services/>

      {/* Special Offers */}
      <Offer/>

      {/* Customer Feedback */}
      <Feedback/>

      {/* Subscribe */}
      <Newsletter/>

      {/* Footer */}
      <Footer/>

    </main>
  )
}