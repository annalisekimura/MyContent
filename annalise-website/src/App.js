
import { Routes, Route } from'react-router-dom';
import { NetflixLogo } from './components/Netflix/Components/NetflixLogo';
import Profiles from './components/Netflix/Components/Profiles';
import Projects from './components/Netflix/Components/Projects';
import Skills from './components/Netflix/Components/Skills';
import Education from './components/Netflix/Components/Education';
import AboutMe from './components/Netflix/Components/AboutMe';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <div className="header">
        ANNALISE
      </div>
      <Routes>
        <Route path="/" element={<NetflixLogo />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profiles/1" element={<Projects />} />
        <Route path="/profiles/2" element={<Skills />} />
        <Route path="/profiles/3" element={<Education />} />
        <Route path="/profiles/4" element={<AboutMe />} />
      </Routes>
    </div>
  );
}


export default App;
