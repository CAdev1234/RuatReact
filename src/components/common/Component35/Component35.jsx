import React, { useState } from 'react'
import SelectInput from '../../ui/SelectInput'
import BarLinechart2 from '../BarLineChart2'
import {
    BsChevronExpand,
} from '../../icon/IconImage'


const Component35 = () => {
    let select_item_li_1 = ['All', 'Item 1', 'Item 2']
    let select_item_li_2 = ['All', 'Item 1', 'Item 2']
    let select_item_li_3 = ['All', 'Item 1', 'Item 2']
    let select_item_li_4 = ['All', 'Item 1', 'Item 2']
    let option_li = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6']
    let chart_data_1 = {
        xdata: [],
        bar_data_1: [],
        bar_data_2: [],
        line_data: []
    }

    for (let index = 0; index < 20; index++) {
        chart_data_1.xdata.push(index)
        chart_data_1.bar_data_1.push(Math.floor(Math.random() * 100))
        chart_data_1.line_data.push(Math.random() * 2)
    }
    chart_data_1.bar_data_1.forEach(item => {chart_data_1.bar_data_2.push(100 - item)})
    let table_data = [
        {item1: 'Sample Text', item2: 34},
        {item1: 'Sample Text', item2: 66},
        {item1: 'Sample Text', item2: 23},
        {item1: 'Sample Text', item2: 56},
        {item1: 'Sample Text', item2: 87},
        {item1: 'Sample Text', item2: 23},
        {item1: 'Sample Text', item2: 45},
        {item1: 'Sample Text', item2: 23},
        {item1: 'Sample Text', item2: 67},
    ]
    
    const [enableOption, setEnableOption] = useState([true, new Array(option_li.length - 1).fill(false)])
    const [option1, setOption1] = useState(select_item_li_1[0])
    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))

    const selectOptionHandler = (index) => {
        let new_array = new Array(option_li.length).fill(false)
        new_array[index] = true
        setEnableOption(new_array)
    }
    return (
        <div className="text-black dark:text-white">
            <div className="items-center
                            block sm:flex">
                <div className="font-semibold
                                text-lg sm:text-22px">Heading Title</div>
                <div className="flex items-center ml-auto flex-wrap gap-4
                                mt-4 sm:mt-0">
                    <div className="flex items-center">
                        <label htmlFor="" className="font-semibold text-sm">Dropdown</label>
                        <SelectInput 
                            className="ml-3 flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                    border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                    h-6_5 lg:h-7_5
                                    w-20 lg:w-27
                                    text-xs lg:text-sm"
                            option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                            option_li={select_item_li_1} 
                            default_option={select_item_li_1[0]}
                            returnVal={setOption1}
                        />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="" className="font-semibold text-sm">Dropdown</label>
                        <SelectInput 
                            className="ml-3 flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                    border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                    h-6_5 lg:h-7_5
                                    w-20 lg:w-27
                                    text-xs lg:text-sm"
                            option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                            option_li={select_item_li_1} 
                            default_option={select_item_li_1[0]}
                            returnVal={setOption1}
                        />
                    </div>
                </div>
            </div>


            <div className="flex flex-wrap
                            gap-3 sm:gap-5
                            mt-4_5">
                {option_li.map((item, index) => {
                    return (
                        <div key={`item_${index}`}>
                            <button 
                                className={`font-semibold px-4 rounded-full transform hover:scale-110 ease-out duration-700
                                            shadow-card dark:shadow-dark_card
                                            ${enableOption[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'bg-white dark:bg-transparent dark:text-white'}
                                            h-6_5 sm:h-7_5
                                            text-xs sm:text-sm`}
                                onClick={() => {selectOptionHandler(index)}}>{item}</button>
                        </div>
                    )
                })}
            </div>

            <div className="rounded-md shadow-card dark:shadow-dark_card bg-white dark:bg-transparent
                            mt-7_5">
                <BarLinechart2 chart_data={chart_data_1}/>
            </div>

            <div className="flex flex-col
                            mt-10 lg:mt-22_5">
                <div className="items-center
                                block sm:flex">
                    <div className="font-semibold
                                    text-lg sm:text-22px">Heading Title</div>
                    <div className="flex items-center ml-auto flex-wrap gap-4
                                    mt-4 sm:mt-0">
                        <div className="flex items-center">
                            <label htmlFor="" className="font-semibold text-sm">Dropdown</label>
                            <SelectInput 
                                className="ml-3 flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                        border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                        h-6_5 lg:h-7_5
                                        w-20 lg:w-27
                                        text-xs lg:text-sm"
                                option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                                option_li={select_item_li_1} 
                                default_option={select_item_li_1[0]}
                                returnVal={setOption1}
                            />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="" className="font-semibold text-sm">Dropdown</label>
                            <SelectInput 
                                className="ml-3 flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                        border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                        h-6_5 lg:h-7_5
                                        w-20 lg:w-27
                                        text-xs lg:text-sm"
                                option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                                option_li={select_item_li_1} 
                                default_option={select_item_li_1[0]}
                                returnVal={setOption1}
                            />
                        </div>
                    </div>
                </div>

                {/* table part */}
                <div className="mt-7 w-full">
                    <div className="text-black dark:text-white">
                        <div className="flex items-center px-3 w-full font-bold py-4 border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50
                                        text-9px sm:text-xs">
                            <div className="flex items-center
                                            w-30 sm:w-56">Label</div>
                            <div className="flex items-center flex-1">
                                <div className="">Label</div>
                                <div className="ml-auto">Label</div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col
                                        text-10px sm:text-sm">
                            {table_data.map((item, index) => {
                                return <div key={`data_${index}`} className="flex flex-col">
                                            <div className={`px-3 flex items-center w-full border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${index === 0 ? 'border-t' : ''}`}>
                                                <div className="flex items-center
                                                                w-30 sm:w-56
                                                                h-11 sm:h-71px">
                                                    <div className="w-4_5 sm:w-6 h-4_5 sm:h-6 rounded-full bg-c_E8EBF1"></div>
                                                    <div className="ml-2 font-semibold">{item.item1}</div>
                                                </div>
                                                <div className="flex items-center flex-1">
                                                    <div className="relative h-4_5 sm:h-6 bg-c_AADFBA" style={{width: `${item.item2}%`}}>
                                                        <div className="absolute top-0 left-0 w-full h-full flex flex-col">
                                                            <div className="font-semibold ml-5 my-auto">{item.item2}%</div>
                                                        </div>
                                                    </div>
                                                    <div className="relative h-4_5 sm:h-6 bg-c_E69898" style={{width: `${100 - item.item2}%`}}>
                                                        <div className="absolute top-0 left-0 w-full h-full flex flex-col">
                                                            <div className="font-semibold ml-auto mr-5 my-auto">{100 - item.item2}%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default React.memo(Component35)