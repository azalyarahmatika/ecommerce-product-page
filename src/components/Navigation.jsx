import PropTypes from 'prop-types'
import Menu from "./Menu"
import Logo from "./Logo"
import List from "./List"
import Cart from "./Cart"
import Profile from "./Profile"
import OpenCart from './OpenCart'

function Navigation({ handlerMenu, handlerCart}) {
  return(
    <div className="relative flex items-center justify-between lg:border-b lg:mx-20 lg:mb-5 lg:mt-0 m-3 sm:m-5 min-w-[280px] transition ease-in-out delay-150">
      <div className="flex gap-3 md:gap-8 items-center">
        <Menu handlerMenu={handlerMenu} />
        <Logo />
        <ul className="hidden lg:flex lg:gap-6">
          <List />
        </ul>
      </div>
      
      <div className="flex items-center gap-3 md:gap-5">
        <Cart handleCart={handlerCart} />
        <Profile />
      </div>

      <OpenCart />
    </div>
  )
}

Navigation.propTypes = {
  handlerMenu: PropTypes.func,
  handlerCart: PropTypes.func
}

export default Navigation