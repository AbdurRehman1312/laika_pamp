import React, {useState} from 'react'
import * as images from "../../assets"
import ProfileTabs from '../ProfileTabs/ProfileTabs'
import ButtonTextP from '../ButtonTextP/ButtonTextP';
const ProfileMain = ({ username, profile_id, points, rank, like, message, profile, image }) => {
    const [showPopup, setShowPopup] = useState(false);
    function closePopup() {
        setShowPopup(false);
        document.body.classList.remove("popup-open");
      }
    return (
        <>
          <div className='bg_glass2  rounded-3xl py-5 px-6'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div className='rounded-[50%] flex-shrink-0'>
                        <img src={image} alt="" className='w-14 lg:w-16' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='text-lg  font-medium'>{username}</h1>
                        <p className='text-base text-gray-400  custom_text2 font-light'>{profile_id}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=> setShowPopup(true)}><img src={images.edit} alt="" className='w-6' /></button>
                </div>
            </div>


            <div className='mt-5 flex items-center  gap-10'>
                <div className='flex flex-col items-start'>
                    <h1 className='font-bungee text-sm sm:text-lg text-nowrap'>{points} pts</h1>
                    <h1 className='text-sm sm:text-lg mt-1'>Rank: <span className='font-bungee  '>{rank}</span></h1>
                </div>
                <div className='flex items-center  gap-5'>
                    <div className='flex items-center gap-2'>
                        <img src={images.heart} alt="" className='md:w-5 w-4' />
                        <p className='text-white font-medium text-sm md:text-lg'>{like}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={images.msg} alt="" className='md:w-4 w-3' />
                        <p className='text-white font-medium text-sm md:text-lg'>{message}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={images.profile} alt="" className='md:w-4 w-3' />
                        <p className='text-white font-medium text-sm md:text-lg'>{profile}</p>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <ProfileTabs />
            </div>
        </div>
        {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black bg-opacity-60">
              <div className="bg-[#111011] border-4 border-[#2644ae] py-10 px-8 z-[300] rounded-[30px] md:w-[70%] lg:w-[60%] xl:w-[45%]">
                <h1 className='font-bungee md:text-3xl text-xl'>Profile</h1>
                <div className='mt-7 flex items-center gap-5'>
                    <h1 className='font-semibold text-sm sm:text-lg'>Profile Picture</h1>
                    <div>
                        <div className='relative'>
                            <img src={images.dp} alt="" className='w-14 sm:w-16' />
                            <div className='absolute bottom-[-10px] right-[-10px]'>
                                <button><img src={images.edit} alt="" className='w-6 sm:w-7' /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-7 flex items-center gap-5'>
                <h1 className='font-semibold text-sm sm:text-lg'>Username</h1>
                <input type="text" className='w-[60%] bg-[#222222] appearance-none border-0 md:text-lg text-sm focus:outline-none md:p-4 p-2.5 md:rounded-[15px] rounded-md ' placeholder='pamptoken...' />
                </div>
                <div className='mt-10 flex justify-center'>
                    <ButtonTextP name={"Save changes"} style={" px-6  py-3 sm:px-10 sm:py-4 text-base sm:text-xl"} onClick={closePopup}/>
                </div>
              </div>
            </div>
          )}
        </>
      
    )
}

export default ProfileMain