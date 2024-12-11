import React from 'react';
import Header from './components/Header';
import BusinessPlan from './components/BusinessPlan';
import Description from './components/Description';
import Team from './components/Team';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <Team />
      <BusinessPlan />
      <Footer />
    </div>
  );
};

export default App;
