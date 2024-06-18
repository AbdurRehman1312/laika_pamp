import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from 'react-router-dom';
import ButtonTextImageP from '../ButtonTextImageP/ButtonTextImageP';

const LeaderBoardTable = ({ date = true, leaderboardLength, style, all = false }) => {
    const leaderboard = [{
        rank: 256,
        user: "You",
        loyalty: "100%",
        points: "14",
    }];
    for (let i = 1; i <= leaderboardLength; i++) {
        if (i !== 256) {
            leaderboard.push({
                rank: i,
                user: "Dogelord54",
                loyalty: "100%",
                points: "4526",
            });
        }
    }
    return (
        <div className={`bg_glass border z-[100] w-full rounded-[30px] border-primary lg:p-10 p-5 ${style}`}>
            <h1 className='font-bungee md:text-3xl text-xl'>LEADERBOARD</h1>
            {date && <p className='md:text-lg text-sm text-gray-400'>June 12th, 2024<span className='text-gray-400 mx-3'>8:26</span></p>}
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
                {all && <Link to={"/leaderboard"} className=''>
                    <ButtonTextImageP name={"See all"} img={false} style={"w-[100px] mx-auto mt-10"} />
                </Link>}
            </div>
        </div>
    )
}

export default LeaderBoardTable