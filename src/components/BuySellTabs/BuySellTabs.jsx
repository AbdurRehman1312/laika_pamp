import React, { useState } from 'react'
import * as images from "../../assets"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import ButtonTextP from '@/components/ButtonTextP/ButtonTextP';
const BuySellTabs = () => {
    const [activeTab, setActiveTab] = useState("buy");
    const [inputValue, setInputValue] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const handleSetInputValue = (value) => {
        setInputValue(value);
    };
    const renderPopup = () => {
        setShowPopup(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setShowPopup(false);
        document.body.style.overflow = 'auto';
    };

    const handlePopupClick = (e) => {
        e.stopPropagation();
    };

    return (
        <Tabs defaultValue="buy" className="w-full px-2" onValueChange={(value) => setActiveTab(value)}>
            <TabsList>
                <TabsTrigger value="buy" className="rounded-l-[15px]"
                    isActive={activeTab === "buy"}>Buy</TabsTrigger>
                <TabsTrigger value="sell" className="rounded-r-[15px]" isActive={activeTab === "sell"}>Sell</TabsTrigger>
            </TabsList>
            <TabsContent value="buy">
                <form action="">
                    <div className='flex justify-between items-center mt-7'>
                        <p className="text-white md:text-base text-sm">Your Bid</p>
                        <div className='flex items-center gap-2 opacity-50'>
                            <span className='md:text-base text-sm'>slippage: 0.1%</span>
                            <img src={images.gear} alt="" className='w-5' />
                        </div>
                    </div>
                    <div className='relative'>
                        <Input type="number" id="laika" value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} placeholder="0.0" className="bg_glass2 mt-3 border-0 md:text-lg text-base rounded-xl py-6 w-full" />
                        <div className='flex items-center gap-2 absolute top-[23%] right-3'>
                            <p className='m-0 p-0 md:text-base text-sm'>LAIKA</p>
                            <img src={images.laika} className='w-5' alt="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 text-center mt-7 items-center ">
                        <Toggle aria-label="Toggle italic" className="text-primary text-sm hover:bg-primary hover:text-white w-[25%] border-2 border-primary rounded-[10px] py-5" onClick={() => handleSetInputValue("10")}>
                            10 LAIKA
                        </Toggle>
                        <Toggle aria-label="Toggle italic" className="text-primary text-sm hover:bg-primary hover:text-white w-[25%] border-2 border-primary rounded-[10px] py-5" onClick={() => handleSetInputValue("100")}>
                            100 LAIKA
                        </Toggle>
                        <Toggle aria-label="Toggle italic" className="text-primary text-sm hover:bg-primary hover:text-white w-[25%] border-2 border-primary rounded-[10px] py-5" onClick={() => handleSetInputValue("500")}>
                            500 LAIKA
                        </Toggle>
                        <Toggle aria-label="Toggle italic" className="text-primary text-sm hover:bg-primary hover:text-white w-[25%] border-2 border-primary rounded-[10px] py-5" onClick={() => handleSetInputValue("1000")}>
                            1K LAIKA
                        </Toggle>
                    </div>
                    <div className='mt-7'>
                        <p className='text-gray-300'>Estimated token</p>
                        <p className='text-gray-300'>5964,15 MUTT</p>
                    </div>
                    <div className='w-full mt-7'>
                        <ButtonTextP name={"Pamp it"} style={"w-full py-3"} onClick={renderPopup} />
                    </div>
                </form>
            </TabsContent>
            <TabsContent value="sell">
                <form action="">
                    <div className='flex justify-between items-center mt-7'>
                        <p className="text-white md:text-base text-sm">Your Bid</p>
                        <div className='flex items-center gap-2 opacity-50'>
                            <span className='md:text-base text-sm'>slippage: 0.1%</span>
                            <img src={images.gear} alt="" className='w-5' />
                        </div>
                    </div>
                    <div className='relative'>
                        <Input type="number" id="laika" value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} placeholder="0.0" className="bg_glass2 mt-3 border-0 md:text-lg text-base rounded-xl py-6 w-full" />
                        <div className='flex items-center gap-2 absolute top-[23%] right-3'>
                            <p className='m-0 p-0 md:text-base text-sm'>LAIKA</p>
                            <img src={images.laika} className='w-5' alt="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 text-center mt-7 items-center ">
                        <Toggle aria-label="Toggle italic" className="text-primary text-sm hover:bg-primary hover:text-white w-[25%] border-2 border-primary rounded-[10px] py-5" onClick={() => handleSetInputValue("10")}>
                            10 LAIKA
                        </Toggle>
                        <Toggle aria-label="Toggle italic" className="text-primary text-sm hover:bg-primary hover:text-white w-[25%] border-2 border-primary rounded-[10px] py-5" onClick={() => handleSetInputValue("100")}>
                            100 LAIKA
                        </Toggle>
                        <Toggle aria-label="Toggle italic" className="text-primary text-sm hover:bg-primary hover:text-white w-[25%] border-2 border-primary rounded-[10px] py-5" onClick={() => handleSetInputValue("500")}>
                            500 LAIKA
                        </Toggle>
                        <Toggle aria-label="Toggle italic" className="text-primary text-sm hover:bg-primary hover:text-white w-[25%] border-2 border-primary rounded-[10px] py-5" onClick={() => handleSetInputValue("1000")}>
                            1K LAIKA
                        </Toggle>
                    </div>
                    <div className='mt-7'>
                        <p className='text-gray-300'>Estimated token</p>
                        <p className='text-gray-300'>5964,15 MUTT</p>
                    </div>
                    <div className='w-full mt-7'>
                        <ButtonTextP name={"Pamp it"} style={"w-full py-3"} />
                    </div>
                </form>
            </TabsContent>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center  z-[1000]" onClick={closePopup}>
                    <div className="bg-[#191919] py-6 px-7 z-[300] md:w-[40%] rounded-[20px]" onClick={handlePopupClick}>
                        <div className="flex flex-col items-center gap-5">

                            <h2 className="text-white font-bold text-2xl">Waiting for TX</h2>


                            <div role="status">
                                <svg aria-hidden="true" class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-[#e1479a]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </Tabs>

    )
}

export default BuySellTabs