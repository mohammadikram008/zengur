import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './commponents/Navbar/Index.jsx'
import Hero from './commponents/Hero/Index.jsx'
import Webpage from './commponents/Webpage/Index.jsx'
import WebForm from './commponents/WebForm/Index.jsx'
import FAQ from './commponents/FAQ/Index.jsx'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Aboutus from './commponents/Aboutus/Index.jsx'
import SeoForm from './commponents/SeoForm/Index.jsx'
import Applicationdev from './commponents/ApplicationDev/Index.jsx'
import GraphicDesign from './commponents/GraphicForm/Index.jsx'
import DomianHosting from './commponents/DomianHosting/Index.jsx'
import MaintanenceSupport from './commponents/MaintanceneSupport/Index.jsx'
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>

      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/webpage' element={<Webpage />}></Route>
        <Route path='/webform' element={<WebForm />}></Route>
        {/* <Route path='/faq' element={<FAQ />}></Route> */}
        {/* <Route path='/aboutus' element={<Aboutus />}></Route> */}
        <Route path='/seoform' element={<SeoForm />}></Route>
        <Route path='/applicationdev' element={<Applicationdev />}></Route>
        <Route path='/graphicdesgin' element={<GraphicDesign />}></Route>
        <Route path='/domianhosting' element={<DomianHosting />}></Route>
        <Route path='/maintenacesupport' element={<MaintanenceSupport />}></Route>
      </Routes>
      {/* <ScrollLink
        to="about-section" // Replace 'home-section' with the ID of the section you want to scroll to
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if you have a fixed navbar that overlaps the section
        duration={500}
        className="scroll-to-top"
      >
        Scroll To Top
      </ScrollLink> */}

    </Fragment >
  );
}

export default App;
