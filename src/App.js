import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CaseStudies from './pages/case-studies';        
import DelawareCaseStudy from './components/DelawareCaseStudy';
import APCRacingSeries from './pages/case-studies/apcracingseries';
import APCReturns from './pages/case-studies/returns';
import APCRFID from './pages/case-studies/rfid';
import APCPIM from './pages/case-studies/pim';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/delaware" element={<DelawareCaseStudy />} />
        <Route path="/case-studies/apcracingseries" element={<APCRacingSeries />} />
        <Route path="/case-studies/returns" element={<APCReturns />} />
        <Route path="/case-studies/rfid" element={<APCRFID />} />
        <Route path="/case-studies/pim" element={<APCPIM />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
