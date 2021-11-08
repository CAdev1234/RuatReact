import { createContext, useState, lazy, Suspense } from 'react';
import './assets/css/tailwind.css'

// const Footer = lazy(() => import('./components/common/Footer'));
// const Loader = lazy(() => import('./components/common/Loader'))

import Footer from './components/common/Footer'
import LeftSide from './components/common/LeftSide'
import MainBoard from './components/common/MainBoard'
import Loader from './components/common/Loader';

function App() {
  return (
    <div className="App">
      <div className={`flex pt-7 pb-32
                     bg-white dark:bg-black`}>
        <LeftSide className="hidden md:block ml-auto" />
        <MainBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
