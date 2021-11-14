import { useState } from 'react'
import {
    BsPieChartFill,
    BsStarFill,
    BsStar,
    FaCaretUp,
    FaCaretDown,
    BsChevronExpand
} from '../../icon/IconImage'
import DynamicLineChart from '../DynamicLineChart'

const Component05 = () => {
    let table_data = [
        {name: 'Bitcoin', label: 'BTC', enableBuyBtn: true, price: '42,345.42', h24: -1.24, d7: 0.18, d30: 0.18, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {name: 'Ethereum', label: 'ETH', enableBuyBtn: true, price: '42,345.42', h24: -1.24, d7: 0.18, d30: 0.18, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {name: 'Cardano', label: 'ADA', enableBuyBtn: false, price: '42,345.42', h24: -1.24, d7: 0.18, d30: 0.18, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
    ]
    let top_li = [
        {title: 'Top 10'},
        {title: 'Top Gainers'},
        {title: 'Top Loosers'}
    ]
    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))
    const [enableTop, setEnableTop] = useState([true, new Array(top_li.length - 1).fill(false)])

    const topHandler = (index) => {
        let new_array = new Array(top_li.length).fill(false)
        new_array[index] = true
        setEnableTop(new_array)
    }
    return (
        <>
            <div className="flex flex-col">
                <div className="items-center text-xs
                                block lg:flex">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-25 h-7_5 bg-white rounded-md cursor-pointer
                                        shadow-card dark:shadow-dark_card">
                            <BsStarFill className="text-c_6E7582"/>
                            <div className="text-c_6E7582 ml-2 font-semibold leading-normal">Watchlist</div>
                        </div>
                        <div className="flex items-center justify-center w-25 h-7_5 bg-white rounded-md ml-2 cursor-pointer
                                        shadow-card dark:shadow-dark_card">
                            <BsPieChartFill className="text-c_6E7582"/>
                            <div className="text-c_6E7582 ml-2 font-semibold leading-normal">Portfolio</div>
                        </div>
                    </div>
                    <div className="flex items-center flex-1 flex-wrap gap-y-3
                                    mt-3 lg:mt-0">
                        {top_li.map((item, index) => {
                            return <div key={`top_${index}`}
                                        className={`flex items-center justify-center px-3 h-7_5 text-white font-semibold leading-normal rounded-l-full rounded-r-full cursor-pointer mr-2
                                        ml-0 lg:ml-5
                                        ${enableTop[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white text-c_6E7582'}
                                        shadow-card dark:shadow-dark_card`}
                                        onClick={() => {topHandler(index)}}>
                                    {item.title}
                                    </div>
                        })}
                        <button className="font-semibold ml-auto text-sm
                                            text-c_1564C0 dark:text-dark_0fc9f2
                                            hidden sm:block">View All</button>
                    </div>
                    
                </div>

                <div className="w-full h-0.5
                                bg-c_E8EBF1 dark:bg-dark_0fc9f2
                                mt-4 sm:mt-7_5"></div>

                {/* table part */}
                <div className="hidden sm:block overflow-x-auto w-full">
                    <div className="text-black dark:text-white" style={{width: 1104}}>
                        <div className="flex items-center px-3 w-full font-bold py-4
                                        text-9px xl:text-xs">
                            <div className="flex items-center w-1/12">
                                <BsStar className="text-c_6E7582 dark:text-dark_0fc9f2 invisible"/>
                                <div className="ml-6">#</div>
                                <FaCaretUp className="ml-1"/>
                            </div>
                            <div className="w-48">Name</div>
                            <div className="text-right w-30">Price</div>
                            <div className="text-right w-32">24h %</div>
                            <div className="text-right w-27">7d %</div>
                            <div className="text-right w-27">30d %</div>
                            <div className="text-center flex-1">Last 7 Days</div>
                            <div className="w-5"></div>
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
                                                <div className="flex items-center w-48">
                                                    <div className="bg-c_E8EBF1 rounded-full
                                                                    w-4_5 xl:w-6 
                                                                    h-4_5 xl:h-6"></div>
                                                    <div className="ml-2 font-semibold">{item.name}</div>
                                                    <div className="ml-2 text-c_6E7582
                                                                    text-9px sm:text-xs">{item.label}</div>
                                                    <button className={`ml-2 flex items-center justify-center font-normal rounded-md 
                                                                        text-9px sm:text-xs
                                                                        w-7 xl:w-9 
                                                                        h-3 xl:h-5_5
                                                                        ${item.enableBuyBtn ? 'block' : 'hidden'}
                                                                        text-c_6E7582 dark:text-dark_0fc9f2
                                                                        shadow-card dark:shadow-dark_card`}>BUY</button>
                                                </div>
                                                <div className="text-right font-semibold w-30">${item.price}</div>
                                                <div className={`flex w-32 items-center justify-end font-medium ${item.h24 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                    <FaCaretDown className={`${item.h24 > 0 ? 'hidden' : 'block'}`}/>
                                                    <FaCaretUp className={`${item.h24 > 0 ? 'block' : 'hidden'}`}/>
                                                    <div>{Math.abs(item.h24)}%</div>
                                                </div>
                                                <div className={`flex w-27 items-center justify-end font-medium ${item.d7 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                    <FaCaretDown className={`${item.d7 > 0 ? 'hidden' : 'block'}`}/>
                                                    <FaCaretUp className={`${item.d7 > 0 ? 'block' : 'hidden'}`}/>
                                                    <div>{Math.abs(item.d7)}%</div>
                                                </div>
                                                <div className={`flex w-27 items-center justify-end font-medium ${item.d30 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                    <FaCaretDown className={`${item.d30 > 0 ? 'hidden' : 'block'}`}/>
                                                    <FaCaretUp className={`${item.d30 > 0 ? 'block' : 'hidden'}`}/>
                                                    <div>{Math.abs(item.d30)}%</div>
                                                </div>
                                                <DynamicLineChart className="flex-1 h-7_5" line_color={item.d7 > 0 ? '#64A879' : 'C85151'}/>
                                                <div className={`w-5 h-5 rounded-full flex flex-col ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}
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


                                            <div className={`px-3 ${enableExpand[index] ? 'block': 'hidden'}
                                                            bg-white dark:bg-gray-800
                                                            text-sm`}>
                                                <div className="flex items-center w-full h-9_5">
                                                    <div className="flex items-center w-1/12 h-full">
                                                    </div>
                                                    <div className="flex items-center w-48 h-full text-c_6E7582 font-normal border-b
                                                                    border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50">Market Cap</div>
                                                    <div className="h-full w-30 flex items-center justify-end font-semibold border-b
                                                                    border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50">${item.market_cap}</div>
                                                    <div className={`h-full flex items-center justify-start ml-20 text-c_6E7582 font-normal border-b
                                                                    border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50`} style={{width: '20%'}}>
                                                        Circulating Supply
                                                    </div>
                                                    <div className={`w-1/12 h-full flex items-center justify-center font-semibold border-b
                                                                    border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50`} style={{width: '10%'}}>
                                                        {item.circlating_supply}
                                                    </div>
                                                </div>

                                                <div className="flex items-center w-full h-9_5">
                                                    <div className="flex items-center w-1/12">
                                                    </div>
                                                    <div className="flex items-center w-48 h-full text-c_6E7582 font-normal border-b
                                                                    border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50">24 Hour Trading Vol</div>
                                                    <div className="h-full w-30 flex items-center justify-end font-semibold border-b
                                                                    border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50">{item.h24_trading_vol}</div>
                                                    <div className={`h-full ml-20 flex items-center justify-start text-c_6E7582 font-normal border-b
                                                                    border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50`} style={{width: '20%'}}>Total Supply</div>
                                                    <div className={`w-1/12 h-full flex items-center justify-center font-semibold border-b
                                                                    border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50`} style={{width: '10%'}}>
                                                        {item.total_supply}
                                                    </div>
                                                </div>

                                                <div className="flex items-center w-full h-9_5">
                                                    <div className="flex items-center w-1/12">
                                                    </div>
                                                    <div className="flex items-center w-48 h-full text-c_6E7582 font-normal">Fully Diluted Valuation</div>
                                                    <div className="h-full w-30 flex items-center justify-end font-semibold">${item.fully_diluted_valuation}</div>
                                                    <div className={`h-full flex ml-20 items-center justify-start text-c_6E7582 font-normal`} style={{width: '20%'}}>Max Supply</div>
                                                    <div className={`w-1/12 h-full flex items-center justify-center font-semibold`} style={{width: '10%'}}>
                                                        {item.max_supply}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>



                {/* mobile table */}
                <div className="block sm:hidden w-full">
                    <div className="text-black dark:text-white">
                        <div className="flex items-center px-3 w-full font-bold py-4
                                        text-9px xl:text-xs">
                            <div className="flex items-center w-1/12">
                                <BsStar className="text-c_6E7582 dark:text-dark_0fc9f2 invisible"/>
                                <div className="ml-1">#</div>
                                <FaCaretUp className="ml-1"/>
                            </div>
                            <div className="flex-1">Name</div>
                            <div className="text-right w-20">Price</div>
                            <div className="text-center w-20">Last 7 Days</div>
                            <div className="w-5"></div>
                        </div>
                        <div className="flex flex-col
                                        text-9px sm:text-sm">
                            {table_data.map((item, index) => {
                                return <div key={`data_${index}`} className="flex flex-col">
                                            <div className={`px-3 flex items-center w-full h-71px border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${enableExpand[index] ? 'bg-white dark:bg-gray-800' : ''}`}>
                                                <div className="flex items-center w-1/12">
                                                    <BsStar className="text-c_6E7582 dark:text-dark_0fc9f2"/>
                                                    <div className="font-semibold
                                                                    ml-2 sm:ml-6">{index + 1}</div>
                                                </div>
                                                <div className="flex items-center flex-1">
                                                    <div className="bg-c_E8EBF1 rounded-full
                                                                    w-4_5 xl:w-6 
                                                                    h-4_5 xl:h-6"></div>
                                                    <div className="ml-2 font-semibold">{item.name}</div>
                                                    <div className="ml-2 text-c_6E7582
                                                                    text-9px sm:text-xs">{item.label}</div>
                                                    <button className={`ml-2 flex items-center justify-center font-normal rounded-md 
                                                                        text-9px sm:text-xs
                                                                        w-7 xl:w-9 
                                                                        h-3 xl:h-5_5
                                                                        ${item.enableBuyBtn ? 'block' : 'hidden'}
                                                                        text-c_6E7582 dark:text-dark_0fc9f2
                                                                        shadow-card dark:shadow-dark_card`}>BUY</button>
                                                </div>
                                                <div className="text-right font-semibold w-20">${item.price}</div>
                                                
                                                <DynamicLineChart className="w-20 px-1 h-7_5" line_color={item.d7 > 0 ? '#64A879' : 'C85151'}/>
                                                <div className={`w-4 h-4 rounded-full flex flex-col ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}
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


                                            <div className={`px-3 ${enableExpand[index] ? 'block': 'hidden'}
                                                            bg-white dark:bg-gray-800
                                                            text-9px`}>

                                                <div className="flex flex-col w-full">
                                                    <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                        <div>24h %</div>
                                                        <div className={`flex items-center ml-auto font-semibold ${item.h24 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                            <FaCaretDown className={`${item.h24 > 0 ? 'hidden' : 'block'}`}/>
                                                            <FaCaretUp className={`${item.h24 > 0 ? 'block' : 'hidden'}`}/>
                                                            <div>{Math.abs(item.h24)}%</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                        <div>7d %</div>
                                                        <div className={`ml-auto flex items-center font-semibold ${item.d7 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                            <FaCaretDown className={`${item.d7 > 0 ? 'hidden' : 'block'}`}/>
                                                            <FaCaretUp className={`${item.d7 > 0 ? 'block' : 'hidden'}`}/>
                                                            <div>{Math.abs(item.d7)}%</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                        <div>30d %</div>
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
                                                            Circulating Supply
                                                        </div>
                                                        <div className={`ml-auto font-bold`}>{item.circlating_supply}</div>
                                                    </div>

                                                    <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                        <div className="text-c_6E7582 dark:text-white font-normal">24 Hour Trading Vol</div>
                                                        <div className="font-bold ml-auto ">{item.h24_trading_vol}</div>
                                                    </div>
                                                    <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                        <div className={`text-c_6E7582 dark:text-white font-normal`}>Total Supply</div>
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
                </div>
            </div>
        </>
    )
}

export default Component05