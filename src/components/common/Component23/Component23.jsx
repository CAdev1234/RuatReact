import {
    BsChevronRight,
    MdThumbUpAlt,
    MdThumbUpOffAlt,
    MdThumbDownOffAlt,
    MdThumbDownAlt,
    BsCalendarEvent,
    BsFillBellFill,
    BsBoxArrowUpRight,
    TrendingSvg,
    CrownSvg,
    IoTrendingUpSharp,
    IoTrendingDownSharp,
    MdQuestionAnswer,
    CoinSearchSvg

} from '../../icon/IconImage'

const Component23 = () => {
    
    let link_li = [
        { title: 'Website', link: '' },
        { title: 'Exchange', link: '' },
        { title: 'Source', link: '' },
        { title: 'Website', link: '' },
    ]

    let heading_card_li = [
        { tradeUp: 386, tradeDown: 28, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { tradeUp: 560, tradeDown: 56, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { tradeUp: 490, tradeDown: 32, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
    ]

    return (
        <div className="text-black dark:text-white">
            <div className="flex items-center text-sm leading-normal">
                <div className="text-c_6E7582">Menu</div>
                <BsChevronRight className="mx-2 text-c_6E7582 text-8px stroke-1"/>
                <div className="text-c_6E7582">Submenu 01</div>
                <BsChevronRight className="mx-2 text-c_6E7582 text-8px stroke-1"/>
                <div className="font-semibold">Title 01</div>
            </div>
            
            <div className="flex
                            mt-4 sm:mt-8">
                <div className="flex flex-col flex-1">
                    <div className="flex items-start text-xs leading-normal">
                        <span><strong>Note</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                    </div>
                    
                    <div className={`rounded-md max-w-3xl text-xs
                                    bg-white text-black dark:bg-gray-900 dark:text-white
                                    shadow-card dark:shadow-dark_card
                                    mt-5 lg:mt-auto
                                    mb-7 lg:mb-auto`}>
                        <div className="flex w-full">
                            <div className="px-7_5 py-4_5 flex-1 border-r-2
                                            border-c_F2F2F2 dark:border-dark_0fc9f2">
                                <div className="flex">
                                    <div className="bg-c_F2F2F2 rounded-full
                                                    w-20 sm:w-25 
                                                    h-20 sm:h-25
                                                    mr-6 sm:mr-8"></div>
                                    <div className="flex flex-col">
                                        <div className="font-bold leading-normal
                                                        text-xs sm:text-sm">Title 1</div>
                                        <div className="flex items-center leading-normal
                                                        text-10px sm:text-sm">
                                            <div>$0.000000 (</div>
                                            <div className="text-c_C85151">-16.38%</div>
                                            <div>)</div>
                                        </div>
                                        <div className="font-semibold leading-normal mt-auto
                                                        text-c_1564C0 dark:text-dark_0fc9f2">07 Sep 2021</div>
                                        <div className="font-bold text-sm leading-snug">Heading 1</div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="flex items-center font-semibold leading-none mt-3">
                                    <div className="flex items-center leading-normal mr-8">
                                        <div>92%</div>
                                        <div className="h-5 w-0.5 bg-gray-300 mx-2"></div>
                                        <div>391 Votes</div>
                                    </div>
                                    <div className="bg-gray-100 flex-1 h-1.5 rounded-full relative">
                                        <div className="absolute h-full bg-c_EBE188 dark:bg-dark_FFEB3B rounded-full" style={{width: `92%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col
                                            w-15 sm:w-22_5">
                                <div className="h-full flex flex-col">
                                    <div className="my-auto mx-auto">
                                        <MdThumbUpAlt className={`text-2xl sm:text-3xl text-c_64A879`}/>
                                    </div>
                                    <div className="h-0.5 w-full
                                                    bg-c_F2F2F2 dark:bg-dark_0fc9f2"></div>
                                    <div className="mb-auto my-auto mx-auto">
                                        <MdThumbDownOffAlt className={`text-2xl sm:text-3xl text-c_C8C8C8`}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center text-white text-xs leading-normal rounded-xl
                                        cursor-pointer transform hover:scale-105 ease-out duration-700
                                        bg-c_1564C0 dark:bg-dark_0fc9f2
                                        h-8 sm:h-9_5
                                        px-5 sm:px-8">
                            <BsCalendarEvent className="mr-2 text-base"/>
                            Add to calendar
                        </div>
                        <div className="ml-2_5 flex items-center justify-center text-white text-xs leading-normal rounded-xl
                                        cursor-pointer transform hover:scale-105 ease-out duration-700
                                        bg-c_1564C0 dark:bg-dark_0fc9f2
                                        h-8 sm:h-9_5
                                        px-5 sm:px-8">
                            <BsFillBellFill className="mr-2 text-base"/>
                            Notify me
                        </div>
                    </div>
                </div>

                <div className="ml-7 px-4_5 pt-10 pb-6 flex-col rounded-lg max-w-346px
                                bg-white dark:bg-transparent
                                 shadow-card dark:shadow-dark_card
                                 hidden xl:flex">
                    <div className="text-c_6E7582 text-17px leading-normal font-semibold">Sed do eiusmod tempor incididun.</div>
                    <div className="font-semibold text-22px leading-normal">Heading</div>
                    <div className="mt-2_5 text-c_6E7582 text-sm leading-snug font-medium">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis</div>
                    <input type="text" 
                        className="mt-5 h-9_5 px-3 border rounded-full bg-transparent text-xs leading-normal
                                border-c_E8EBF1 dark:border-dark_0fc9f2
                                 placeholder-c_BCC3CF
                                text-black dark:text-dark_0fc9f2"
                        placeholder="Enter your email address"/>
                    <div className="mt-4_5 flex justify-center">
                        <div className="h-7_5 px-7 flex items-center justify-center text-white text-xs leading-normal rounded-xl
                                            cursor-pointer transform hover:scale-105 ease-out duration-700
                                            bg-c_1564C0 dark:bg-dark_0fc9f2">Subscribe</div>
                    </div>
                </div>
            </div>

            <div className="mt-7 flex">
                <div className="flex flex-col">
                    <div className="font-semibold text-22px leading-loose">Title 1</div>
                    <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet.</div>
                    <div className="my-9 flex justify-center items-center gap-3 flex-wrap">
                        {link_li.map((item, index) => {
                            return <div key={`link_${index}`}
                                        className="px-2 flex items-center font-semibold rounded-xl
                                                cursor-pointer transform hover:scale-105 ease-out duration-700
                                                bg-white dark:bg-dark_0fc9f2 text-black dark:text-white shadow-card dark:shadow-dark_card
                                                h-8 sm:h-9_5
                                                text-xs sm:text-sm">
                                        <div className="mr-2">{item.title}</div>
                                        <BsBoxArrowUpRight className="text-c_1564C0 dark:text-white stroke-1"/>
                                    </div>
                        })}
                    </div>
                    <div className="h-px w-full
                                    bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>
                    <div className="mt-6 flex flex-col">
                        <div className="font-semibold text-22px leading-loose">Title 2</div>
                        <div className="mt-4 grid grid-cols-4 gap-x-3 mx-auto">
                            <div className="flex flex-col rounded-lg py-4 text-black dark:text-white bg-c_E8EBF1 dark:bg-transparent dark:shadow-dark_card max-w-112px
                                            px-2 sm:px-4">
                                <img src={TrendingSvg} className="w-9 h-9 mx-auto" alt=""></img>
                                <div className="mt-1.5 mx-auto">27/100</div>
                                <div className="mt-1.5 mx-auto leading-normal font-semibold text-center
                                                text-10px sm:text-sm">Trending</div>
                            </div>
                            <div className="flex flex-col max-w-112px rounded-lg py-4 text-black dark:text-white bg-c_E8EBF1 dark:bg-transparent dark:shadow-dark_card
                                            px-2 sm:px-4">
                                <img src={CrownSvg} className="w-9 h-9 mx-auto" alt=""></img>
                                <div className="mt-1.5 mx-auto">09/100</div>
                                <div className="mt-1.5 mx-auto leading-normal font-semibold text-center
                                                text-10px sm:text-sm">Popularity</div>
                            </div>
                            <div className="flex flex-col max-w-112px rounded-lg py-4 text-black dark:text-white bg-c_E8EBF1 dark:bg-transparent dark:shadow-dark_card
                                            px-2 sm:px-4">
                                <MdThumbUpAlt className="text-c_64A879 text-3xl mx-auto" />
                                <div className="mt-1.5 mx-auto">96%</div>
                                <div className="mt-1.5 mx-auto leading-normal font-semibold text-center
                                                text-10px sm:text-sm">Interested</div>
                            </div>
                            <div className="flex flex-col max-w-112px rounded-lg py-4 text-black dark:text-white bg-c_E8EBF1 dark:bg-transparent dark:shadow-dark_card
                                            px-2 sm:px-4">
                                <MdThumbDownAlt className=" text-c_C85151 text-3xl mx-auto" />
                                <div className="mt-1.5 mx-auto">14%</div>
                                <div className="mt-1.5 mx-auto leading-normal font-semibold text-center
                                                text-10px sm:text-sm">Not Interested</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-7 max-w-346px rounded-lg flex-col
                                hidden xl:flex">
                    <div className="font-semibold text-22px leading-loose">Featured</div>
                    <div className="flex flex-col gap-y-3">
                        {heading_card_li.map((item, index) => {
                            return <div className="flex flex-col p-3 rounded-lg cursor-pointer transform hover:scale-105 ease-out duration-700
                                                    shadow-card dark:shadow-dark_card
                                                    bg-white dark:bg-transparent" 
                                        key={`heading_card_${index}`}>
                                        <div className="flex">
                                            <div className="rounded-full w-14_5 h-14_5 bg-c_E8EBF1"></div>
                                            <div className="ml-4 flex-1 font-semibold leading-normal
                                                            text-black dark:text-white
                                                            text-xs sm:text-sm">{item.detail}</div>
                                        </div>
                                        <div className="mt-4 flex items-center">
                                            <div className="flex items-center text-c_64A879 text-sm leading-normal">
                                                <IoTrendingUpSharp />
                                                <div className="ml-1.5">{item.tradeUp}</div>
                                            </div>
                                            <div className="ml-4 flex items-center text-c_C85151 text-sm leading-normal">
                                                <IoTrendingDownSharp />
                                                <div className="ml-1.5">{item.tradeDown}</div>
                                            </div>
                                            <div className="ml-4 flex items-center text-c_7EAFE8 text-sm leading-normal">
                                                <MdQuestionAnswer />
                                                <div className="ml-1.5">{item.question}</div>
                                            </div>
                                            <img src={CoinSearchSvg} className="ml-auto" alt=""></img>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component23