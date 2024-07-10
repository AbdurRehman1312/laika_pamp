import React, { useState } from 'react'
import ProfileAlpaCard from '../ProfileAlpaCard/ProfileAlpaCard';
import * as images from "../../assets"
import ProfileCard from '@/components/ProfileCard/ProfileCard'

const coins_card = [
    {
        text: "AlpaTrump",
        symbol: "$ALPT",
        image: images.trump,
        token_number: "6543213",
        network_number: "254,35",
        network_name: "DOGE",
        style: "sm;gap-0 gap-5",
    },
    {
        text: "AlpaTrump",
        symbol: "$ALPT",
        image: images.trump,
        token_number: "6543213",
        network_number: "254,35",
        network_name: "DOGE",
        style: "sm;gap-0 gap-5",
    },
    {
        text: "AlpaTrump",
        symbol: "$ALPT",
        image: images.trump,
        token_number: "6543213",
        network_number: "254,35",
        network_name: "DOGE",
        style: "sm;gap-0 gap-5",
    },
]

const coins_created_card = [
    {
        text: "AlpaTrump",
        symbol: "$ALPT",
        image: images.trump,
        token_number: "6543213",
        network_number: "254,35",
        network_name: "DOGE",
        style: "sm;gap-0 gap-5",
    },
]

const followers_card = [{
    username: "DipUser456",
    image: images.dp,
    profile_id: "1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71",
    points: 5400,
    rank: "#42/352",
    like: 3,
    message: 0,
    profile: 1,
    style: "mb-3 bg-[#141e31]",
    style_2: "flex-wrap lg:flex-nowrap"
},
{
    username: "DipUser456",
    image: images.dp,
    profile_id: "1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71",
    points: 5400,
    rank: "#42/352",
    like: 3,
    message: 0,
    profile: 1,
    style: "mb-3 bg-[#141e31]",
    style_2: "flex-wrap lg:flex-nowrap"
}]

const following_card = [{
    username: "DipUser456",
    image: images.dp,
    profile_id: "1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71",
    points: 5400,
    rank: "#42/352",
    like: 3,
    message: 0,
    profile: 1,
    style: "mb-3 bg-[#141e31]",
    style_2: "flex-wrap lg:flex-nowrap"
},
]

const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState("Coins");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const renderContent = () => {
        switch (activeTab) {
            case "Coins":
                return (
                    <>
                        <div className='overflow-y-auto p-5 h-[50vh]'>
                            {coins_card.map((item, index) => (
                                <ProfileAlpaCard text={item.text} symbol={item.symbol} key={index} token_number={item.token_number} network_name={item.network_name} network_number={item.network_number} image={item.image} style={item.style} />
                            ))}
                        </div>
                    </>
                );
            case "CoinsCreated":
                return (
                    <>
                        <div className='overflow-y-auto p-5 h-[50vh]'>
                            {coins_created_card.map((item, index) => (
                                <ProfileAlpaCard text={item.text} symbol={item.symbol} key={index} token_number={item.token_number} network_name={item.network_name} network_number={item.network_number} image={item.image} style={item.style} style_2={item.style_2} />
                            ))}
                        </div>

                    </>
                );
            case "Followers":
                return (
                    <>
                        <div className='overflow-y-auto p-5 h-[50vh]'>
                            {followers_card.map((item, index) => (
                                <ProfileCard image={item.image} username={item.username} key={index} profile_id={item.profile_id} points={item.points} rank={item.rank} like={item.like} message={item.message} profile={item.profile} style={item.style} style_2={item.style_2} />
                            ))}
                        </div>
                    </>
                );
            case "Following":
                return (
                    <>
                        <div className='overflow-y-auto p-5 h-[50vh]'>
                            {following_card.map((item, index) => (
                                <ProfileCard image={item.image} username={item.username} key={index} profile_id={item.profile_id} points={item.points} rank={item.rank} like={item.like} message={item.message} profile={item.profile} style={item.style} style_2={item.style_2} />
                            ))}
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 text-center  items-center ">
                <div>
                    <button
                        className={` text-sm xl:text-base px-6 rounded-lg py-2 text-nowrap ${activeTab === "Coins"
                            ? "bg-[#4563ff] border-0"
                            : " text-white border border-white"
                            }`}
                        onClick={() => handleTabClick("Coins")}
                    >
                        Coins
                    </button>
                </div>


                <button
                    className={` text-sm xl:text-base text-nowrap px-6 rounded-lg py-2  ${activeTab === "CoinsCreated"
                        ? "bg-[#4563ff] border-0"
                        : " text-white border border-white"
                        }`}
                    onClick={() => handleTabClick("CoinsCreated")}
                >
                    Coins created
                </button>

                <div>
                    <button
                        className={` text-sm xl:text-base px-6 rounded-lg py-2 text-nowrap ${activeTab === "Followers"
                            ? "bg-[#4563ff] border-0"
                            : " text-white border border-white"
                            }`}
                        onClick={() => handleTabClick("Followers")}
                    >
                        Followers
                    </button>
                </div>
                <div>
                    <button
                        className={` text-sm xl:text-base px-6 rounded-lg py-2 text-nowrap ${activeTab === "Following"
                            ? "bg-[#4563ff] border-0"
                            : " text-white border border-white"
                            }`}
                        onClick={() => handleTabClick("Following")}
                    >
                        Following
                    </button>
                </div>
            </div>
            <div className="mt-10">
                {renderContent()}
            </div>
        </>
    )
}

export default ProfileTabs