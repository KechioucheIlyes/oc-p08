'use client'
import About from "./Components/About/About";
import Competences from "./Components/Competences/Competences";
import Description from "./Components/Description/Description";
import Footer from "./Components/Footer/Footer";
import Formation from "./Components/Formation/Formation";
import Github from "./Components/Github/Github";
import Navbar from "./Components/NavBar/Navbar";
import Reseaux from "./Components/Reseaux/Reseaux";
import Services from "./Components/Services/Services";
import Homes from "./Components/Homes/Homes";
import './globals.css'

export default function Home() {
  return (
    <main>

      <Navbar />

      <About />

      <Description />

      <Services />

      <Formation />

      <Github />

      <Competences />

      <Reseaux />

      <Footer />
    </main>

  )
}
