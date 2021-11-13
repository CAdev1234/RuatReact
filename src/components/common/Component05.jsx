import { useState } from 'react'
import {
    BsPieChartFill,
    BsStarFill,
    BsStar,
    FaCaretUp,
    FaCaretDown,
    BsChevronExpand
} from '../icon/IconImage'
import DynamicLineChart from './DynamicLineChart'

const Component05 = () => {
    let table_data = [
        {name: 'Bitcoin', label: 'BTC', enableBuyBtn: true, price: '42,345.42', h24: -1.24, d7: 0.18, d30: 0.18, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {name: 'Ethereum', label: 'ETH', enableBuyBtn: true, price: '42,345.42', h24: -1.24, d7: 0.18, d30: 0.18, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {name: 'Cardano', label: 'ADA', enableBuyBtn: false, price: '42,345.42', h24: -1.24, d7: 0.18, d30: 0.18, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
    ]
    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))
    return (
        <>
            <div className="flex flex-col">
                <div className="items-center text-xs
                                block lg:flex">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-25 h-7_5 bg-white rounded-md
                                        shadow-card dark:shadow-dark_card">
                            <BsStarFill className="text-c_6E7582"/>
                            <div className="text-c_6E7582 ml-2 font-semibold">Watchlist</div>
                        </div>
                        <div className="flex items-center justify-center w-25 h-7_5 bg-white rounded-md ml-2
                                        shadow-card dark:shadow-dark_card">
                            <BsPieChartFill className="text-c_6E7582"/>
                            <div className="text-c_6E7582 ml-2 font-semibold">Portfolio</div>
                        </div>
                    </div>
                    <div className="flex items-center flex-1 flex-wrap gap-y-3
                                    mt-3 lg:mt-0">
                        <div className="flex items-center justify-center w-16 h-7_5 text-white font-semibold rounded-l-full rounded-r-full
                                        ml-0 lg:ml-5
                                        bg-c_1564C0 dark:bg-dark_0fc9f2
                                        shadow-card dark:shadow-dark_card">Top 10</div>
                        <div className="flex items-center justify-center w-25 h-7_5 ml-5 bg-white text-c_6E7582 font-semibold rounded-l-full rounded-r-full
                                        shadow-card dark:shadow-dark_card">Top Gainers</div>
                        <div className="flex items-center justify-center w-25 h-7_5 ml-5 bg-white text-c_6E7582 font-semibold rounded-l-full rounded-r-full
                                        shadow-card dark:shadow-dark_card">Top Loosers</div>
                        <button className="font-semibold ml-auto text-sm
                                            text-c_1564C0 dark:text-dark_0fc9f2">View All</button>
                    </div>
                    
                </div>

                <div className="w-full h-0.5 mt-7_5
                                bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>

                {/* table part */}
                <div className=" overflow-x-auto w-full">
                    <div className="text-black dark:text-white" style={{width: 1050}}>
                        <div className="flex items-center w-full text-xs font-bold py-4">
                            <div className="flex items-center w-1/12 pl-5">
                                <div>#</div>
                                <FaCaretUp className="ml-1"/>
                            </div>
                            <div className="w-2/12">Name</div>
                            <div className="text-right" style={{width: '20%'}}>Price</div>
                            <div className="text-center" style={{width: '10%'}}>24h %</div>
                            <div className="text-center" style={{width: '10%'}}>7d %</div>
                            <div className="text-center" style={{width: '10%'}}>30d %</div>
                            <div className="text-center" style={{width: '20%'}}>Last 7 Days</div>
                        </div>
                        <div className="flex flex-col text-sm">
                            {table_data.map((item, index) => {
                                return <div key={`data_${index}`} className="flex flex-col">
                                            <div className={`flex items-center w-full py-4 ${enableExpand[index] ? 'bg-white dark:bg-transparent' : ''}`}>
                                                <div className="flex items-center w-1/12 pl-5">
                                                    <BsStar className="text-c_6E7582 dark:text-dark_0fc9f2"/>
                                                    <div className="font-semibold ml-4">{index + 1}</div>
                                                </div>
                                                <div className="flex items-center w-2/12">
                                                    <div className="bg-c_E8EBF1 w-6 h-6 rounded-full"></div>
                                                    <div className="ml-1 font-semibold">{item.name}</div>
                                                    <div className="ml-2 text-c_6E7582 text-xs">{item.label}</div>
                                                    <button className={`w-9 h-5_5 ml-2 flex items-center justify-center text-xs font-semibold rounded-md
                                                                        ${item.enableBuyBtn ? 'block' : 'hidden'}
                                                                        text-c_6E7582 dark:text-dark_0fc9f2
                                                                        shadow-card dark:shadow-dark_card`}>BUY</button>
                                                </div>
                                                <div className="text-right font-semibold" style={{width: '20%'}}>${item.price}</div>
                                                <div className={`flex items-center justify-center font-semibold ${item.h24 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`} style={{width: '10%'}}>
                                                    <FaCaretDown className={`${item.h24 > 0 ? 'hidden' : 'block'}`}/>
                                                    <FaCaretUp className={`${item.h24 > 0 ? 'block' : 'hidden'}`}/>
                                                    <div>{Math.abs(item.h24)}%</div>
                                                </div>
                                                <div className={`flex items-center justify-center font-semibold ${item.d7 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`} style={{width: '10%'}}>
                                                    <FaCaretDown className={`${item.d7 > 0 ? 'hidden' : 'block'}`}/>
                                                    <FaCaretUp className={`${item.d7 > 0 ? 'block' : 'hidden'}`}/>
                                                    <div>{Math.abs(item.d7)}%</div>
                                                </div>
                                                <div className={`w-1/12 flex items-center justify-center font-semibold ${item.d30 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`} style={{width: '10%'}}>
                                                    <FaCaretDown className={`${item.d30 > 0 ? 'hidden' : 'block'}`}/>
                                                    <FaCaretUp className={`${item.d30 > 0 ? 'block' : 'hidden'}`}/>
                                                    <div>{Math.abs(item.d30)}%</div>
                                                </div>
                                                <div className="flex-1 flex items-center pr-5">
                                                    <DynamicLineChart className="flex-1 h-7_5" line_color={item.d7 > 0 ? '#64A879' : 'C85151'} style={{width: '20%'}}/>
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
                                            </div>


                                            <div className={`${enableExpand[index] ? 'block': 'hidden'}
                                                            bg-white dark:bg-transparent
                                                            text-sm`}>
                                                <div className="flex items-center w-full py-4">
                                                    <div className="flex items-center w-1/12">
                                                    </div>
                                                    <div className="flex items-center w-2/12 text-c_6E7582 font-semibold">Market Cap</div>
                                                    <div className="text-right font-semibold" style={{width: '20%'}}>${item.market_cap}</div>
                                                    <div className={`flex items-center justify-center text-c_6E7582 font-semibold`} style={{width: '20%'}}>
                                                        Circulating Supply
                                                    </div>
                                                    <div className={`w-1/12 flex items-center justify-center font-semibold`} style={{width: '10%'}}>
                                                        {item.circlating_supply}
                                                    </div>
                                                </div>

                                                <div className="flex items-center w-full py-4">
                                                    <div className="flex items-center w-1/12">
                                                    </div>
                                                    <div className="flex items-center w-2/12 text-c_6E7582 font-semibold">24 Hour Trading Vol</div>
                                                    <div className="text-right font-semibold" style={{width: '20%'}}>${item.h24_trading_vol}</div>
                                                    <div className={`flex items-center justify-center text-c_6E7582 font-semibold`} style={{width: '20%'}}>Total Supply</div>
                                                    <div className={`w-1/12 flex items-center justify-center font-semibold`} style={{width: '10%'}}>
                                                        {item.total_supply}
                                                    </div>
                                                </div>

                                                <div className="flex items-center w-full py-4">
                                                    <div className="flex items-center w-1/12">
                                                    </div>
                                                    <div className="flex items-center w-2/12 text-c_6E7582 font-semibold">Fully Diluted Valuation</div>
                                                    <div className="text-right font-semibold" style={{width: '20%'}}>${item.fully_diluted_valuation}</div>
                                                    <div className={`flex items-center justify-center text-c_6E7582 font-semibold`} style={{width: '20%'}}>Max Supply</div>
                                                    <div className={`w-1/12 flex items-center justify-center font-semibold`} style={{width: '10%'}}>
                                                        {item.max_supply}
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