import { useState } from 'react'
import {
    MdRefresh,
    FaCaretDown,
    FaCaretUp,
    BsChevronExpand,
    BsStar,
    BsChevronRight
} from '../../icon/IconImage'

const Component31 = () => {
    let menuList = new Array(14).fill("Menu")
    let table_data = [
        {item1: 27.33, item2: 'Bitcoin', item2_1: 'BTC', item3: 'Sample Text', item4: 42345.42, item5: 41260909468, item6: -1.24, item7: 41260909468, d7: 0.18, d30: 0.18, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {item1: 27.33, item2: 'Ethereum', item2_1: 'ETH', item3: 'Sample Text', item4: 42345.42, item5: 41260909468, item6: 1.24, item7: 41260909468, d7: 0.18, d30: 0.18, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {item1: 27.33, item2: 'Cardano', item2_1: 'ADA', item3: 'Sample Text', item4: 42345.42, item5: 41260909468, item6: -1.24, item7: 41260909468, d7: 0.18, d30: 0.18, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
    ]

    const [enableMenu, setEnableMenu] = useState([true, new Array(menuList.length - 1).fill(false)])
    const [enableMoreItem, setEnableMoreItem] = useState(false)
    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))
    const [enableMenuModal, setEnableMenuModal] = useState(false)

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


            <div className="w-full h-0.5
                            bg-c_E8EBF1 dark:bg-dark_0fc9f2
                            mt-4 sm:mt-7_5
                            hidden sm:block"></div>

            {/* table part */}
            <div className="hidden sm:block overflow-x-auto w-full">
                <div className="text-black dark:text-white" style={{width: 1060}}>
                    <div className="flex items-center px-3 w-full font-bold py-4
                                    text-9px xl:text-xs">
                        <div className="flex items-center w-1/12">
                            <BsStar className="text-c_6E7582 dark:text-dark_0fc9f2 invisible"/>
                            <div className="ml-6">#</div>
                            <FaCaretUp className="ml-1"/>
                        </div>
                        <div className="w-14 text-right">Label</div>
                        <div className="w-48 pl-5">Label</div>
                        <div className="text-left w-30">Label</div>
                        <div className="text-right w-32">Label</div>
                        <div className="text-right w-40">Label</div>
                        <div className="text-right w-27">Label</div>
                        <div className="text-center flex-1">Label</div>
                    </div>
                    <div className="flex flex-col
                                    text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className="flex flex-col">
                                        <div className={`px-3 flex items-center w-full h-71px ${enableExpand[index] ? 'bg-white dark:bg-gray-800' : 'border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50'}`}>
                                            <div className="flex items-center w-1/12
                                                            ">
                                                <BsStar className="text-c_6E7582 dark:text-dark_0fc9f2"/>
                                                <div className="font-semibold
                                                                ml-2 sm:ml-6">{index + 1}</div>
                                            </div>
                                            <div className="flex justify-end w-14 font-semibold">1{item.item1}%</div>
                                            <div className="flex items-center w-48 pl-5">
                                                <div className="bg-c_E8EBF1 rounded-full
                                                                w-4_5 xl:w-6 
                                                                h-4_5 xl:h-6"></div>
                                                <div className="ml-2 font-semibold">{item.item2}</div>
                                                <div className="ml-2 text-c_6E7582
                                                                text-9px sm:text-xs">{item.item2_1}</div>
                                            </div>
                                            <div className="text-left font-semibold w-30 text-c_1564C0 dark:text-dark_0fc9f2">{item.item3}</div>
                                            <div className={`flex w-32 items-center justify-end font-medium`}>
                                                <div>${Number(item.item4).toLocaleString()}</div>
                                            </div>
                                            <div className={`flex w-40 items-center justify-end font-medium`}>
                                                <div>${Number(item.item5).toLocaleString()}</div>
                                            </div>
                                            <div className={`flex w-27 items-center justify-end font-medium ${item.item6 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item6 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item6 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item6)}%</div>
                                            </div>
                                            <div className="flex-1 flex items-center justify-center">
                                                <div className="font-medium text-right">${Number(item.item7).toLocaleString()}</div>
                                                <div className={`ml-7 w-5 h-5 rounded-full flex flex-col ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}
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
                                                        text-sm
                                                        pb-11`}>
                                            <div className="flex items-center w-full h-9_5">
                                                <div className="flex items-center w-1/12 h-full">
                                                </div>
                                                <div className="w-14 h-full flex items-center"></div>
                                                <div className="w-5 h-full flex items-center"></div>
                                                <div className="flex items-center w-48 h-full text-c_6E7582 font-normal border-b
                                                                border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50">Sample Text</div>
                                                <div className="h-full w-30 flex items-center justify-end font-semibold border-b
                                                                border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50">${item.market_cap}</div>
                                                <div className={`h-full flex items-center justify-start ml-6 text-c_6E7582 font-normal border-b
                                                                border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50`} style={{width: '20%'}}>
                                                    Sample Text
                                                </div>
                                                <div className={`w-1/12 h-full flex items-center justify-center font-semibold border-b
                                                                border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50`} style={{width: '10%'}}>
                                                    {item.circlating_supply}
                                                </div>
                                            </div>

                                            <div className="flex items-center w-full h-9_5">
                                                <div className="flex items-center w-1/12">
                                                </div>
                                                <div className="flex items-center w-14"></div>
                                                <div className="w-5 h-full flex items-center"></div>
                                                <div className="flex items-center w-48 h-full text-c_6E7582 font-normal border-b
                                                                border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50">%</div>
                                                <div className="h-full w-30 flex items-center justify-end font-semibold border-b
                                                                border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50">{item.h24_trading_vol}</div>
                                                <div className={`h-full ml-6 flex items-center justify-start text-c_6E7582 font-normal border-b
                                                                border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50`} style={{width: '20%'}}>%</div>
                                                <div className={`w-1/12 h-full flex items-center justify-center font-semibold border-b
                                                                border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50`} style={{width: '10%'}}>
                                                    {item.total_supply}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="relative mt-7_5 h-7 items-center
                            hidden sm:flex">
                <div className="text-xs font-semibold text-c_6E7582">Total Count: {table_data.length}</div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                    <button className="px-3.5 h-full flex items-center justify-center rounded-full text-sm font-semibold transform hover:scale-110 ease-out duration-700 
                                    text-c_1564C0 dark:text-dark_0fc9f2 bg-white dark:bg-transparent shadow-card dark:shadow-dark_card">
                        <span>View All</span>
                        <BsChevronRight className="ml-1 stroke-1"/>
                    </button>
                </div>
            </div>



            {/* mobile table */}
            <div className="block sm:hidden w-full mt-3">
                <div className="text-black dark:text-white">
                    <div className="flex items-center px-3 w-full font-bold py-4
                                    text-9px xl:text-xs">
                        <div className="flex items-center w-10">
                            <BsStar className="text-c_6E7582 dark:text-dark_0fc9f2 invisible"/>
                            <div className="ml-1">#</div>
                            <FaCaretUp className="ml-1"/>
                        </div>
                        <div className="w-14 text-right">Label</div>
                        <div className="flex-1 pl-5">Label</div>
                        <div className="text-center w-25">Label</div>
                    </div>
                    <div className="flex flex-col
                                    text-9px sm:text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className="flex flex-col">
                                        <div className={`px-3 flex items-center w-full h-12 border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${enableExpand[index] ? 'bg-white dark:bg-gray-800' : ''}`}>
                                            <div className="flex items-center w-10 h-full">
                                                <BsStar className="text-c_6E7582 dark:text-dark_0fc9f2"/>
                                                <span className="font-semibold flex items-center
                                                                ml-2 sm:ml-6">{index + 1}</span>
                                            </div>
                                            <div className="w-14 flex justify-end font-semibold">{item.item1}%</div>
                                            <div className="flex items-center flex-1 pl-5">
                                                <div className="bg-c_E8EBF1 rounded-full
                                                                w-4_5 xl:w-6 
                                                                h-4_5 xl:h-6"></div>
                                                <div className="ml-2 font-semibold">{item.item2}</div>
                                                <div className="ml-2 text-c_6E7582
                                                                text-9px sm:text-xs">{item.item2_1}</div>
                                            </div>
                                            <div className="w-25 flex items-center justify-center">
                                                <div className="font-semibold">{item.item3}</div>
                                                
                                                <div className={`w-4 h-4 ml-4_5 rounded-full flex flex-col ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}
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
                                                    <div className={`flex items-center ml-auto font-semibold ${item.item6 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.item6 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.item6 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.item6)}%</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`ml-auto flex items-center font-semibold ${item.d7 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.d7 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.d7 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.d7)}%</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`ml-auto flex items-center font-semibold ${item.d30 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.d30 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.d30 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.d30)}%</div>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white font-normal">Market Cap</div>
                                                    <div className="ml-auto font-bold">${item.market_cap}</div>
                                                </div>
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className={`text-c_6E7582 dark:text-white font-normal`}>
                                                        Sample Text
                                                    </div>
                                                    <div className={`ml-auto font-bold`}>{item.circlating_supply}</div>
                                                </div>

                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white font-normal">Sample Text</div>
                                                    <div className="font-bold ml-auto ">{item.h24_trading_vol}</div>
                                                </div>
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className={`text-c_6E7582 dark:text-white font-normal`}>Sample Text</div>
                                                    <div className={`ml-auto font-bold`}>{item.total_supply}</div>
                                                </div>
                                                
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white font-normal">Fully Diluted Valuation</div>
                                                    <div className="font-bold ml-auto">${item.fully_diluted_valuation}</div>
                                                </div>
                                                <div className="flex items-center h-9">
                                                    <div className={`text-c_6E7582 dark:text-white font-normal`}>Max Supply</div>
                                                    <div className={`font-bold ml-auto`}>{item.max_supply}</div>
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

export default Component31