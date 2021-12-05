import { useState } from 'react'
import {
    FaCaretUp,
    FaCaretDown,
    BsChevronExpand,
    MdRefresh,
    BsFullscreen,
    BsDownload
} from '../../icon/IconImage'

import BarLineChart from '../BarLineChart'

const Component33 = () => {
    let table_data = [
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 78, item5: 0.18, item6: 0.18, item7: -0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 50, item5: 0.18, item6: 0.18, item7: 0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 20, item5: -0.18, item6: -0.18, item7: 0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 4, item5: 0.18, item6: 0.18, item7: -0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 98, item5: -0.18, item6: -0.18, item7: 0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 60, item5: 0.18, item6: 0.18, item7: 0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 78, item5: -0.18, item6: -0.18, item7: 0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 39, item5: 0.18, item6: -0.18, item7: -0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 40, item5: 0.18, item6: 0.18, item7: 0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 20, item5: -0.18, item6: 0.18, item7: -0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 79, item5: 0.18, item6: 0.18, item7: -0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 52, item5: 0.18, item6: -0.18, item7: 0.18},
        {item1: 'Sample Text', item2: 42345.42, item3: 41250909468, item4: 33, item5: -0.18, item6: 0.18, item7: 0.18},
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
                <div className="flex items-center cursor-pointer transform hover:scale-110 ease-out duration-700">
                    <div className="text-c_1564C0 stroke-1 text-sm mr-1 dark:text-dark_0fc9f2">
                        <MdRefresh />
                    </div>
                    <div className="text-c_1564C0 text-sm font-semibold dark:text-dark_0fc9f2">Sample Text</div>
                </div>
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


            {/* table part */}
            <div className="hidden sm:block mt-8 overflow-x-auto w-full">
                <div className="text-black dark:text-white" style={{width: 1060}}>
                    <div className="grid items-center px-3 w-full font-bold py-4 grid-cols-10 border-t border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50
                                    text-9px xl:text-xs">
                        <div className="flex items-center col-span-2">Label</div>
                        <div className="flex items-center justify-end">Label</div>
                        <div className="flex items-center col-span-2 justify-end">Label</div>
                        <div className="flex items-center col-span-2 justify-center">Label</div>
                        <div className="flex items-center justify-end">Label</div>
                        <div className="flex items-center justify-end">Label</div>
                        <div className="flex items-center justify-end">Label</div>
                    </div>
                    <div className="flex flex-col
                                    text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className="flex flex-col">
                                        <div className={`px-3 grid grid-cols-10 items-center w-full h-71px border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${index === 0 ? 'border-t' : ''}`}>
                                            <div className="flex items-center col-span-2">
                                                <div className="w-6 h-6 rounded-full bg-c_E8EBF1"></div>
                                                <div className="ml-2 font-semibold">{item.item1}</div>
                                                <div className="ml-1 text-xs text-c_6E7582">ABC</div>
                                            </div>
                                            <div className="flex items-center justify-end font-semibold">${Number(item.item2).toLocaleString()}</div>
                                            <div className="col-span-2 flex items-center justify-end font-semibold">${Number(item.item3).toLocaleString()}</div>
                                            <div className="col-span-2 flex items-center justify-center">
                                                <div className="w-8/12 flex items-center">
                                                    <div className="bg-c_E8EBF1 flex-1 h-2 rounded-full relative">
                                                        <div className="absolute h-full bg-c_EBE188 dark:bg-dark_FFEB3B rounded-full" style={{width: `${item.item4}%`}}></div>
                                                    </div>
                                                    <div className="font-semibold ml-1.5">{item.item4}%</div>
                                                </div>
                                                
                                            </div>
                                            <div className={`flex items-center justify-end font-medium ${item.item5 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item5 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item5 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item5)}%</div>
                                            </div>
                                            <div className={`flex items-center justify-end font-medium ${item.item6 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item6 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item6 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item6)}%</div>
                                            </div>
                                            <div className={`flex items-center justify-end font-medium ${item.item7 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item7 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item7 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item7)}%</div>
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
                        <div className="">Label</div>
                        <div className="flex-1">Label</div>
                        <div className="">Label</div>
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
                                            
                                            <div>${Number(item.item2).toLocaleString()}</div>

                                            <div className="flex items-center">
                                                <div className="">${Number(item.item3).toLocaleString()}</div>
                                                <div className={`ml-auto w-4 h-4 rounded-full flex flex-col ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}
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
                                                    <div className="ml-auto w-4/12 flex items-center">
                                                        <div className="bg-c_E8EBF1 flex-1 h-2 rounded-full relative">
                                                            <div className="absolute h-full bg-c_EBE188 dark:bg-dark_FFEB3B rounded-full" style={{width: `${item.item4}%`}}></div>
                                                        </div>
                                                        <div className="font-semibold ml-1.5">{item.item4}%</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`ml-auto flex items-center font-semibold ${item.item5 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.item5 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.item5 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.item5)}%</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`ml-auto flex items-center font-semibold ${item.item6 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.item6 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.item6 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.item6)}%</div>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center h-9">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`ml-auto flex items-center justify-start font-medium ${item.item7 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.item7 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.item7 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.item7)}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>

                <div className="w-full flex justify-center mt-5">
                    <button className="h-7 flex items-center justify-center px-4 text-10px font-semibold rounded-full
                                        text-c_1564C0 dark:text-dark_0fc9f2 shadow-card dark:shadow-dark_card">View All</button>
                </div>
            </div>


            <div className="mt-9_5 sm:mt-20">
                <div className="flex items-center">
                    <div className="font-semibold text-black dark:text-white
                                    text-lg sm:text-22px">Heading Title</div>
                    <div className="flex items-center ml-auto">
                        <BsFullscreen className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700
                                            text-black dark:text-dark_0fc9f2"/>
                        <BsDownload className="ml-5 stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700
                                            text-black dark:text-dark_0fc9f2"/>
                    </div>
                </div>

                <div className="mt-4 rounded-lg pb-8
                            bg-white dark:bg-transparent shadow-card dark:shadow-dark_card">
                    <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={true} />
                    
                </div>
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

export default Component33