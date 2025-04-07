import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import HomeMobile from './HomeMobile';
import Contact from './Contact';
import ContactMobile from './ContactMobile';
import About from './About';
import AboutMobile from './AboutMobile';

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);


 

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  const projects = [
    {
      id: 1,
      link: 'https://dylicious2020.github.io/masonStoops/'
    }
  ]

useEffect(() => {
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setMouseX(mouseX);
    setMouseY(mouseY);
  }

  document.addEventListener('mousemove', handleMouseMove);

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  }
}, []);






if (screenSize.width > 768) {
return (
<Router>
  <Routes>
    <Route path='/' element={<Home mouseX = {mouseX} mouseY = {mouseY}/>} />
    <Route path='/contact' element={<Contact mouseX = {mouseX} mouseY = {mouseY}/>}/>
    <Route path='/about' element={<About mouseX = {mouseX} mouseY = {mouseY}/>}/>
  </Routes>
</Router>
)
} else {
  return (
    <Router>
  <Routes>
    <Route path='/' element={<HomeMobile mouseX = {mouseX} mouseY = {mouseY} sidebarIsOpen = {sidebarIsOpen} setSidebarIsOpen = {setSidebarIsOpen}/>} />
    <Route path='/contact' element={<ContactMobile mouseX={mouseX} mouseY={mouseY} sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen}/>}/>
    <Route path='/about' element={<AboutMobile mouseX={mouseX} mouseY={mouseY} sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen}/>}/>
  </Routes>
</Router>
  )
}

};

export default App;
