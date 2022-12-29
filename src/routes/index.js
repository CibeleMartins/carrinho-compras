import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Header from '../components/Header/Header';

const RoutesApp = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home modalDisplay={display} />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
