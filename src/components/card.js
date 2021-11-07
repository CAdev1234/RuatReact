

import { DarkModeContext } from "../App"
const CardComp = () => {
    return (
        <>
            <DarkModeContext.Consumer>
                {darkMode => {
                    return(
                        <div className={`rounded-2xl shadow-card max-w-3xl
                                    text-lg sm:text-2xl
                                ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                            <div className="flex w-full">
                                <div className="p-6 w-4/5 border-b-2 border-r-2 border-gray-200">
                                    <div className="flex items-center">
                                        <div className="bg-c_f2f2f2 w-14 h-14 rounded-xl mr-6"></div>
                                        <div className="flex-1 font-bold">The Sandbox (Sand)</div>
                                    </div>
                                    <div className="flex items-center">
                                    <div className="bg-c_f2f2f2 w-14 h-14 rounded-xl mr-6 invisible"></div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="text-c_2f62ba font-semibold">07 Sep 2021</div>
                                        <div className="font-bold
                                                        text-xl sm:text-3xl">WhiteBit Listing</div>
                                    </div>
                                    </div>
                                    <div className="items-end font-semibold leading-none
                                                    mt-5 sm:mt-10
                                                    block sm:flex">
                                        <div className="flex items-center mr-6">
                                            <div>98%</div>
                                            <div className="h-5 w-0.5 bg-gray-300 mx-2"></div>
                                            <div>391 Votes</div>
                                        </div>
                                        <div className="bg-gray-100 flex-1 h-3 rounded-full relative
                                                        mt-3 sm:mt-0">
                                            <div className="absolute w-3/4 h-full bg-c_e9e193 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-12 flex flex-1 flex-col border-b-2">
                                <div className="mx-auto h-full flex flex-col">
                                    <div className="mb-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-12" viewBox="0 0 20 20" fill="#74a67d">
                                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                    </svg>
                                    </div>
                                    <div className="mt-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-12" fill="none" viewBox="0 0 24 24" stroke="#c8c8c8">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                    </svg>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="flex w-full">
                            <div className="px-10 w-4/5 font-semibold border-b-2 border-r-2 border-gray-200
                                        py-10 sm:py-14 lg:py-20">
                                Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </div>
                            <div className="py-12 flex flex-1 flex-col border-b-2 border-gray-200">
                                <div className="mx-auto h-full flex flex-col">
                                <div className="mb-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-12" fill="none" viewBox="0 0 24 24" stroke="#c8c8c8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="mt-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-12" viewBox="0 0 20 20" fill="#c8c8c8">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="items-center px-6 py-8
                                        block sm:flex
                                        text-base sm:text-xl">
                                <div className="flex items-center">
                                    <div className="flex h-14">
                                        <div className="w-5 h-full bg-c_f2f2f2 rounded-full"></div>
                                        <div className="h-full flex flex-col ml-3">
                                            <div className=" text-gray-500 font-semibold">Added on</div>
                                            <div className="font-bold">29 Mar 2021</div>
                                        </div>
                                    </div>
                                    <div className="flex h-14
                                                ml-auto sm:ml-8">
                                        <div className="w-5 h-full bg-c_f2f2f2 rounded-full"></div>
                                        <div className="h-full flex flex-col ml-3">
                                            <div className=" text-gray-500 font-semibold">Added By</div>
                                            <div className="text-c_2f62ba font-bold">@johnsmith</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto h-14
                                            mt-5 sm:mt-0">
                                    <button className="text-c_2f62ba w-36 h-full flex justify-center items-center font-semibold border-2 border-blue-500 rounded-full">Source</button>
                                </div>
                            </div>
                        </div>
                    )
                }}
                
            </DarkModeContext.Consumer>
        </>
        
    )
}

export default CardComp