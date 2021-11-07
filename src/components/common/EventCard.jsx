import {
    FaThumbsUp,
    FaRegThumbsDown
} from '../icon/IconImage'

import { DarkModeContext } from "../../App"
const EventCard = () => {
    return (
        <>
            <DarkModeContext.Consumer>
                {darkMode => {
                    return(
                        <div className={`rounded-md shadow-card max-w-3xl text-xs
                                ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                            <div className="flex w-full">
                                <div className="p-3 w-10/12 border-b-2 border-r-2 border-gray-200">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-c_F2F2F2 rounded-md mr-3"></div>
                                        <div className="flex-1 font-bold">The Sandbox (Sand)</div>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <div className="bg-c_F2F2F2 w-6 h-6 rounded-md mr-3 invisible"></div>
                                        <div className="flex-1 flex flex-col">
                                            <div className="font-semibold text-c_1564C0">07 Sep 2021</div>
                                            <div className="font-bold text-sm">WhiteBit Listing</div>
                                        </div>
                                    </div>
                                    <div className="items-center font-semibold leading-none mt-3
                                                    block sm:flex">
                                        <div className="flex items-center mr-1">
                                            <div>98%</div>
                                            <div className="h-5 w-0.5 bg-gray-300 mx-2"></div>
                                            <div>391 Votes</div>
                                        </div>
                                        <div className="bg-gray-100 flex-1 h-2 rounded-full relative">
                                            <div className="absolute w-3/4 h-full bg-c_EBE188 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col border-b-2">
                                    <div className="mx-auto h-full flex flex-col">
                                        <div className="mt-auto">
                                            <FaThumbsUp className="text-base text-c_64A879"/>
                                        </div>
                                        <div className="mb-auto mt-8">
                                            <FaRegThumbsDown className="text-base text-c_C8C8C8"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    )
                }}
                
            </DarkModeContext.Consumer>
        </>
        
    )
}

export default EventCard