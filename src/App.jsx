import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Box>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;