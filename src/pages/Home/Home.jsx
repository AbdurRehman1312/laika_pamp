import MuttnikCard from '@/components/MuttnikCard/MuttnikCard'
import React from 'react'
import * as images from "../../assets"
import ButtonTextImageP from '@/components/ButtonTextImageP/ButtonTextImageP'
import ButtonImageP from '@/components/ButtonImageP/ButtonImageP'
import LeaderBoardTable from '@/components/LeaderBoardTable/LeaderBoardTable'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import AlpaTrumpCard from '@/components/AlpaTrumpCard/AlpaTrumpCard'
import ProfileCard from '@/components/ProfileCard/ProfileCard'
import TokenCard from '@/components/TokenCard/TokenCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const alpaTrumpCard = [{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
  style: "border-4 border-secondary",
  badge: true
},
{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
  style: "border-4 border-secondary",
  badge: true
},
{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
},
{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
},
{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
},
{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
},
{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
},
{
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3
},
{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
},
{
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
},
{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
},
{
  text: "AlpaTrump",
  symbol: "[$ALPT]",
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
}
]
const Home = () => {
  return (
    <section className='container mx-auto my-10 lg:px-0 px-2'>
      <div className='flex lg:flex-row flex-col items-center gap-4 justify-between my-16'>
        <div className='relative bg_dog border z-[100] w-full xl:w-[40%] lg:w-[50%] md:w-[70%] rounded-[30px] border-primary lg:p-10 p-5'>
          <h1 className='font-bungee md:text-3xl text-xl'>DOG OF THE DAY</h1>
          <div className='md:w-[90%] w-full m-auto lg:my-8 xl:my-16 my-0'>
            <MuttnikCard image={images.astrodog} created_id={"0xErd4512122"} market={"550k"} message={3} text="Lorem ipsum dolor si amet. Lorem ipsum dolor si amet Lorem ipsum dolor si amet. Lorem ipsum dolor si amet" value_progress={88} />
          </div>
          <div className='absolute bg-secondary rounded-lg md:px-7 px-5 py-1 top-12 md:top-14 lg:top-32 right-1 lg:right-10'>
            <h1 className='font-bungee md:text-2xl text-lg text-white'>#1</h1>
          </div>
        </div>
        <div className='relative bg_pink border z-[100] w-full xl:w-[55%] lg:w-[50%] md:w-[55%] rounded-[30px] border-primary bg_glass lg:p-10 p-5 '>
          <h1 className='font-bungee md:text-3xl text-xl'>Token Matcher</h1>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <TokenCard />
              </CarouselItem>
              <CarouselItem>
                <TokenCard />
              </CarouselItem>
              <CarouselItem>
                <TokenCard />
              </CarouselItem>
              <CarouselItem>
                <TokenCard />
              </CarouselItem>
              <CarouselItem>
                <TokenCard />
              </CarouselItem>
            </CarouselContent>
            <div className='flex lg:hidden justify-center items-center gap-3 mt-5'>
              <div className='flex flex-col items-center gap-1'>
                <CarouselPrevious />
                <p className='font-bungee mt-2'>Fuck No!</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <CarouselNext />
                <p className='font-bungee mt-2'>Yes Please!</p>
              </div>
            </div>
            <div className='absolute top-[40%] left-[5%] lg:flex hidden flex-col items-center'>
              <CarouselPrevious className="" />
              <p className='font-bungee mt-2'>FUCK NO.</p>
            </div>
            <div className='absolute top-[40%] lg:right-[-10px] xl:right-[5%] lg:flex hidden flex-col items-center'>
              <CarouselNext />
              <p className='font-bungee mt-2'>Yes Please!</p>
            </div>

          </Carousel>
        </div>
      </div>
      <div className='relative bg_blue_gradient my-16 py-10 border z-[100] w-full bg_glass rounded-[30px] border-primary lg:p-10 p-5'>
        <div className=' rounded-[10px] relative z-10 '>
          <h1 className='font-bungee md:text-3xl text-xl'>latest TOKENS</h1>
          <div className='flex justify-between lg:flex-row flex-col items-center mt-5 lg:gap-16 gap-6 '>
            <div className='flex items-center gap-4'>
              <ButtonTextImageP name="favourite" image={images.heart} />
              <ButtonImageP image={images.gear} />
            </div>
            <div className='flex flex-1 items-center gap-4'>
              <input type="text" className='w-full bg-black appearance-none border-0 md:text-lg text-sm focus:outline-none md:p-4 p-2.5 md:rounded-[15px] rounded-md' placeholder='pamptoken...' />
              <ButtonImageP image={images.arrowr} />
            </div>
            <div className='flex gap-3 items-center'>
              <Select>
                <SelectTrigger className=" bg-[#4563ff] border-0 md:py-4 md:px-3 py-2 px-1.5 text-sm lg:text-base md:rounded-[10px] rounded-md">
                  <SelectValue placeholder="sort: pamp order" />
                </SelectTrigger>
                <SelectContent className="bg-[#4563ff] border-0 z-50">
                  <SelectItem value="pamp order">sort: pamp order</SelectItem>
                  <SelectItem value="r">sort: pamp order</SelectItem>
                </SelectContent>
              </Select>
              <Select className="z-30">
                <SelectTrigger className=" md:py-4 md:px-3 py-2 px-1.5 text-sm lg:text-base md:rounded-[10px] rounded-md">
                  <SelectValue placeholder="order: desc" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="desc">desc</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-10 w-full md:gap-7 gap-5 overflow-y-auto p-5 md:h-[90vh] h-[85vh] xl:h-[110vh]'>
            {alpaTrumpCard.map((item, index) => (
              <AlpaTrumpCard text={item.text} symbol={item.symbol} key={index} image={item.image} created_id={item.created_id} market={item.market} message={item.message} style={item.style} badge={item.badge} value_progress={88} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col items-start gap-4 justify-between'>
        <div className='relative w-full xl:w-[50%] lg:w-[45%]'>
          <LeaderBoardTable leaderboardLength={10} style={"bg_purple2"} all={true} date={false} />
        </div>
        <div className='border  z-[100] w-full xl:w-[45%] lg:w-[55%]  rounded-[30px] border-primary bg_glass lg:p-10 p-5 '>
          <h1 className='font-bungee md:text-3xl text-xl'>Profile</h1>
          <div className='mt-8'>
            <ProfileCard image={images.dp} username={"DipUser456"} profile_id={"1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71"} points={5400} rank={"#42/352"} like={2} message={0} profile={1} style={"bg-[#050809]"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home