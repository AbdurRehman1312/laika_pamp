import React, { useState } from 'react'
import * as images from "../../assets"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import ButtonTextP from '@/components/ButtonTextP/ButtonTextP';
const BuySellTabs = () => {
    const [activeTab, setActiveTab] = useState("buy");
    const [inputValue, setInputValue] = useState("");
    const handleSetInputValue = (value) => {
        setInputValue(value);
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
                        <ButtonTextP name={"Pamp it"} style={"w-full py-3"} />
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
        </Tabs>
    )
}

export default BuySellTabs