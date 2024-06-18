import MuttnikCard from '@/components/MuttnikCard/MuttnikCard'
import React from 'react'
import * as images from "../../assets"
import ButtonTextImageP from '@/components/ButtonTextImageP/ButtonTextImageP'
import ButtonImageP from '@/components/ButtonImageP/ButtonImageP'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AlpaTrumpCard from '@/components/AlpaTrumpCard/AlpaTrumpCard'
import { Link } from 'react-router-dom'
const leaderboard = [{
  rank: 256,
  user: "You",
  loyalty: "100%",
  points: "14",
}];
for (let i = 1; i <= 10; i++) {
  if (i !== 256) {
    leaderboard.push({
      rank: i,
      user: "Dogelord54",
      loyalty: "100%",
      points: "4526",
    });
  }
}
const alpaTrumpCard = [{
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
  style: "border-4 border-secondary",
  badge: true
},
{
  image: images.trump,
  created_id: "0xErd4512122",
  market: "550k",
  message: 3,
  style: "border-4 border-secondary",
  badge: true
},
{
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
}
]
const Home = () => {
  return (
    <section className='container mx-auto my-10 lg:px-0 px-2'>
      <div className='flex lg:flex-row flex-col items-center gap-4 justify-between'>
        <div className='relative bg_dog border z-[100] w-full xl:w-[40%] lg:w-[50%] md:w-[70%]   rounded-[30px] border-primary lg:p-10 p-5'>
          <h1 className='font-bungee md:text-3xl text-xl'>DOG OF THE DAY</h1>
          <div className='md:w-[90%] w-full m-auto'>
            <MuttnikCard image={images.astrodog} created_id={"0xErd4512122"} market={"550k"} message={3} text="Lorem ipsum dolor si amet. Lorem ipsum dolor si amet Lorem ipsum dolor si amet. Lorem ipsum dolor si amet" value_progress={88} />
          </div>
          <div className='absolute bg-secondary rounded-lg px-7 py-1 top-12 lg:top-20 right-1 lg:right-10'>
            <h1 className='font-bungee text-2xl text-white'>#1</h1>
          </div>
        </div>
        <div className='relative bg_pink border h-[400px] z-[100] w-full xl:w-[55%] lg:w-[50%] md:w-[55%] rounded-[30px] border-primary bg_glass lg:p-10 p-5 '>
          <h1 className='font-bungee md:text-3xl text-xl'>Token Matcher</h1>
        </div>
      </div>
      <div className='relative bg_blue_gradient py-10 border z-[100] w-full my-10 bg_glass rounded-[30px] border-primary lg:p-10 p-5'>
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
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 w-full md:gap-7 gap-5 overflow-y-auto p-5 md:h-[90vh] h-[85vh]'>
            {alpaTrumpCard.map((item, index) => (
              <AlpaTrumpCard key={index} image={item.image} created_id={item.created_id} market={item.market} message={item.message} style={item.style} badge={item.badge} value_progress={88} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col items-center gap-4 justify-between'>
        <div className='relative bg_glass border z-[100] w-full xl:w-[50%] lg:w-[60%] md:w-[55%] bg_blur bg_purple2 rounded-[30px] border-primary lg:p-10 p-5'>
          <h1 className='font-bungee md:text-3xl text-xl'>LEADERBOARD</h1>
          <div className='w-full mt-10'>
            <Table className="border">
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Loyalty</TableHead>
                  <TableHead >Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard.map((item, index) => (
                  <TableRow key={item.rank} className={index === 0 ? 'bg-blue-600' : ''}>
                    <TableCell className="font-medium">{item.rank}</TableCell>
                    <TableCell>{item.user}</TableCell>
                    <TableCell>{item.loyalty}</TableCell>
                    <TableCell>{item.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Link to={"/"} className=''>
              <ButtonTextImageP name={"See all"} img={false} style={"w-[100px] mx-auto mt-10"} />
            </Link>
          </div>
        </div>
        <div className='border h-[400px] z-[100] w-full xl:w-[45%] lg:w-[40%] md:w-[45%] rounded-[30px] border-primary bg_glass lg:p-10 p-5 '>
          <h1 className='font-bungee text-3xl'>Profile</h1>
        </div>
      </div>
    </section>
  )
}

export default Home