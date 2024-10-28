import { useState } from 'react';
import Navigation from "./components/Navigation"
import NavigationMobile from "./components/NavigationMobile"
import ProductDisplay from './components/ProductDisplay'
import Description from './components/Description'

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [pictureIndex, setPictureIndex] = useState(0);

  function handlerMenu() {
    setIsNavigationOpen(prevState => !prevState)
  }

  function handlerCart() {
    setIsCartOpen(prevState => !prevState)
  }  

  function handlerPicture(index) {
    setPictureIndex(index);
  }

  function handlerPictureNext() {
    setPictureIndex((prevIndex) => {
      if (prevIndex < 3) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  }

  function handlerPicturePrevious() {
    setPictureIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navigation handlerMenu={handlerMenu} handlerCart={handlerCart} isCartOpen={isCartOpen}/>
      <ProductDisplay pictureIndex={pictureIndex} handlerPicture={handlerPicture} handlerPictureNext={handlerPictureNext} handlerPicturePrevious={handlerPicturePrevious} />
      <Description />
      <NavigationMobile isNavigationOpen={isNavigationOpen} handlerMenu={handlerMenu} />
    </div>
  )
}

export default App
