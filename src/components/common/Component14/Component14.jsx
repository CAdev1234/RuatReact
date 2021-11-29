import { useState } from "react"

import {
    BsCalendarEvent,
    BsChevronDown,
    BsChevronExpand
} from '../../icon/IconImage'

const Component14 = () => {
    let date_option_li = [
        {title: '7d', value: '7d'},
        {title: '30d', value: '30d'},
        {title: '60d', value: '60d'},
        {title: '90d', value: '90d'},
        {title: '1yr', value: '1yr'},
        {title: 'All', value: 'all'},
    ]

    let table_data_li = new Array(7).fill(false)

    const [enableDateOption, setEnableDateOption] = useState([true, new Array(date_option_li.length - 1).fill(false)])
    const [enableDatePicker, setEnableDatePicker] = useState(false)
    const [enableExpand, setEnableExpand] = useState(new Array(table_data_li.length).fill(false))

    const updateChartByDateHandler = (index) => {
        let new_array = new Array(date_option_li.length).fill(false)
        new_array[index] = true
        setEnableDateOption(new_array)
        setEnableDatePicker(false)
    }

    const chooseDatePickerHandler = () => {
        let new_array = new Array(date_option_li.length).fill(false)
        setEnableDateOption(new_array)
        setEnableDatePicker(true)
    }
    return (
        <div>
            <div className="items-center
                            block sm:flex">
                <div className="font-semibold text-black dark:text-white
                                text-22px">Heading Title</div>
                <div className="ml-auto flex items-center gap-y-2 flex-wrap
                                mt-7_5 sm:mt-0
                                gap-x-1 sm:gap-x-2">
                    {date_option_li.map((item, index) => {
                        return (
                            <button key={`date_option_${index}`} 
                                className={`flex items-center justify-center rounded-full font-semibold px-4 ${enableDateOption[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'text-black dark:text-white'}
                                            cursor-pointer transform hover:scale-105 ease-out duration-700
                                            h-7_5
                                            text-xs sm:text-sm`}
                                onClick={() => {updateChartByDateHandler(index)}}>{item.title}</button>
                        )
                    })}
                    <button className={`flex items-center justify-center rounded-full font-semibold ${enableDatePicker === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'text-black dark:text-white'}
                                    transform hover:scale-105 ease-out duration-700
                                    text-xs sm:text-sm
                                    px-4
                                    h-6_5 sm:h-7_5`}
                        onClick={() => {chooseDatePickerHandler()}}>
                        <BsCalendarEvent className="stroke-1" />
                    </button>
                </div>
            </div>
            

            {/* table desktop */}
            <div className="mt-6 overflow-x-auto overflow-y-hidden w-full
                            hidden sm:block">
                <div className="" style={{width: 1000}}>
                    <div className="px-3 grid grid-cols-7 border-b border-c_E8EBF1">
                        <div className="text-xs text-black dark:text-white font-semibold flex justify-start py-3">Label 1</div>
                        <div className="text-xs text-black dark:text-white font-semibold flex justify-end py-3">Label 2</div>
                        <div className="text-xs text-black dark:text-white font-semibold flex justify-end py-3">Label 3</div>
                        <div className="text-xs text-black dark:text-white font-semibold flex justify-end py-3">Label 4</div>
                        <div className="text-xs text-black dark:text-white font-semibold flex justify-end py-3">Label 5</div>
                        <div className="text-xs text-black dark:text-white font-semibold flex justify-end py-3">Label 6</div>
                        <div className="text-xs text-black dark:text-white font-semibold flex justify-end py-3">Label 7</div>
                    </div>
                    <div>
                        {table_data_li.map((item, index) => {
                            return (
                                <div className="px-3 grid grid-cols-7 border-b border-c_E8EBF1" key={`row_${index}`}>
                                    <div className="text-sm text-black dark:text-white font-semibold flex justify-start py-4">Oct 18, 2021</div>
                                    <div className="text-sm text-black dark:text-white font-semibold flex justify-end py-4">$42,345.42</div>
                                    <div className="text-sm text-black dark:text-white font-semibold flex justify-end py-4">$42,345.42</div>
                                    <div className="text-sm text-black dark:text-white font-semibold flex justify-end py-4">$42,345.42</div>
                                    <div className="text-sm text-black dark:text-white font-semibold flex justify-end py-4">$42,345.42</div>
                                    <div className="text-sm text-black dark:text-white font-semibold flex justify-end py-4">$25,761,236,948</div>
                                    <div className="text-sm text-black dark:text-white font-semibold flex justify-end py-4">$25,761,236,948</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="w-full relative mt-12_5 h-7 flex items-center">
                    <div className="flex flex-col h-full text-xs font-medium leading-normal text-c_6E7582 dark:text-white">
                        <div>* Quis nostrud exercitation ullamco laboris</div>
                        <div>** Quis nostrud exercitation ullamco laboris</div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center transform hover:scale-110 ease-out duration-700">
                        <div className="px-3 flex justify-center items-center cursor-pointer text-sm leading-tight rounded-full 
                                        shadow-card dark:shadow-dark_card
                                        bg-white dark:bg-dark_0fc9f2
                                        text-c_1564C0 dark:text-white">
                            <div className="font-semibold">Load More</div>
                            <div className="ml-2">
                                <BsChevronDown className="stroke-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* table mobile */}
            <div className="mt-6 w-full text-10px
                            block sm:hidden">
                <div className="">
                    <div className="px-3 grid grid-cols-3 border-b border-c_E8EBF1 dark:border-dark_0fc9f2 text-9px text-black dark:text-white font-bold">
                        <div className="flex justify-start py-3">Label 1</div>
                        <div className="flex justify-center py-3">Label 2</div>
                        <div className="flex justify-end py-3">Label 3</div>
                        
                    </div>
                    <div>
                        {table_data_li.map((item, index) => {
                            return (
                                <div key={`item_${index}`}>
                                    <div className={`px-3 grid grid-cols-3 border-b border-c_E8EBF1 dark:border-dark_0fc9f2 text-black dark:text-white
                                                    ${enableExpand[index] === true ? 'bg-white dark:bg-gray-900' : 'bg-transparent'}`} 
                                        key={`row_${index}`}>
                                        <div className="font-semibold flex justify-start py-4">Oct 18, 2021</div>
                                        <div className="font-semibold flex justify-center py-4">$42,345.42</div>
                                        <div className="flex items-center justify-end">
                                            <div className="font-semibold flex justify-end py-4">$42,345.42</div>
                                            <button className={`flex items-center ml-5 justify-center w-4 h-4 rounded-full
                                                                ${enableExpand[index] === true ? ' bg-c_1564C0 tetxt-white dark:bg-dark_0fc9f2' : 'bg-white text-c_1564C0 border border-c_1564C0'}`}
                                                    onClick={() => {
                                                        const array_var = [...enableExpand]
                                                        array_var[index] = !enableExpand[index]
                                                        setEnableExpand(array_var)
                                                    }}>
                                                <BsChevronExpand className={`stroke-1 ${enableExpand[index] ? 'text-white' : 'text-c_1564C0 dark:text-dark_0fc9f2'}`}/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`w-full p-3 text-black dark:text-white bg-white dark:bg-gray-900 ${enableExpand[index] === true ? 'block' : 'hidden'}`}>
                                        <div className="flex items-center h-7_5 border-b border-c_F8F9FB dark:border-dark_0fc9f2 dark:border-opacity-50">
                                            <div className="text-c_6E7582">Sample Txt</div>
                                            <div className="ml-auto">$42,345.42</div>
                                        </div>
                                        <div className="flex items-center h-7_5 border-b border-c_F8F9FB dark:border-dark_0fc9f2 dark:border-opacity-50">
                                            <div className="text-c_6E7582">Sample Txt</div>
                                            <div className="ml-auto">$42,345.42</div>
                                        </div>
                                        <div className="flex items-center h-7_5 border-b border-c_F8F9FB dark:border-dark_0fc9f2 dark:border-opacity-50">
                                            <div className="text-c_6E7582">Sample Txt</div>
                                            <div className="ml-auto">$42,345.42</div>
                                        </div>
                                        <div className="flex items-center h-7_5">
                                            <div className="text-c_6E7582">Sample Txt</div>
                                            <div className="ml-auto">$42,345.42</div>
                                        </div>

                                        <div className="mt-3 flex flex-col h-full text-8px font-medium leading-normal text-c_6E7582 dark:text-white">
                                            <div>* Quis nostrud exercitation ullamco laboris</div>
                                            <div>** Quis nostrud exercitation ullamco laboris</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="w-full relative mt-4 h-7 flex items-center">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center transform hover:scale-110 ease-out duration-700">
                        <div className="px-3 flex justify-center items-center cursor-pointer text-10px leading-tight rounded-full 
                                        shadow-card dark:shadow-dark_card
                                        bg-white dark:bg-dark_0fc9f2
                                        text-c_1564C0 dark:text-white">
                            <div className="font-semibold">Load More</div>
                            <div className="ml-2">
                                <BsChevronDown className="stroke-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component14