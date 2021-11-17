import {
    MdThumbUpAlt,
    MdThumbDownOffAlt,
    BsCalendarEvent,
    BsFillBellFill,
    CrownSvg,
    TrendingSvg
} from '../../icon/IconImage'

const Component21 = () => {
    return (
        <div className="grid gap-x-6 gap-y-6
                        grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {[0, 1, 2].map((item, index) => {
                return <div className={`rounded-md max-w-3xl text-xs cursor-pointer transform hover:scale-105 ease-out duration-700
                                    bg-white text-black dark:bg-gray-900 dark:text-white
                                    shadow-card dark:shadow-dark_card`}
                            key={`index_${index}`}>
                            <div className="flex w-full">
                                <div className="p-3 w-10/12 border-r-2 relative
                                                border-c_F2F2F2 dark:border-dark_0fc9f2">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-c_F2F2F2 rounded-md mr-3"></div>
                                        <div className="flex-1 font-bold leading-normal">Title 1</div>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <div className="bg-c_F2F2F2 w-6 h-6 rounded-md mr-3 invisible"></div>
                                        <div className="flex-1 flex flex-col">
                                            <div className="font-semibold leading-normal
                                                            text-c_1564C0 dark:text-dark_0fc9f2">07 Sep 2021</div>
                                            <div className="font-bold text-sm leading-snug">Heading 1</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center font-semibold leading-none mt-3">
                                        <div className="flex items-center leading-normal mr-3">
                                            <div>98%</div>
                                            <div className="h-5 w-0.5 bg-gray-300 mx-2"></div>
                                            <div>391 Votes</div>
                                        </div>
                                        <div className="bg-gray-100 flex-1 h-1.5 rounded-full relative">
                                            <div className="absolute w-3/4 h-full bg-c_EBE188 dark:bg-dark_FFEB3B rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="absolute -top-3 right-2.5 h-6 flex flex-col rounded-md
                                                    bg-white dark:bg-gray-900
                                                    shadow-card dark:shadow-dark_card">
                                        <div className="grid grid-cols-3 gap-x-1 my-auto px-1.5">
                                            <img src={CrownSvg} className="w-4 h-4" alt=""></img>
                                            <img src={TrendingSvg} className="w-4 h-4" alt=""></img>
                                            <img src={CrownSvg} className="w-4 h-4" alt=""></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div className="mx-auto h-full flex flex-col">
                                        <div className="mt-auto">
                                            <MdThumbUpAlt className="text-2xl text-c_64A879"/>
                                        </div>
                                        <div className="mb-auto mt-9">
                                            <MdThumbDownOffAlt className="text-2xl text-c_C8C8C8"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="px-4 py-8 w-10/12 border-r-2 border-t-2 border-b-2 font-semibold
                                                border-c_F2F2F2 dark:border-dark_0fc9f2 
                                                text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
                                <div className="flex flex-1 flex-col border-t-2 border-b-2
                                                border-c_F2F2F2 dark:border-dark_0fc9f2">
                                    <div className="mx-auto h-full flex flex-col">
                                        <div className="mt-auto">
                                            <BsCalendarEvent className="text-base text-black dark:text-white" style={{strokeWidth: 1}}/>
                                        </div>
                                        <div className="mb-auto mt-7">
                                            <BsFillBellFill className="text-base text-black dark:text-white" style={{strokeWidth: 1}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-3 py-4 flex items-center">
                                <div className="flex items-center">
                                    <div className="flex items-center mr-4">
                                        <div className="w-2 h-7 bg-c_E8EBF1 rounded-t-full rounded-b-full"></div>
                                        <div className="ml-1.5 flex flex-col text-10px leading-normal">
                                            <div className="text-c_6E7582 font-semibold">Added on</div>
                                            <div className="text-black dark:text-white font-bold">29 Mar 2021</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-7 bg-c_E8EBF1 rounded-t-full rounded-b-full"></div>
                                        <div className="ml-1.5 flex flex-col text-10px leading-normal">
                                            <div className="text-c_6E7582 font-semibold">Added By</div>
                                            <div className="text-c_1564C0 dark:text-dark_0fc9f2 font-semibold">@johnsmith</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto h-7_5 px-4 flex items-center justify-center rounded-full border text-xs leading-normal font-semibold
                                                border-c_1564C0 dark:border-dark_0fc9f2
                                                text-c_1564C0 dark:text-dark_0fc9f2">Source</div>
                            </div>
                        
                        </div>
            })}
        </div>
    )
}

export default Component21