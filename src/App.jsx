import { useState } from 'react';
import Navigation from "./components/Navigation"
import NavigationMobile from "./components/NavigationMobile"
// import OpenCart from './components/OpenCart'

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function handlerMenu() {
    setIsNavigationOpen(prevState => !prevState);
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navigation handlerMenu={handlerMenu} />
      <NavigationMobile isNavigationOpen={isNavigationOpen} handlerMenu={handlerMenu} />
      {/* <OpenCart /> */}
    </div>
  )
}

export default App
