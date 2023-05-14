import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';
import First from './components/First'
function App() {
  return (
    <div>      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<First/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/skills" element={<Skill/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/projects" element={<Project/>} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
