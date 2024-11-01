import PropTypes from 'prop-types'
import Minus from '../assets/images/icon-minus.svg'
import Plus from '../assets/images/icon-plus.svg'
import Cart from '../assets/images/icon-cart.svg'

function AddToCart({ addedProduct = 0, handlerAddProduct, handlerMinusProduct, handlerAddItemsToCart}) {
  return(
    <div className='w-full'>   
      <div className="flex justify-between items-center h-12 py-2 px-3 bg-light_grayish_blue rounded-lg mb-4">
        <div className='h-7 w-7 p-2 cursor-pointer flex items-center hover:opacity-75' onClick={handlerMinusProduct}>
          <img src={Minus} alt="Minus" />
        </div>
        <p className='font-bold'>{addedProduct}</p>
        <div className='h-7 w-7 p-2 cursor-pointer flex items-center hover:opacity-75' onClick={handlerAddProduct}>
          <img src={Plus} alt="Plus" />
        </div>
      </div>
      <div className="relative flex justify-center gap-3 items-center h-12 py-2 px-3  rounded-lg shadow-md hover:change-color group">
        <div className="absolute inset-0 bg-orange group-hover:opacity-75 rounded-lg" onClick={handlerAddItemsToCart}></div>
        <div>
          <img src={Cart} alt="Cart" className='change-black-svg'/>
        </div>
        <p className='font-bold z-10'>Add to cart</p>
      </div>
    </div>
  )
}

AddToCart.propTypes = {
  addedProduct: PropTypes.number,
  handlerAddProduct: PropTypes.func,
  handlerMinusProduct: PropTypes.func,
  handlerAddItemsToCart: PropTypes.func
}

export default AddToCart