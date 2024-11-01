import { useState } from 'react';
import Navigation from "./components/Navigation"
import NavigationMobile from "./components/NavigationMobile"
import ProductDisplay from './components/ProductDisplay'
import Description from './components/Description'

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [pictureIndex, setPictureIndex] = useState(0)
  const [addProduct, setAddProduct] = useState(0)
  const [itemsInCart, setItemsInCart] = useState(0)

  function handlerMenu() {
    setIsNavigationOpen(prevState => !prevState)
    setIsCartOpen(false);
  }

  function handlerCart() {
    setIsCartOpen(prevState => !prevState)
  }  

  function handlerPicture(index) {
    setPictureIndex(index)
  }

  function handlerPictureNext() {
    setPictureIndex((prevIndex) => {
      if (prevIndex < 3) {
        return prevIndex + 1
      }
      return prevIndex;
    });
  }

  function handlerPicturePrevious() {
    setPictureIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1
      }
      return prevIndex;
    });
  }

  function handlerAddProduct() {
    setAddProduct((prevIndex) => {
      return prevIndex + 1
    })
  }

  function handlerMinusProduct() {
    setAddProduct((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  function handlerAddItemsToCart() {
    setItemsInCart(prevItemsInCart => prevItemsInCart + addProduct)
    setAddProduct(0)
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navigation handlerMenu={handlerMenu} handlerCart={handlerCart} isCartOpen={isCartOpen} itemsInCart={itemsInCart}/>
      <NavigationMobile isNavigationOpen={isNavigationOpen} handlerMenu={handlerMenu} />
      <ProductDisplay pictureIndex={pictureIndex} handlerPicture={handlerPicture} handlerPictureNext={handlerPictureNext} handlerPicturePrevious={handlerPicturePrevious} />
      <Description addProduct={addProduct} handlerAddProduct={handlerAddProduct} handlerMinusProduct={handlerMinusProduct} handlerAddItemsToCart={handlerAddItemsToCart} />
    </div>
  )
}

export default App
