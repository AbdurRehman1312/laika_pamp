import React from 'react'

const Home = () => {
  return (
    <section className='container mx-auto my-10'>
      <div className='flex md:flex-row flex-col items-center gap-4 justify-between'>
        <div className='relative border h-[400px] z-[100] w-full md:w-[40%] bg_dog rounded-[30px] border-primary lg:p-10 p-5'>
          <div className="bg-[#531b6b] z-[-10] h-[100%] filter_blur rounded-[10px] w-[100%] left-[20%] absolute" />
          <h1 className='font-bungee  text-3xl'>DOG OF THE DAY</h1>
          <div className='md:w-[90%] w-full m-auto bg_header h-[250px] bg_black_gradient mt-5 rounded-[30px]'>

          </div>
        </div>
        <div className='relative border h-[400px] z-[100] w-full md:w-[55%] rounded-[30px] border-primary bg_glass lg:p-10 p-5 '>
          <div className="bg-[#7e2d6a] h-[100%] z-[-10] filter_blur rounded-[10px] w-[80%] absolute" />
          <h1 className='font-bungee text-3xl'>Token Matcher</h1>
        </div>
      </div>
    </section>
  )
}

export default Home