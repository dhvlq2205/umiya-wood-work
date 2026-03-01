import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallary";
import WhyChooseUs from "../components/WhyChosseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Landing() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}