import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Header from '../components/Header/Header';
import { useState } from 'react';

const RoutesApp = () => {
  const [display, setDisplay] = useState();

  const getDisplayModal = isClosed => {
    setDisplay(isClosed);
  };

  return (
    <>
      <Header getDisplay={getDisplayModal} />
      <Routes>
        <Route path="/" element={<Home modalIsClosed={display} />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
