// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import WorkspaceAd from './components/WorkspaceAd';
import Section from './components/Section';
import Footer from './components/Footer';
import ImageComp from './components/ImageComp';
import DownloadAppSection from './components/DownloadAppSection';
import WorkspaceOverview from './WorkspaceOverview';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <WorkspaceAd/>
      <Section/>
      <Routes>
        <Route  path="/" element={<WorkspaceOverview/>}/>
      </Routes>
      <DownloadAppSection/>
      <Footer/>
    </Router>
  );
};

export default App;
