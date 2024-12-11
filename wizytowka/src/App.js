import React from 'react';
import Header from './components/Header';
import BusinessPlan from './components/BusinessPlan';
import Description from './components/Description';
import Team from './components/Team';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <BusinessPlan />
      <Description />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
