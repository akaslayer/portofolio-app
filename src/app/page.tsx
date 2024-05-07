import About from "./components/About";
import Footer from "./components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import Hero from "./components/Hero";
import RecentWork from "./components/RecentWork";
import Testimonials from "./components/Testimonial";

import Website from "./components/Website";
import StateProvider from "./context/stateContext";
import SideMenu from "@/components/SidebarMenu";

export default function Home() {
  return (
    <>
      <StateProvider>
        <SideMenu />
        <HamburgerMenu />
        <Hero />
        <About />
        <RecentWork />
        <Website />
        <Testimonials />
        <Footer />
      </StateProvider>
    </>


  );
}
