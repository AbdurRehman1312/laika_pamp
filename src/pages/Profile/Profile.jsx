import ProfileMain from '@/components/ProfileMain/ProfileMain'
import React from 'react'
import * as images from "../../assets"
const Profile = () => {
    return (
        <section className='container relative mx-auto lg:my-24 my-16 lg-px-0 px-2'>
            <div className="bg_glass bg_conic border z-[100]  w-full md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5">
                <h1 className='font-bungee md:text-3xl text-xl'>Your Profile</h1>
                <div className='w-full flex justify-center mt-10'>
                <div className='w-full md:w-[75%] lg:w-[60%] xl:w-[50%]'>
                    <ProfileMain image={images.dp} username={"DipUser456"} profile_id={"1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71"} points={5400} rank={"#42/352"} like={3} message={0} profile={1}/>
                </div>
                </div>
               
            </div>
        </section>
    )
}

export default Profile