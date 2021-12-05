import { useState } from 'react'
import {
    BsChevronExpand,
    BsChevronDown,
} from '../../icon/IconImage'

import BarLineChart from '../BarLineChart'

const Component34 = () => {
    let table_data = [
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
        {item1: 'Sample Text', item2: '12-11-2021', item3: 'Sample Text', item4_1: 3.17, item4_2: 11919, item5_1: 56177.44, item5_2: 'Short'},
    ]
    let menuList = new Array(14).fill("Menu")
    
    let chart_data = {
        line1_data: [],
        line2_data: [],
        bar_data: []
    }
    for (let index = 0; index < 50; index++) {
        chart_data.line1_data.push(Math.floor(Math.random() * 350))
        chart_data.line2_data.push(Math.floor(Math.random() * 250))
        chart_data.bar_data.push(Math.floor(Math.random() * 100))
    }
    let capacity_li = [
        { title: 'Text', value1: 1.87, value2: 1821069 },
        { title: 'Text', value1: 14.14, value2: 14146834 },
        { title: 'Text', value1: 83.15, value2: 82439673 },
        { title: 'Text', value1: 297.7, value2: 297701189 },
    ]

    const [enableMenu, setEnableMenu] = useState([true, new Array(menuList.length - 1).fill(false)])
    const [enableMoreItem, setEnableMoreItem] = useState(false)
    const [enableMenuModal, setEnableMenuModal] = useState(false)
    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))


    const setMenuHandler = (index) => {
        let new_array = new Array(menuList.length).fill(false)
        new_array[index] = true
        setEnableMenu(new_array)
        setEnableMoreItem(false)
    }

    const openMenuModalHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        let new_array = new Array(menuList.length).fill(false)
        setEnableMenu(new_array)
        setEnableMoreItem(true)
        setEnableMenuModal(true)
    }

    const closeMenuModalHandler = () => {
        setEnableMenuModal(false)
        document.querySelector('body').style.overflow = 'auto'
    }
    
    const selectMenuOnModalHander = () => {
        closeMenuModalHandler()
    }

    return (
        <div className="text-black dark:text-white">
            <div className="flex items-center">
                <div className="font-semibold mr-4
                                text-lg sm:text-22px">Heading Title</div>
            </div>

            <div className="mt-6 flex items-center flex-wrap gap-x-4 gap-y-4">
                {menuList.map((item, index) => {
                    return (
                        <div key={`item_${index}`}>
                            <button className={`px-2 font-semibold rounded-full transform hover:scale-110 ease-out duration-700
                                                shadow-card dark:shadow-dark_card
                                                ${enableMenu[index] === true ? 'bg-c_1564C0 text-white dark:bg-dark_0fc9f2' : 'bg-white text-black'}
                                                h-6_5 sm:h-7_5
                                                text-xs sm:text-sm`}
                                    onClick={() => {setMenuHandler(index)}}>{item}</button>
                        </div>
                    )
                })}
                <button className={`px-2 font-semibold rounded-full transform hover:scale-110 ease-out duration-700
                                    text-c_1564C0 dark:text-dark_0fc9f2 bg-white dark:bg-transparent shadow-card dark:shadow-dark_card
                                    h-6_5 sm:h-7_5
                                    text-xs sm:text-sm`}
                        onClick={() => {openMenuModalHandler()}}>More</button>
            </div>

            
            <div className="mt-9_5 gap-x-5
                            block sm:flex">
                <div className="flex-col grid-cols-2
                                w-full sm:w-66
                                gap-3 sm:gap-0
                                grid sm:flex">
                    {capacity_li.map((item, index) => {
                        return (
                            <div key={`item_${index}`}
                                className={`aspect-w-9 aspect-h-4 rounded-md ${index !== 0 ? 'mt-auto' : ''}
                                            shadow-card dark:shadow-dark_card bg-white dark:bg-transparent`}>
                                <div className="w-full h-full flex flex-col
                                                px-3 sm:px-4_5 py-2 sm:py-3.5">
                                    <div className="font-semibold text-c_1564C0 dark:text-dark_0fc9f2 text-10px sm:text-sm">Text</div>
                                    <div className="flex flex-col font-semibold text-center my-auto">
                                        <div className="text-base sm:text-22px">${item.value1}M</div>
                                        <div className="text-10px sm:text-sm">${Number(item.value2).toLocaleString()}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex-1 pb-7_5 pt-8 rounded-md
                                shadow-card dark:shadow-dark_card bg-white dark:bg-transparent
                                mt-5 sm:mt-0
                                hidden lg:block">
                    <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false} height={436}/>
                </div>
                <div className="flex-1 rounded-md
                                shadow-card dark:shadow-dark_card bg-white dark:bg-transparent
                                mt-5 sm:mt-0
                                block lg:hidden">
                    <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false}/>
                </div>
            </div>

            <div className="mt-9 sm:mt-16 font-semibold
                            text-lg sm:text-22px">Heading Title</div>


            {/* table part */}
            <div className="hidden sm:block mt-7 overflow-x-auto w-full">
                <div className="text-black dark:text-white" style={{width: 1060}}>
                    <div className="grid items-center px-3 w-full font-bold py-4 grid-cols-5 border-t border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50
                                    text-9px xl:text-xs">
                        <div className="flex items-center">Label</div>
                        <div className="flex items-center">Label</div>
                        <div className="flex items-center">Label</div>
                        <div className="flex items-center justify-center">Label</div>
                        <div className="flex items-center justify-center">Label</div>
                    </div>
                    <div className="flex flex-col
                                    text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className="flex flex-col">
                                        <div className={`px-3 grid grid-cols-5 items-center w-full h-71px border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${index === 0 ? 'border-t' : ''}`}>
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 rounded-full bg-c_E8EBF1"></div>
                                                <div className="ml-2 font-semibold">{item.item1}</div>
                                                <div className="ml-1 text-xs text-c_6E7582">ABC</div>
                                            </div>
                                            <div className="flex items-center justify-start font-semibold">{item.item2}</div>
                                            <div className="flex items-center justify-start font-semibold">{item.item3}</div>
                                            <div className="flex flex-col font-semibold text-center">
                                                <div>${item.item4_1}K</div>
                                                <div>≈{item.item4_2}TLM</div>
                                            </div>
                                            <div className="flex flex-col font-semibold text-center">
                                                <div>${Number(item.item5_1).toLocaleString()}</div>
                                                <div className="text-c_C85151">{item.item5_2}</div>
                                            </div>
                                        </div>

                                    </div>
                        })}
                    </div>
                </div>
            </div>
            
            {/* mobile table */}
            <div className="block sm:hidden w-full mt-3">
                <div className="text-black dark:text-white">
                    <div className="grid items-center px-3 w-full font-bold py-4 grid-cols-3
                                    text-9px xl:text-xs">
                        <div className="flex items-center">Label</div>
                        <div className="flex items-cener">Label</div>
                        <div className="flex-1 justify-start">Label</div>
                    </div>
                    <div className="flex flex-col
                                    text-9px sm:text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className="flex flex-col">
                                        <div className={`px-3 grid grid-cols-3 items-center w-full h-12 border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${enableExpand[index] ? 'bg-white dark:bg-gray-800' : ''}`}>
                                            <div className="flex items-center h-full">
                                                <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                                                <span className="font-semibold flex items-center ml-2">{item.item1}</span>
                                            </div>
                                            <div>{item.item2}</div>
                                            <div className="flex items-center">
                                                <div>{item.item3}</div>
                                                <div className={`w-4 h-4 ml-auto rounded-full flex flex-col ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}
                                                                shadow-card dark:shadow-dark_card`}>
                                                    <div className="mx-auto my-auto cursor-pointer" 
                                                        onClick={() => {
                                                            const array_var = [...enableExpand]
                                                            array_var[index] = !enableExpand[index]
                                                            setEnableExpand(array_var)
                                                        }}>
                                                        <BsChevronExpand className={`${enableExpand[index] ? 'text-white' : 'text-c_1564C0 dark:text-dark_0fc9f2'}`}/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>


                                        <div className={`px-3 ${enableExpand[index] ? 'block': 'hidden'}
                                                        bg-white dark:bg-gray-800
                                                        text-9px`}>
                                            <div className="flex flex-col w-full">
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`flex items-center ml-auto font-semibold`}>
                                                        <div>${item.item4_1}K</div>
                                                        <div className="ml-2">≈{item.item4_2}TLM</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <div className="flex items-center h-9">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`flex items-center ml-auto font-semibold`}>
                                                        <div>${Number(item.item5_1).toLocaleString()}</div>
                                                        <div className="ml-2 text-c_C85151">{item.item5_2}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-6 sm:mt-10">
                <button className="flex items-center h-7 px-3.5 rounded-full font-semibold
                                transform hover:scale-110 ease-out duration-700
                                shadow-card dark:shadow-dark_card text-c_1564C0 dark:text-dark_0fc9f2 bg-white dark:bg-transparent
                                text-10px sm:text-sm">
                    Load More
                    <BsChevronDown className="stroke-1 ml-1" />
                </button>
            </div>


            {/* menu modal */}
            {enableMenuModal &&
                <div className="fixed top-0 left-0 bg-black bg-opacity-50 dark:bg-opacity-80 w-full h-screen flex flex-col text-black dark:text-white z-10
                                px-3 sm:px-0">
                    <div className="m-auto w-full max-w-430px pb-10 px-8 rounded-md
                                bg-c_F8F9FB dark:bg-gray-900 dark:shadow-dark_card
                                pt-6 sm:pt-7_5">
                        <div className="flex justify-end">
                            <button className="font-semibold text-xs text-c_1564C0 dark:text-dark_0fc9f2 transform hover:scale-110 ease-out duration-700"
                                    onClick={() => {closeMenuModalHandler()}}>Close</button>
                        </div>
                        <div className="mt-5">
                            {menuList.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`py-3 cursor-pointer transform hover:scale-110 ease-out duration-700 text-xs border-b border-c_E8EBF1 dark:border-dark_0fc9f2 ${index === 0 ? 'border-t' : ''}`}
                                        onClick={() => {selectMenuOnModalHander()}}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Component34