import './App.css';
import Header from './components/header';
import Skills from './components/Skills';
import WhoAmI from './components/WhoAmI';
import MyWork from './components/MyWork';
import ProjectBuy2 from './components/ProjectBuy2';
import ProjectVehicleAgency from './components/ProjectVehicleAgency';
import ProjectMatchItUp from './components/ProjectMatchItUp';
import ProjectColorAnalyzer from './components/ProjectColorAnalyzer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <WhoAmI />
            <Skills />
            <MyWork />
          </div>
        } />
        <Route path="/project/buy2" element={<ProjectBuy2 />} />
        <Route path="/project/vehicle-agency" element={<ProjectVehicleAgency />} />
        <Route path="/project/matchitup" element={<ProjectMatchItUp />} />
        <Route path="/project/color-analyzer" element={<ProjectColorAnalyzer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
