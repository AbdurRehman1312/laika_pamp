import React, { useState } from 'react';
import * as images from "../../assets"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import Comment from '@/components/Comment/Comment';
import ButtonImageP from '@/components/ButtonImageP/ButtonImageP';
import BuySellTabs from '@/components/BuySellTabs/BuySellTabs';

const comments = [
    {
        userid: "0xErd4512122",
        userimg: "userdp",
        time: "22:00:54",
        likes: 2,
        msg: "We need much more fun on this token!"
    },
    {
        userid: "0xDrf1d...",
        userimg: "userdp",
        time: "22:00:54",
        likes: 1928,
        msg: "Wow this MUTT pamp is huge!!!"
    },
]
const PampIt = () => {
    const holders = [
        { address: '0xErd45...', percentage: 36 },
        { address: '0xErd45...', percentage: 23 },
        { address: '0xErd45...', percentage: 12 },
        { address: '0xErd45...', percentage: 36 },
        { address: '0xErd45...', percentage: 23 },
        { address: '0xErd45...', percentage: 12 },
        { address: '0xErd45...', percentage: 36 },
        { address: '0xErd45...', percentage: 23 },
        { address: '0xErd45...', percentage: 12 },
        { address: '0xErd45...', percentage: 36 },
        { address: '0xErd45...', percentage: 23 },
        { address: '0xErd45...', percentage: 12 },
    ];

    // State to manage visibility of additional holder items
    const [visibleItems, setVisibleItems] = useState(9);

    // Function to show more items
    const showMoreItems = () => {
        setVisibleItems(holders.length); // Set visible items to the total length of holders
    };

    // Function to show less items
    const showLessItems = () => {
        setVisibleItems(9); // Reset visible items to initial state
    };

    React.useEffect(() => {
        const container = document.querySelector(".tradingview-widget-container__widget");
        let isScriptLoaded = container.querySelector("script");
        if (!isScriptLoaded) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
            script.async = true;
            script.type = 'text/javascript';
            script.innerHTML = JSON.stringify({
                "autosize": true,
                "symbol": "NASDAQ:AAPL",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "1",
                "locale": "en",
                "withdateranges": true,
                "range": "YTD",
                "hide_side_toolbar": false,
                "allow_symbol_change": true,
                "details": true,
                "hotlist": true,
                "calendar": false,
                "show_popup_button": true,
                "popup_width": "1000",
                "popup_height": "650",
                "support_host": "https://www.tradingview.com"
            });
            container.appendChild(script);

            return () => {
                if (container.contains(script)) {
                    container.removeChild(script);
                }
            };
        }
    }, []);

    return (
        <>
            <section className='container relative mx-auto lg:my-24 my-16 lg-px-0 px-2'>
                <div className="bg_glass bg_purple border z-[100] w-full md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5">
                    <div className='flex justify-between md:flex-row flex-col items-start md:items-center'>
                        <div className='flex items-center gap-3'>
                            <div className='w-[60px] h-[60px] rounded-full flex-shrink-0'>
                                <img src={images.astrodog} alt="" className='w-full h-[100%] object-cover rounded-full' />
                            </div>
                            <h1 className='md:text-2xl text-lg text-white font-medium'>Muttnik the dog <span className='text-[#e9e8ea] font-light'>[$MUTT]</span></h1>
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col md:gap-5 md:mt-0 mt-3'>
                            <p className='md:text-xl text-sm text-[#e9e8ea]'>market cap: <span className='font-semibold text-primary'>$550 345,15</span></p>
                            <div className='flex items-center gap-1'><p className='md:text-xl text-sm text-[#e9e8ea] '>created by </p><p className='font-semibold text-white md:text-xl text-sm custom_text'> 0xErd45...</p></div>
                        </div>
                    </div>
                    <div className='flex justify-between gap-3 md:flex-row flex-col mt-10'>
                        <div className='md:w-[65%] w-full'>
                            <div className="tradingview-widget-container">
                                <div className="tradingview-widget-container__widget w-full h-[60vh]">
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[35%] bg_glass flex flex-col justify-center border z-[100] w-full md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5'>
                            <BuySellTabs />
                        </div>
                    </div>
                </div>
            </section>
            <section className='container relative mx-auto lg:my-24 my-16 lg-px-0 px-2 mt-10'>
                <div className=' bg_glass bg_conic border z-[100] w-full md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5 flex flex-col gap-3'>
                    <h1 className='font-bungee md:text-3xl text-xl text-center'>LETS PAMP IT!</h1>
                    <p className='text-center md:text-base text-sm'>bonding curve progress: 81%</p>
                    <Progress value={81} className="w-[80%] m-auto" id="pamp" />
                    <p className='text-center md:text-base text-sm'>run ‘till: 1d 13h</p>
                </div>
                <div className='text-center mt-10 md:w-[80%] md:text-base text-sm w-full m-auto'>
                    <p>When the market cap hits $70,425, all liquidity from the bonding curve will be transferred to Raydium and permanently removed. As the price climbs, the progress intensifies.
                        <br /><br />
                        Currently, there are 155,276,839 tokens available for purchase through the bonding curve, with a total of 15 000 LAIKA held within it.</p>
                </div>

            </section>
            <section className='container relative mx-auto lg:my-24 my-16 lg-px-0 px-2 mt-10 flex md:flex-row flex-col justify-between gap-5'>
                <div className='bg_glass bg_conic flex justify-between gap-4  md:w-[40%] w-full  border z-[100] md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5  flex-col '>
                    <div className=' '>
                        <img src={images.muttman} alt="" className='rounded-[30px]' />
                        <div className='flex justify-center gap-5 items-center flex-wrap mt-7'>
                            <a href="" className='bg-[#232323] py-2 px-5 md:text-base text-sm flex items-center gap-3 rounded-[10px]'>
                                <img src={images.twitter_or} alt="" className='w-4' />
                                Twitter
                            </a>
                            <a href="" className='bg-[#232323] py-2 px-5 md:text-base text-sm flex items-center gap-3 rounded-[10px]'>
                                <img src={images.globe_or} alt="" className='w-4' />
                                Website
                            </a>
                            <a href="" className='bg-[#232323] py-2 px-5 md:text-base text-sm flex items-center gap-3 rounded-[10px]'>
                                <img src={images.telegram_or} alt="" className='w-4' />
                                Telegram
                            </a>
                        </div>
                        <div className='flex items-center gap-10 mt-7'>
                            <img src={images.astrodog} alt="" className='w-20' />
                            <div className='flex flex-col gap-2'>
                                <h1 className=' text-lg text-white font-medium'>Muttnik the dog <span className='text-[#e9e8ea] font-light'>[$MUTT]</span></h1>
                                <div className='flex items-center gap-1'><p className=' text-sm text-[#e9e8ea] '>created by </p><p className='font-semibold text-white  text-sm custom_text'> 0xErd45...</p></div>
                                <p className=' text-sm text-[#e9e8ea]'>market cap: <span className='font-semibold'>$550 345,15</span></p>
                            </div>
                        </div>
                        <div className='mt-7'>
                            <p className='md:text-base text-sm text-gray-300'><span className='font-semibold'>Description:</span> Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. </p>
                        </div>
                        <button className='flex items-center gap-2 text-primary mx-auto mt-5 md:text-base text-sm'>
                            <img src={images.likeheart} alt="" className='w-5' />
                            Add to favourite
                        </button>
                    </div>
                </div>
                <div className='flex flex-col md:gap-10 gap-5 md:w-[60%] w-full'>
                    <div className=' bg_glass border z-[100] md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5'>
                        <h1 className='font-bungee md:text-2xl text-xl'>holder distribution</h1>
                        <div className='mt-5'>
                            <p className='text-end'>distribution sniffer: <span className='text-[#99FF75]'>seems pretty fair</span></p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
                            {holders.slice(0, visibleItems).map((holder, index) => (
                                <div key={index} className='flex justify-between items-center p-2'>
                                    <p className='text-white custom_text2'>{index + 1}. {holder.address} {holder.percentage}%</p>
                                    <p>{holder.percentage}%</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={visibleItems > 9 ? showLessItems : showMoreItems} className='text-gray-300 mx-auto underline text-center block mt-4'>
                            {visibleItems > 9 ? 'See Less' : 'See More'}
                        </button>
                    </div>
                    <div className=' bg_glass border z-[100] md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bungee md:text-2xl text-xl'>what’s the pleb sayin’?</h1>
                            <Link to={"/"} className='md:text-base text-sm text-nowrap'>See Trades</Link>
                        </div>
                        <div className='flex flex-col gap-1'>
                            {comments.map((comment, index) => (
                                <Comment key={index} {...comment} />
                            ))}
                            <div className='relative'>
                                <Input type="text" id="comment" placeholder="Write a comment" className="bg_glass2 mt-3 border-0 md:text-lg text-base rounded-[10px] py-8 placeholder:px-10 w-full" />

                                <ButtonImageP image={images.arrowr} style={"w-[40px] md:p-2 md:py-3 flex justify-center absolute md:top-[30%] top-[28%] right-3 "} />

                                <div className='flex items-center gap-2 absolute top-[38%] left-3'>
                                    <img src={images.userdp} alt="" className='w-8' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default PampIt;
