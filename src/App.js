import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Views/Home/Home';
import Products from './Views/Products/Products';
import Gallery from './Views/Gallery/Gallery';
import Albums from './Views/Albums/Albums';
import AboutUs from './Views/AboutUs/AboutUs';
import Blogs from './Views/Blogs/Blogs';
import ContactUs from './Views/Contact/ContactUs';
import Tabbouleh from './Components/Tabbouleh/Tabbouleh';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/albums" element={<Albums/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/tabbouleh" element={<Tabbouleh/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
