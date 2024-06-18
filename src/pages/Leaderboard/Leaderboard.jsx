import React from 'react'
import LeaderBoardTable from '@/components/LeaderBoardTable/LeaderBoardTable'

const Leaderboard = () => {
 
    return (
        <section className='container relative mx-auto my-16 lg-px-0 px-2'>
            <LeaderBoardTable leaderboardLength={20} style={"bg_conic"} />
        </section>
    )
}

export default Leaderboard