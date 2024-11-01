import PropTypes from 'prop-types';
import PriceTag from "./PriceTag"
import AddToCart from "./AddToCart"

function Description({ addProduct, handlerAddProduct, handlerMinusProduct, handlerAddItemsToCart }) {
  return(
    <div className="font-kumbh_sans p-5 min-w-[304px]">
      <p className="tracking-wide text-xs font-bold text-dark_grayish_blue mb-3">SNEAKER COMPANY</p>
      <h2 className="text-3xl font-bold mb-3 text-very_dark_blue">Fall Limited Edition Sneakers</h2>
      <p className="text-dark_grayish_blue text-sm leading-6 mb-5">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.</p>

      <PriceTag />

      <AddToCart addedProduct={addProduct} handlerAddProduct={handlerAddProduct} handlerMinusProduct={handlerMinusProduct} handlerAddItemsToCart={handlerAddItemsToCart}/>
    </div>

  )
}

Description.propTypes = {
  addProduct: PropTypes.number,
  handlerAddProduct: PropTypes.func,
  handlerMinusProduct: PropTypes.func,
  handlerAddItemsToCart: PropTypes.func
}

export default Description