"use client";
import HeroSlider from "@/component/HeroSlider";
import Navbar from "@/component/Navbar";
import Books from "@/component/Books";
import About from "@/component/AboutUs";
import Footer from "@/component/Footer";
import Contact from "@/component/Contact";
import Positions from "@/component/Works";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSlider />
      <About/>
      <Positions/>
      <Books/>
      <Contact/>
      <Footer/>

      {/* Add other sections below */}

      {/* <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          Sachin Mittal is an entrepreneur, investor, and author
          with experience in finance, media, and business strategy.
        </p>
      </section> */}

    </main>
  );
}