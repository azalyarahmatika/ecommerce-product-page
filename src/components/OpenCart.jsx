import PropTypes from 'prop-types';
import Picture from '../assets/images/image-product-1-thumbnail.jpg';
import Delete from '../assets/images/icon-delete.svg';

function OpenCart({ itemsInCart=2 }) {
  return(
    <div className='absolute transform bottom-0 right-0 translate-y-full p-2 min-w-[304px] max-w-[375px] font-kumbh_sans lg:translate-y-[95%]'>
      <div className='shadow-[2px_20px_50px_-16px_rgba(0,0,0,0.3)] rounded-xl bg-white'>
        <p className='font-bold px-5 pt-5 pb-6 border-b'>Cart</p>
        <div className='p-5 min-h-36 flex items-center justify-center'>
          { itemsInCart === 0 ? 
            (
              <p className='font-bold text-dark_grayish_blue'>Your cart is empty.</p>
            )
          : (
              <div className='text-sm w-full'>
                <div className='flex items-center gap-3 justify-between mb-5'>
                  <div className='h-14 rounded-md overflow-hidden'>
                    <img src={Picture} alt="Product in Cart" className='h-full object-cover' />
                  </div>
                  <div className='max-[362px]:text-sm text-base'>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125  x  {itemsInCart}  <span className='font-bold'>${125*itemsInCart}</span></p>
                  </div>
                  <div className='cursor-pointer'>
                    <img src={Delete} alt="Delete Item" />
                  </div>
                </div>
                <button className='bg-orange min-w-full rounded-md p-2 font-bold'>
                  Checkout
                </button>
              </div>
            )
          }
        </div>     
    </div>
    </div>
    
  )
}

OpenCart.propTypes = {
  itemsInCart: PropTypes.number,
  // isCartOpen: PropTypes.bool,
  // handlerCart: PropTypes.func
}

export default OpenCart;