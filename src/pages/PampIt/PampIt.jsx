import React from 'react';

const PampIt = () => {
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
        <section className='container relative mx-auto lg:my-24 my-16 lg-px-0 px-2'>
            <div className="bg_glass bg_conic border z-[100] w-full md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5">
                <div className='flex justify-between gap-3 md:flex-row flex-col'>
                    <div className='md:w-[60%] w-full'>
                        <div className="tradingview-widget-container">
                            <div className="tradingview-widget-container__widget w-full h-[50vh]">
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[40%] bg_glass border z-[100] h-[50vh] w-full md:rounded-[40px] rounded-[30px] border-primary lg:p-10 p-5'>
                        <div className="tradingview-widget-container">
                            <div className="tradingview-widget-container__widget w-full h-[50vh]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PampIt;
