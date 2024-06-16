import MuttnikCard from '@/components/MuttnikCard/MuttnikCard'
import React from 'react'
import * as images from "../../assets"

const Home = () => {
  return (
    <section className='container mx-auto my-10'>
      <div className='flex md:flex-row flex-col items-center gap-4 justify-between'>
        <div className='relative border z-[100] w-full md:w-[40%] bg_dog rounded-[30px] border-primary lg:p-10 p-5'>
          <div className="bg-[#772898] z-[-10] h-[100%] filter_blur rounded-[10px] w-[100%] left-[20%] absolute " />
          <h1 className='font-bungee  text-3xl'>DOG OF THE DAY</h1>
          <MuttnikCard style={"opacity-90"} image={images.astrodog} created_id={"0xErd4512122"} market={"550k"} message={3}/>
        </div>
        <div className='relative border h-[400px] z-[100] w-full md:w-[55%] rounded-[30px] border-primary bg_glass lg:p-10 p-5 '>
          <div className="bg-[#c140a1] h-[100%] z-[-10] filter_blur rounded-[10px] w-[70%] left-[20%] absolute" />
          <h1 className='font-bungee text-3xl'>Token Matcher</h1>
        </div>
      </div>
    </section>
  )
}

export default Home