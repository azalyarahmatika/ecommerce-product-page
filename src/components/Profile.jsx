import Avatar from '../assets/images/image-avatar.png'

function Profile() {
  return(
    <div className='h-7 w-fit sm:h-9 md:h-10 lg:h-12 rounded-full border-2 border-transparent hover:border-orange cursor-pointer transition ease-in-out delay-150'>
      <img src={Avatar} alt="Profile Picture" className='h-full object-contain' />
    </div>
  )
}

export default Profile