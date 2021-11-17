import { useState } from "react"

import {
    BsCalendarEvent,
    BsCalendarEventFill,
    BsFilter,
    MdRefresh
} from '../../icon/IconImage'

import SelectInput from '../../ui/SelectInput'

const Component20 = () => {
    let status_li = [
        { title: 'Active' },
        { title: 'Upcoming' },
        { title: 'Completed' },
    ]

    let coin_option_li = ['top 500 coins', 'top 400 coins', 'top 300 coins', 'top 200 coins']
    let exchange_li = ['Exchages All', 'option 2', 'option 3']
    let category_li = ['Categories All', 'option 2', 'option 3']
    
    const [status, setStatus] = useState([true, new Array(status_li.length - 1).fill(false)])
    const [coinOption, setCoinOption] = useState(coin_option_li[0])
    const [exchage, setExchange] = useState(exchange_li[0])
    const [category, setCategory] = useState(category_li[0])

    const changeStausHandler = (index) => {
        let new_array = new Array(status_li.length).fill(false)
        new_array[index] = true
        setStatus(new_array)
    }
    return (
        <div>
            <div className="flex flex-col py-6 rounded-lg
                            bg-white dark:bg-transparent 
                            shadow-card dark:shadow-dark_card
                            px-3 sm:px-6">
                <div className="flex items-center
                                gap-x-2 sm:gap-x-4">
                    {status_li.map((item, index) => {
                        return <div key={`status_${index}`}>
                                    <div className={`px-4 flex justify-center items-center cursor-pointer rounded-full font-medium ${status[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'bg-transparent text-black dark:text-white'} 
                                                    transform hover:scale-110 ease-out duration-700
                                                    h-5_5 sm:h-7_5
                                                    text-10px sm:text-sm`}
                                        onClick={() => {changeStausHandler(index)}}
                                    >{item.title}</div>
                                </div>
                    })}
                </div>
                    
                <div className="items-center
                                block 2xl:flex
                                mt-5 sm:mt-6">
                    <div className="flex items-center">
                        <div className="w-48 relative
                                        h-5_5 sm:h-7_5">
                            <input type="text" 
                                    className="h-full w-full flex items-center pl-3 rounded-lg border font-semibold leading-normal
                                            border-c_E8EBF1 dark:border-dark_0fc9f2
                                            text-black dark:text-dark_0fc9f2
                                            dark:bg-transparent 
                                                text-9px sm:text-xs" 
                                    defaultValue="14/10/2021 - 14/11/2021" />
                            <div className="absolute top-0 right-3 h-full flex flex-col">
                                <BsCalendarEvent className="my-auto text-xs sm:text-lg text-black dark:text-dark_0fc9f2"/>
                            </div>
                        </div>
                        <div className="ml-3">
                            <input type="text" 
                                    className="w-36 flex items-center font-semibold pl-3 rounded-lg border bg-transparent
                                            placeholder-c_BCC3CF dark:placeholder-dark_0fc9f2
                                            text-black dark:text-dark_0fc9f2
                                            border-c_E8EBF1 dark:border-dark_0fc9f2
                                                h-5_5 sm:h-7_5
                                                text-9px sm:text-xs" 
                                    placeholder="keyword"/>
                        </div>
                    </div>

                    <div className="flex items-center flex-wrap gap-y-4
                                    ml-0 2xl:ml-3
                                    mt-4 2xl:mt-0">
                        <div className="mr-3
                                        w-28 sm:w-36">
                            <SelectInput 
                                className="flex items-center px-3 text-black dark:text-dark_0fc9f2 font-semibold w-full border rounded-lg
                                        border-c_E8EBF1 dark:border-dark_0fc9f2
                                            h-5_5 sm:h-7_5
                                            text-9px sm:text-xs"
                                option_board_class="bg-c_F8F9FB dark:bg-dark_040739 top-8 z-10"
                                option_li={coin_option_li} 
                                default_option={coin_option_li[0]}
                                returnVal={setCoinOption}
                            />
                        </div>

                        <div className="mr-3
                                        w-28 sm:w-36">
                            <SelectInput 
                                className="flex items-center px-3 rounded-lg text-black dark:text-dark_0fc9f2 font-semibold w-full border
                                        border-c_E8EBF1 dark:border-dark_0fc9f2
                                            h-5_5 sm:h-7_5
                                           text-9px sm:text-xs"
                                option_board_class="bg-c_F8F9FB dark:bg-dark_040739 top-8 z-10"
                                option_li={exchange_li} 
                                default_option={exchange_li[0]}
                                returnVal={setExchange}
                            />
                        </div>

                        <div className="w-28 sm:w-36">
                            <SelectInput 
                                className="border px-3 flex items-center rounded-lg text-black dark:text-dark_0fc9f2 font-semibold w-full
                                        border-c_E8EBF1 dark:border-dark_0fc9f2
                                            text-9px sm:text-xs
                                            h-5_5 sm:h-7_5"
                                option_board_class="bg-c_F8F9FB dark:bg-dark_040739 top-8 z-10"
                                option_li={category_li} 
                                default_option={category_li[0]}
                                returnVal={setCategory}
                            />
                        </div>
                    </div>

                    <div className="flex items-center flex-1
                                    ml-0 2xl:ml-3
                                    mt-5 2xl:mt-0">
                        <div className="relative px-2 rounded-full flex items-center justify-center border 
                                        border-c_E8EBF1 dark:border-dark_0fc9f2
                                        h-5_5 sm:h-7_5
                                        text-xl sm:text-3xl">
                            <BsFilter className="text-black dark:text-dark_0fc9f2"/>
                            <div className="absolute -top-0.5 right-0.5 w-1.5 h-1.5 rounded-full
                                            bg-c_C85151 dark:bg-dark_E91E63"></div>
                        </div>
                        <div className="ml-auto px-4 flex justify-center items-center cursor-pointer rounded-full font-medium text-white
                                        transform hover:scale-110 ease-out duration-700
                                        bg-c_1564C0 dark:bg-dark_0fc9f2
                                        h-5_5 sm:h-7_5
                                        text-10px sm:text-sm">Go</div>
                        <div className="ml-2 px-4 flex justify-center items-center cursor-pointer rounded-full font-medium text-white
                                        transform hover:scale-110 ease-out duration-700
                                        bg-c_C85151 dark:bg-dark_E91E63
                                        h-5_5 sm:h-7_5
                                        text-xs sm:text-lg"><MdRefresh /></div>
                    </div>
                </div>
            </div>
            
        </div> 
    )
}

export default Component20