import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Works from "../pages/Works";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/ScrollToTop";

const Pages = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About secTitle="About" />} />
        <Route path="/works" element={<Works secTitle="Works" />} />
        <Route path="/contact" element={<Contact secTitle="Contact" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Pages;
