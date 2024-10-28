import PropTypes from 'prop-types';
import Burger from '../assets/images/icon-menu.svg'

function Menu({ handlerMenu}) {
  return(
    <div className='h-5 w-fit sm:h-7 md:hidden' onClick={handlerMenu}>
      <img src={Burger} alt="Burger Menu" className='h-full object-contain' />
    </div>
  )
}

Menu.propTypes = {
  handlerMenu: PropTypes.func
}

export default Menu;