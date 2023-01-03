import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Header from '../components/Header/Header';
import { useState } from 'react';

const RoutesApp = () => {
  const [display, setDisplay] = useState();
  const [headerBreakpoint, setHeaderBreakpoint] = useState('')

  const getDisplayModal = isClosed => {
    setDisplay(isClosed);
  };

  const getBreakpointHeader = (breakpoint)=> {
    console.log(breakpoint)
    setHeaderBreakpoint(breakpoint)
  }

  return (
    <>
      <Header getDisplay={getDisplayModal} getBreakpoint={getBreakpointHeader} />
      <Routes>
        <Route path="/" element={<Home modalIsClosed={display} breakpointHeader={headerBreakpoint} />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
