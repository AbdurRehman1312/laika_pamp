import React, {useState, useEffect} from 'react'

import { Outlet } from 'react-router-dom'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
import Loading from '@/components/Loading/Loading';
function Layout() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            <div className="App">
                {isLoading ? (
                    <Loading />
                        ) : (
                        <><Header /><Outlet /><Footer /></>
                )}
                    </div>

        </>
            )
}

            export default Layout