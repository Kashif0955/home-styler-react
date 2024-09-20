import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import GalleryDetails from './pages/GalleryDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Team from './pages/Team';
import AllTeam from './pages/AllTeam'
import Testimonials from './pages/Testimonials'
import '../public/assets/css/theme.css'
import AllDesigns from './pages/AllDesigns'
import NavCartDetails from './pages/NavCartDetails'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BentoGridDemo } from './pages/BentoGrid-demo';






const App = () => {
  return (


<Router>
 
 <Header />
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/services" element={<Services />} />
   <Route path="/gallery" element={<Gallery />} />
   <Route path="/project-details" element={<GalleryDetails />} />
   <Route path="/all-designs" element={<AllDesigns />} />
   {/* <Route path="/all-designs" element={<BentoGridDemo />} /> */}
   <Route path="/blog" element={<Blog />} />
   <Route path="/blog-details" element={<BlogDetails />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/team" element={<Team />} />
   <Route path="/view-all" element={<AllTeam />} />
   <Route path="/testimonials" element={<Testimonials />} />
   <Route path="/cart" element={<NavCartDetails />} />


 </Routes>
 <Footer/>

</Router>

  
  );
}

export default App;
