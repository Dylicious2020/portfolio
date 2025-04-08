import './App.css';
import {useState, useEffect} from 'react';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import HomeMobile from './HomeMobile';
import Contact from './Contact';
import ContactMobile from './ContactMobile';
import About from './About';
import AboutMobile from './AboutMobile';
import Projects from './Projects';
import ProjectsMobile from './ProjectsMobile';

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [page, setPage] = useState('home');


 

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
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
  </Routes>
</Router>
)
} else {
  return (
    <Router>
  <Routes>
    <Route path='/' element={<HomeMobile sidebarIsOpen = {sidebarIsOpen} setSidebarIsOpen = {setSidebarIsOpen} page = {page} setPage = {setPage}/>} />
    <Route path='/contact' element={<ContactMobile sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} page = {page} setPage = {setPage}/>}/>
    <Route path='/about' element={<AboutMobile sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} page = {page} setPage = {setPage}/>}/>
    <Route path='/projects' element={<ProjectsMobile sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} page = {page} setPage = {setPage}/>}/>
  </Routes>
</Router>
  )
}

};

export default App;
