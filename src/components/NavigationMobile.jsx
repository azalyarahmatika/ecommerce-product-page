import { useEffect } from 'react'
import PropTypes from "prop-types"
import List from "./List"
import CloseIcon from '../assets/images/icon-close.svg'

function NavigationMobile({ isNavigationOpen, handlerMenu }) {
  useEffect(() => {
    if (isNavigationOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => document.body.classList.remove('overflow-hidden');
  }, [isNavigationOpen]);

  return(
    <div className={`absolute inset-0 min-w-[304px] ${isNavigationOpen ? 'block' : 'hidden'}`}>
      <div className="w-full min-h-screen opacity-75 bg-black absolute"></div>
      <div className="relative w-3/5 min-h-screen p-3 pt-4 sm:p-5 bg-white">
        <div className='h-5 w-fit sm:h-6 md:h-7 cursor-pointer mb-10' onClick={handlerMenu}>
          <img src={CloseIcon} alt="Close Icon" className='h-full object-contain transition ease-in-out delay-150 filter-orange'/>
        </div>
        <ul className="font-bold space-y-7 text-lg">
          <List />
        </ul>
      </div>
    </div>
  )
}

NavigationMobile.propTypes = {
  isNavigationOpen: PropTypes.bool,
  handlerMenu : PropTypes.func
}

export default NavigationMobile