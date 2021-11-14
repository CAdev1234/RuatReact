import { useState } from 'react'
import {
    BsInfo,
    BsChevronDown,
    FaCaretUp,
    BsChevronExpand,
} from '../../icon/IconImage'

const Component08 = () => {
    let title_li = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5', 'Title 6', 'Title 7', 'Title 8', 'Title 9', 'Title 10']
    let category_li = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
    let table_data = [
        {name: 'Heading', price: 42345.42, ttl_vol: 25761236948, ttl_vol_perc: 0.18, liquidity: 927, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {name: 'Heading', price: 42345.42, ttl_vol: 25761236948, ttl_vol_perc: 0.18, liquidity: 927, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {name: 'Heading', price: 42345.42, ttl_vol: 25761236948, ttl_vol_perc: 0.18, liquidity: 927, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
    ]
    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))
    const [enableTitle, setEnableTitle] = useState([true, new Array(title_li.length - 1).fill(false)])
    const [enableCate, setEnableCate] = useState([true, new Array(category_li.length - 1).fill(false)])

    const titleHandler = (index) => {
        let new_array = new Array(title_li.length).fill(false)
        new_array[index] = true
        setEnableTitle(new_array)
    }
    const categoryHandler = (index) => {
        let new_array = new Array(title_li.length).fill(false)
        new_array[index] = true
        setEnableCate(new_array)
    }
    return (
        <>
            <div className="flex flex-col">
                <div className="w-full mx-auto mt-5 flex items-center flex-wrap gap-x-5 gap-y-5">
                    {title_li.map((item, index) => {
                        return <div 
                                    key={`submenu_${index}`} 
                                    className={`relative h-7_5 w-22_5 flex justify-center items-center rounded-r-full rounded-l-full text-sm cursor-pointer
                                                ${enableTitle[index] === true ? 'bg-c_1564C0 text-white dark:bg-dark_0fc9f2' : 'bg-white text-black font-semibold'}
                                                shadow-card dark:shadow-dark_card`}
                                    onClick={() => {titleHandler(index)}}>
                            {item}
                            {index === 7 && 
                                <div className="absolute -top-2 -right-1">
                                    <div className="relative w-4_5 h-4_5 rounded-full bg-c_C85151 flex items-center justify-center text-white text-9px">22
                                        <div className="absolute bg-c_C85151 w-4 h-4 rounded-full animate-ping"></div>
                                    </div>
                                </div>
                            }
                        </div>
                    })}
                </div>

                <div className="mt-14 items-center
                                block lg:flex
                                text-black dark:text-white">
                    <div className="font-semibold text-2xl">Heading Title</div>
                    <div className="mr-9 ml-24 w-0.5 h-7_5
                                    hidden lg:block
                                    bg-c_BCC3CF dark:bg-dark_0fc9f2"></div>
                    <div className="flex items-center flex-wrap gap-y-3
                                    mt-3 lg:mt-0">
                        {category_li.map((item, index) => {
                            return <div key={`submenu_${index}`} className={`h-7_5 w-27 flex justify-center items-center text-sm cursor-pointer ${enableCate[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white rounded-r-full rounded-l-full' : 'bg-transparent dark:text-white font-semibold'}`}
                                        onClick={() => {categoryHandler(index)}}>{item}</div>
                        })}
                    </div>
                </div>

                {/* table part */}
                <div className="overflow-x-auto w-full
                                hidden sm:block">
                    <div className="mt-5
                                text-black dark:text-white" style={{width: 1104}}>
                        <div className="flex items-center w-full text-xs font-bold py-4 px-6">
                            <div className="flex items-center w-10">
                                <div>#</div>
                                <FaCaretUp className="ml-1"/>
                            </div>
                            <div className="w-50">Name</div>
                            <div className="text-left w-16">Pairs</div>
                            <div className="text-right w-32">Avg. Price</div>
                            <div className="text-right w-40">Ttl. Vol</div>
                            <div className="text-right w-20">Ttl. Vol %</div>
                            <div className="flex items-center justify-end w-32">
                                <div>Confidence</div>
                                <div className="w-4 h-4 rounded-full text-white flex justify-center items-center ml-2 cursor-pointer
                                                bg-c_BCC3CF dark:bg-dark_0fc9f2">
                                    <BsInfo className="text-white" />
                                </div>
                            </div>
                            <div className="flex items-center w-28">
                                <div className="ml-auto">Liquidity</div>
                                <div className="w-4 h-4 rounded-full text-white flex justify-center items-center ml-2 cursor-pointer
                                                bg-c_BCC3CF dark:bg-dark_0fc9f2">
                                    <BsInfo className="text-white" />
                                </div>
                            </div>
                            <div className="w-24 flex items-center justify-end">Updated</div>
                            <div className="flex-1"></div>
                        </div>
                        <div className="flex flex-col text-sm">
                            {table_data.map((item, index) => {
                                return <div key={`data_${index}`} className="flex flex-col ">
                                            <div className={`flex items-center w-full h-76px px-6 border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${enableExpand[index] ? 'bg-white dark:bg-gray-800' : ''}`}>
                                                <div className="flex items-center w-10">
                                                    <div className="font-semibold text-center">{index + 1}</div>
                                                </div>
                                                <div className="flex items-center w-50">
                                                    <div className="bg-c_E8EBF1 w-6 h-6 rounded-full"></div>
                                                    <div className="ml-2 font-semibold">{item.name}</div>
                                                </div>
                                                <div className="text-left font-semibold w-16
                                                                text-c_1564C0 dark:text-dark_0fc9f2">ABC/XYZ</div>
                                                <div className={`w-32 flex items-center justify-end font-semibold`}>
                                                    <div>${Number(item.price).toLocaleString()}</div>
                                                </div>
                                                <div className="text-right font-semibold w-40">${Number(item.ttl_vol).toLocaleString()}</div>
                                                <div className={`text-right font-semibold w-20`}>
                                                    <div>{item.ttl_vol_perc}%</div>
                                                </div>
                                                <div className="flex items-center justify-end w-32">
                                                    <div className={`h-7_5 w-22_5 flex justify-center items-center rounded-r-full rounded-l-full text-sm text-white shadow-card bg-c_64A879`}>High</div>
                                                </div>
                                                <div className={`font-semibold text-right w-28`}>{item.liquidity}</div>
                                                <div className="w-24 flex items-center justify-end">
                                                    <div className="font-semibold">Recently</div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className={`w-5 h-5 ml-auto rounded-full flex flex-col shadow-card dark:shadow-dark_card ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}`}>
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
                                            

                                            <div className="bg-white dark:bg-gray-800">
                                                <div className={`flex items-center w-full py-3 px-6 ${enableExpand[index] ? 'block' : 'hidden'}`}>
                                                    <div className="flex items-center w-10 invisible">
                                                        <div className="font-semibold text-center">{index + 1}</div>
                                                    </div>
                                                    <div className="flex items-center w-50 invisible">
                                                        <div className="bg-c_E8EBF1 w-6 h-6 rounded-full"></div>
                                                        <div className="ml-2 font-semibold">{item.name}</div>
                                                    </div>
                                                    <div className="text-left font-semibold w-16
                                                                    text-c_1564C0 dark:text-dark_0fc9f2">ABC/XYZ</div>
                                                    <div className={`w-32 flex items-center justify-end font-semibold`}>
                                                        <div>${Number(item.price).toLocaleString()}</div>
                                                    </div>
                                                    <div className="text-right font-semibold w-40">${Number(item.ttl_vol).toLocaleString()}</div>
                                                    <div className={`text-right font-semibold w-20`}>
                                                        <div>{item.ttl_vol_perc}%</div>
                                                    </div>
                                                    <div className="flex items-center justify-end w-32">
                                                        <div className={`h-7_5 w-22_5 flex justify-center items-center rounded-r-full rounded-l-full text-sm text-white shadow-card bg-c_E5BE3D`}>Moderate</div>
                                                    </div>
                                                </div>
                                                <div className={`flex items-center w-full py-3 px-6 ${enableExpand[index] ? 'block' : 'hidden'}`}>
                                                    <div className="flex items-center w-10 invisible">
                                                        <div className="font-semibold text-center">{index + 1}</div>
                                                    </div>
                                                    <div className="flex items-center w-50 invisible">
                                                        <div className="bg-c_E8EBF1 w-6 h-6 rounded-full"></div>
                                                        <div className="ml-2 font-semibold">{item.name}</div>
                                                    </div>
                                                    <div className="text-left font-semibold w-16
                                                                    text-c_1564C0 dark:text-dark_0fc9f2">ABC/XYZ</div>
                                                    <div className={`w-32 flex items-center justify-end font-semibold`}>
                                                        <div>${Number(item.price).toLocaleString()}</div>
                                                    </div>
                                                    <div className="text-right font-semibold w-40">${Number(item.ttl_vol).toLocaleString()}</div>
                                                    <div className={`text-right font-semibold w-20`}>
                                                        <div>{item.ttl_vol_perc}%</div>
                                                    </div>
                                                    <div className="flex items-center justify-end w-32">
                                                        <div className={`h-7_5 w-22_5 flex justify-center items-center rounded-r-full rounded-l-full text-sm text-white bg-c_C85151`}>Low</div>
                                                    </div>
                                                </div>
                                                <div className={`flex items-center w-full py-3 px-6 ${enableExpand[index] ? 'block' : 'hidden'}`}>
                                                    <div className="flex items-center w-10 invisible">
                                                        <div className="font-semibold text-center">{index + 1}</div>
                                                    </div>
                                                    <div className="flex items-center w-50 invisible">
                                                        <div className="bg-c_E8EBF1 w-6 h-6 rounded-full"></div>
                                                        <div className="ml-2 font-semibold">{item.name}</div>
                                                    </div>
                                                    <div className="text-left font-semibold w-16
                                                                    text-c_1564C0 dark:text-dark_0fc9f2">ABC/XYZ</div>
                                                    <div className={`w-32 flex items-center justify-end font-semibold`}>
                                                        <div>${Number(item.price).toLocaleString()}</div>
                                                    </div>
                                                    <div className="text-right font-semibold w-40">${Number(item.ttl_vol).toLocaleString()}</div>
                                                    <div className={`text-right font-semibold w-20`}>
                                                        <div>{item.ttl_vol_perc}%</div>
                                                    </div>
                                                    <div className="flex items-center justify-end w-32">
                                                        <div className={`h-7_5 w-22_5 flex justify-center items-center rounded-r-full rounded-l-full text-sm text-white shadow-card bg-c_64A879`}>High</div>
                                                    </div>
                                                </div>
                                            </div>


                                            
                                        </div>
                            })}
                        </div>
                    </div>
                </div>


                {/* mobile table */}
                <div className="w-full
                                block sm:hidden">
                    <div className="mt-5
                                text-black dark:text-white">
                        <div className="flex items-center w-full text-10px font-bold py-4 px-3">
                            <div className="flex items-center w-8">
                                <div>#</div>
                                <FaCaretUp className="ml-1"/>
                            </div>
                            <div className="w-30">Name</div>
                            <div className="text-left w-20">Pairs</div>
                            <div className="text-left w-20">Avg. Price</div>
                            {/* <div className="text-right w-40">Ttl. Vol</div> */}
                            {/* <div className="text-right w-20">Ttl. Vol %</div> */}
                            <div className="flex items-center justify-start w-25">
                                <div>Confidence</div>
                                <div className="w-4 h-4 rounded-full text-white flex justify-center items-center ml-2 cursor-pointer
                                                bg-c_BCC3CF dark:bg-dark_0fc9f2">
                                    <BsInfo className="text-white" />
                                </div>
                            </div>
                            <div className="flex-1"></div>
                        </div>
                        <div className="flex flex-col text-10px">
                            {table_data.map((item, index) => {
                                return <div key={`data_${index}`} className="flex flex-col ">
                                            <div className={`flex items-center w-full h-76px px-3 border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${enableExpand[index] ? 'bg-white dark:bg-gray-800' : ''}`}>
                                                <div className="flex items-center w-8">
                                                    <div className="font-semibold text-center">{index + 1}</div>
                                                </div>
                                                <div className="flex items-center w-30">
                                                    <div className="bg-c_E8EBF1 w-6 h-6 rounded-full"></div>
                                                    <div className="ml-2 font-semibold">{item.name}</div>
                                                </div>
                                                <div className="text-left font-semibold w-20
                                                                text-c_1564C0 dark:text-dark_0fc9f2">ABC/XYZ</div>
                                                <div className={`w-20 flex items-center justify-start font-semibold`}>
                                                    <div>${Number(item.price).toLocaleString()}</div>
                                                </div>
                                                <div className="flex items-center justify-start w-25">
                                                    <div className={`h-4_5 w-15 flex justify-center items-center rounded-r-full rounded-l-full text-9px text-white shadow-card bg-c_64A879`}>High</div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className={`w-5 h-5 ml-auto rounded-full flex flex-col shadow-card dark:shadow-dark_card ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}`}>
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
                                            

                                            <div className="bg-white dark:bg-gray-800">
                                                <div className={`flex items-center w-full py-3 px-3 ${enableExpand[index] ? 'block' : 'hidden'}`}>
                                                    <div className="flex items-center w-8 invisible">
                                                        <div className="font-semibold text-center">{index + 1}</div>
                                                    </div>
                                                    <div className="flex items-center w-30 invisible">
                                                        <div className="bg-c_E8EBF1 w-6 h-6 rounded-full"></div>
                                                        <div className="ml-2 font-semibold">{item.name}</div>
                                                    </div>
                                                    <div className="text-left font-semibold w-20
                                                                    text-c_1564C0 dark:text-dark_0fc9f2">ABC/XYZ</div>
                                                    <div className={`w-20 flex items-center justify-start font-semibold`}>
                                                        <div>${Number(item.price).toLocaleString()}</div>
                                                    </div>
                                                    <div className="flex items-center justify-start w-25">
                                                        <div className={`h-4_5 w-15 flex justify-center items-center rounded-r-full rounded-l-full text-9px text-white shadow-card bg-c_E5BE3D`}>Moderate</div>
                                                    </div>
                                                    <div className="flex-1 invisible">
                                                        <div className={`w-5 h-5 ml-auto rounded-full flex flex-col shadow-card dark:shadow-dark_card ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}`}>
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

                                                <div className={`flex items-center w-full py-3 px-3 ${enableExpand[index] ? 'block' : 'hidden'}`}>
                                                    <div className="flex items-center w-8 invisible">
                                                        <div className="font-semibold text-center">{index + 1}</div>
                                                    </div>
                                                    <div className="flex items-center w-30 invisible">
                                                        <div className="bg-c_E8EBF1 w-6 h-6 rounded-full"></div>
                                                        <div className="ml-2 font-semibold">{item.name}</div>
                                                    </div>
                                                    <div className="text-left font-semibold w-20
                                                                    text-c_1564C0 dark:text-dark_0fc9f2">ABC/XYZ</div>
                                                    <div className={`w-20 flex items-center justify-start font-semibold`}>
                                                        <div>${Number(item.price).toLocaleString()}</div>
                                                    </div>
                                                    <div className="flex items-center justify-start w-25">
                                                        <div className={`h-4_5 w-15 flex justify-center items-center rounded-r-full rounded-l-full text-9px text-white shadow-card bg-c_E5BE3D`}>Moderate</div>
                                                    </div>
                                                    <div className="flex-1 invisible">
                                                        <div className={`w-5 h-5 ml-auto rounded-full flex flex-col shadow-card dark:shadow-dark_card ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}`}>
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
                                                
                                            </div>


                                            
                                        </div>
                            })}
                        </div>
                    </div>
                </div>


                <div className="w-full relative mt-9 h-7
                                hidden sm:block">
                    <div className="flex items-center h-full text-xs font-medium leading-normal text-c_6E7582 dark:text-white">Showing 1 - 5 out of 148</div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                        <div className="px-3 flex justify-center items-center cursor-pointer text-sm leading-tight rounded-full 
                                        shadow-card dark:shadow-dark_card
                                        bg-white dark:bg-dark_0fc9f2
                                        text-c_1564C0 dark:text-white">
                            <div className="font-semibold">Load More</div>
                            <div className="ml-2">
                                <BsChevronDown />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-9 h-7
                                block sm:hidden">
                    <div className="flex items-center justify-center h-full text-xs font-medium leading-normal text-c_6E7582 dark:text-white">Showing 1 - 5 out of 148</div>
                    <div className="mt-2 w-full h-full flex justify-center">
                        <div className="px-3 flex justify-center items-center cursor-pointer text-sm leading-tight rounded-full 
                                        shadow-card dark:shadow-dark_card
                                        bg-white dark:bg-dark_0fc9f2
                                        text-c_1564C0 dark:text-white">
                            <div className="font-semibold">Load More</div>
                            <div className="ml-2">
                                <BsChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Component08