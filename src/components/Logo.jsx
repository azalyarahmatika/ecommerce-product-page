import Sneakers from '../assets/images/logo.svg'

function Logo() {
  return (
    <div className='h-5 w-fit sm:h-7'>
      <img src={Sneakers} alt="Sneakers Logo" className='h-full object-contain' />
    </div>
  )
}

export default Logo