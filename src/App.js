import { createContext, useState, lazy, Suspense } from 'react';
import './assets/css/tailwind.css'

// const Footer = lazy(() => import('./components/common/Footer'));
// const Loader = lazy(() => import('./components/common/Loader'))

import Footer from './components/common/Footer'
import LeftSide from './components/common/LeftSide'
import MainBoard from './components/common/MainBoard'
import Loader from './components/common/Loader';

export const DarkModeContext = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className="App">
      {/* <button className='w-40 h-14 bg-gray-600 text-white mb-5 rounded-xl' onClick={() => {setDarkMode(!darkMode)}}>Change Theme</button> */}
      <div className="px-75 flex pt-7 pb-32">
        <LeftSide />
        <MainBoard />
      </div>
      <Footer />

      {/* <DarkModeContext.Provider value={darkMode}>
        <Footer />
      </DarkModeContext.Provider> */}

      {/* <Suspense fallback={<Loader />}>
        <DarkModeContext.Provider value={darkMode}>
          <Footer />
        </DarkModeContext.Provider>
      </Suspense>  */}
      
      
    </div>
  );
}

export default App;
