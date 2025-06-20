import './App.css';
import Header from './components/header';
import Skills from './components/Skills';
import WhoAmI from './components/WhoAmI';
import MyWork from './components/MyWork';
import ProjectBuy2 from './components/ProjectBuy2';
import ProjectVehicleAgency from './components/ProjectVehicleAgency';
import ProjectMatchItUp from './components/ProjectMatchItUp';
import ProjectColorAnalyzer from './components/ProjectColorAnalyzer';
import ProjectLegacyModernization from './components/ProjectLegacyModernization';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <WhoAmI />
            <Skills />
            <MyWork />
          </div>
        } />
        <Route path="/project/legacy-modernization" element={<ProjectLegacyModernization />} />
        <Route path="/project/buy2" element={<ProjectBuy2 />} />
        <Route path="/project/vehicle-agency" element={<ProjectVehicleAgency />} />
        <Route path="/project/matchitup" element={<ProjectMatchItUp />} />
        <Route path="/project/color-analyzer" element={<ProjectColorAnalyzer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
