import PropTypes from 'prop-types';
import Next from '../assets/images/icon-next.svg';
import Previous from '../assets/images/icon-previous.svg';

function SliderButton({handlerPicturePrevious, handlerPictureNext}) {
  return(
    <div className='flex absolute justify-between min-w-full px-2 top-1/2 transform -translate-y-1/2'>
      <div className='h-7 w-7 p-2 bg-white rounded-full cursor-pointer' onClick={handlerPicturePrevious}>
        <img src={Previous} alt="Previous" className='h-full w-full object-contain'/>
      </div>
      <div className='h-7 w-7 p-2 bg-white rounded-full cursor-pointer' onClick={handlerPictureNext}>
        <img src={Next} alt="Next" className='h-full w-full object-contain'/>
      </div>
    </div>
  )
}

SliderButton.propTypes = {
  handlerPicturePrevious: PropTypes.func,
  handlerPictureNext: PropTypes.func
}

export default SliderButton;