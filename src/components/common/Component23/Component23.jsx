import {
    BsChevronRight,
    MdThumbUpAlt,
    MdThumbUpOffAlt,
    MdThumbDownOffAlt,
    MdThumbDownAlt,
    BsCalendarEvent,
    BsFillBellFill

} from '../../icon/IconImage'

const Component23 = () => {
    return (
        <div className="text-black dark:text-white">
            <div className="flex items-center text-sm leading-normal">
                <div className="text-c_6E7582">Menu</div>
                <BsChevronRight className="mx-2 text-c_6E7582 text-8px" style={{strokeWidth: 1}}/>
                <div className="text-c_6E7582">Submenu 01</div>
                <BsChevronRight className="mx-2 text-c_6E7582 text-8px" style={{strokeWidth: 1}}/>
                <div className="font-semibold">Title 01</div>
            </div>
            
            <div className="mt-8 flex">
                <div className="flex flex-col">
                    <div className="flex items-center text-xs leading-normal">
                        <div className="font-semibold">Note</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                    </div>
                    
                    <div className={`my-auto rounded-md max-w-3xl text-xs cursor-pointer transform hover:scale-105 ease-out duration-700
                                    bg-white text-black dark:bg-gray-900 dark:text-white
                                    shadow-card dark:shadow-dark_card`}>
                        <div className="flex w-full">
                            <div className="px-7_5 py-4_5 flex-1 border-r-2
                                            border-c_F2F2F2 dark:border-dark_0fc9f2">
                                <div className="flex">
                                    <div className="w-25 h-25 bg-c_F2F2F2 rounded-full mr-8"></div>
                                    <div className="flex flex-col">
                                        <div className="font-bold leading-normal text-sm">Title 1</div>
                                        <div className="flex items-center text-xs leading-normal">
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
                            <div className="flex w-22_5 flex-col">
                                <div className="h-full flex flex-col">
                                    <div className="my-auto mx-auto">
                                        <MdThumbUpAlt className={`text-3xl text-c_64A879`}/>
                                    </div>
                                    <div className="h-0.5 w-full
                                                    bg-c_F2F2F2 dark:bg-dark_0fc9f2"></div>
                                    <div className="mb-auto my-auto mx-auto">
                                        <MdThumbDownOffAlt className={`text-3xl text-c_C8C8C8`}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="h-9_5 px-8 flex items-center justify-center text-white text-xs leading-normal rounded-xl
                                        cursor-pointer transform hover:scale-105 ease-out duration-700
                                        bg-c_1564C0 dark:bg-dark_0fc9f2">
                            <BsCalendarEvent className="mr-2"/>
                            Add to calendar
                        </div>
                        <div className="ml-2_5 h-9_5 px-8 flex items-center justify-center text-white text-xs leading-normal rounded-xl
                                        cursor-pointer transform hover:scale-105 ease-out duration-700
                                        bg-c_1564C0 dark:bg-dark_0fc9f2">
                            <BsFillBellFill className="mr-2"/>
                            Notify me
                        </div>
                    </div>
                </div>

                <div className="ml-7 flex-1 px-4_5 pt-10 pb-6 flex flex-col rounded-lg
                                bg-white dark:bg-transparent
                                 shadow-card dark:shadow-dark_card">
                    <div className="text-c_6E7582 text-17px leading-normal">Sed do eiusmod tempor incididun.</div>
                    <div className="font-semibold text-22px leading-normal">Heading</div>
                    <div className="mt-2_5 text-c_6E7582 text-sm leading-snug">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis</div>
                    <input type="text" className="border border-c_E8EBF1 rounded-full" />
                    <div className="flex justify-center">
                        <div className="h-7_5 px-7 flex items-center justify-center text-white text-xs leading-normal rounded-xl
                                            cursor-pointer transform hover:scale-105 ease-out duration-700
                                            bg-c_1564C0 dark:bg-dark_0fc9f2">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component23