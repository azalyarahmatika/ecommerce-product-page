import PropTypes from 'prop-types'
import ShoppingCart from '../assets/images/icon-cart.svg'

function Cart({ handlerCart }) {
  return(
    <div className='h-5 w-fit sm:h-6 md:h-7 cursor-pointer' onClick={handlerCart}>
      <img src={ShoppingCart} alt="Shopping Cart" className='h-full object-contain filter-black transition ease-in-out delay-150' />
    </div>
  )
}

Cart.propTypes = {
  handlerCart: PropTypes.func
}

export default Cart