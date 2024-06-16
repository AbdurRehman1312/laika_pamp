import MuttnikCard from '@/components/MuttnikCard/MuttnikCard'
import React from 'react'
import * as images from "../../assets"
import ButtonTextImageP from '@/components/ButtonTextImageP/ButtonTextImageP'
import ButtonImageP from '@/components/ButtonImageP/ButtonImageP'

const Home = () => {
  return (
    <section className='container mx-auto my-10'>
      <div className='flex lg:flex-row flex-col items-center gap-4 justify-between'>
        <div className='relative border z-[100] w-full xl:w-[40%] lg:w-[50%] md:w-[70%] bg_dog rounded-[30px] border-primary lg:p-10 p-5'>
          <div className="bg-[#772898] z-[-10] h-[90%] filter_blur rounded-[10px] w-[100%] left-[20%] absolute " />
          <h1 className='font-bungee  text-3xl'>DOG OF THE DAY</h1>
          <MuttnikCard style={"opacity-90"} image={images.astrodog} created_id={"0xErd4512122"} market={"550k"} message={3} />
          <div className='absolute bg-secondary rounded-lg px-7 py-1 top-16 lg:top-20 right-1 lg:right-3'>
            <h1 className='font-bungee text-2xl text-white'>#1</h1>
          </div>
        </div>
        <div className='relative border h-[400px] z-[100] w-full xl:w-[55%] lg:w-[50%] md:w-[55%] rounded-[30px] border-primary bg_glass lg:p-10 p-5 '>
          <div className="bg-[#c140a1] h-[90%] z-[-10] filter_blur rounded-[10px] w-[60%] left-[20%] absolute" />
          <h1 className='font-bungee text-3xl'>Token Matcher</h1>
        </div>
      </div>
      <div className=' border z-[100] w-full my-10 rounded-[30px] border-primary lg:p-10 p-5'>
         <div className=' rounded-[10px] '>
         <h1 className='font-bungee  text-3xl'>latest TOKENS</h1>
         <div className='flex justify-between mt-5'>
          <div className='flex items-center gap-4'>
          <ButtonTextImageP name="favourite" image={images.heart}/>
          <ButtonImageP image={images.gear}/>
          </div>
          <div className='flex items-center gap-4'>
               <input type="text" className='w-full bg-[#060b10] appearance-none border-0 text-lg focus:outline-none py-3 px-3 rounded-[5px]' placeholder='pamptoken...'/>
               <ButtonImageP image={images.arrowr}/>
          </div>
          <div>

          </div>
         </div>
         </div>
      </div>
    </section>
  )
}

export default Home