import Nav from "./components/Nav"
import { Hero, PopularProducts, Newsletter, Feedback, Footer, Offer, SuperQuality, Services } from './sections/sections'


export default function App() {
  return (
    <main>
      {/* Nav */}
      <Nav />
      {/* Hero */}
      <Hero />

      {/* Popular Products */}
      <PopularProducts />

      {/* Super Quality */}
      <SuperQuality />

      {/* Services */}
      <Services />

      {/* Special Offers */}
      <Offer />

      {/* Customer Feedback */}
      <Feedback />

      {/* Subscribe */}
      <Newsletter />

      {/* Footer */}
      <Footer />

    </main>
  )
}