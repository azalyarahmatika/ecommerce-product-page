import PropTypes from 'prop-types'
import Picture1 from '../assets/images/image-product-1.jpg'
import Picture2 from '../assets/images/image-product-2.jpg'
import Picture3 from '../assets/images/image-product-3.jpg'
import Picture4 from '../assets/images/image-product-4.jpg'
import SliderButton from './SliderButton'

function ProductDisplay({ pictureIndex, handlerPicturePrevious, handlerPictureNext }) {
  const pictures = [Picture1, Picture2, Picture3, Picture4];
  return(
    <div className='w-full min-h-72 min-w-[304px] relative'>
      <div className='overflow-hidden'>
        <div className='w-full h-full flex transition-transform duration-500 ease-in-out' 
          style={{ transform: `translateX(-${pictureIndex * 100}%)` }}>
            {pictures.map((picture, index) => (
              <img key={index} src={picture} alt={`Picture ${index + 1}`} className="w-full h-full object-cover cursor-pointer" />
            ))}
        </div>
      </div>
        
      <SliderButton handlerPictureNext={handlerPictureNext} handlerPicturePrevious={handlerPicturePrevious} />
    </div>
  )
}

ProductDisplay.propTypes = {
  pictureIndex: PropTypes.number,
  handlerPicturePrevious: PropTypes.func,
  handlerPictureNext: PropTypes.func
}

export default ProductDisplay