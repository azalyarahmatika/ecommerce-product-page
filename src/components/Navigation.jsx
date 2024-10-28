import PropTypes from 'prop-types'
import Menu from "./Menu"
import Logo from "./Logo"
import List from "./List"
import Cart from "./Cart"
import Profile from "./Profile"
import OpenCart from './OpenCart'

function Navigation({ handlerMenu, handlerCart, isCartOpen}) {
  return(
    <div className="relative flex items-center justify-between md:border-b lg:mx-20 md:mb-5 md:mt-0 m-3 sm:m-5 min-w-[280px] transition ease-in-out delay-150">
      <div className="flex gap-3 md:gap-8 items-center">
        <Menu handlerMenu={handlerMenu} />
        <Logo />
        <ul className="hidden md:flex md:gap-6">
          <List />
        </ul>
      </div>
      
      <div className="flex items-center gap-3 md:gap-5">
        <Cart handlerCart={handlerCart} />
        <Profile />
      </div>

      <OpenCart isCartOpen={isCartOpen} />
    </div>
  )
}

Navigation.propTypes = {
  handlerMenu: PropTypes.func,
  handlerCart: PropTypes.func,
  isCartOpen: PropTypes.bool
}

export default Navigation