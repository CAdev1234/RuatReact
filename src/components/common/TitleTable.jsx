import { useState } from 'react'
import {
    BsInfo,
    FaCaretDown,
    FaCaretUp,
    BsChevronExpand,
} from '../icon/IconImage'

const TitleTable = () => {
    let title_li = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5', 'Title 6', 'Title 7', 'Title 8', 'Title 9', 'Title 10']
    let category_li = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
    let table_data = [
        {name: 'Heading', price: 42345.42, ttl_vol: 25761236948, ttl_vol_perc: 0.18, liquidity: 927, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {name: 'Heading', price: 42345.42, ttl_vol: 25761236948, ttl_vol_perc: 0.18, liquidity: 927, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
        {name: 'Heading', price: 42345.42, ttl_vol: 25761236948, ttl_vol_perc: 0.18, liquidity: 927, last_7days: '', market_cap: '1,070,014,284,715', circlating_supply: '18,840,650', h24_trading_vol: '$41,260,909,468', total_supply: '21,000,000', fully_diluted_valuation: '$1,192,649,934,000', max_supply: '21,000,000'},
    ]
    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))
    return (
        <>
            <div className="flex flex-col">
                <div className="w-full mx-auto mt-5 flex items-center flex-wrap gap-x-5 gap-y-5">
                    {title_li.map((item, index) => {
                        return <div 
                                    key={`submenu_${index}`} 
                                    className={`relative h-7_5 w-20 flex justify-center items-center rounded-r-full rounded-l-full text-sm
                                                ${index === 0 ? 'bg-c_1564C0 text-white dark:bg-dark_0fc9f2' : 'bg-white text-black font-semibold'}
                                                shadow-card dark:shadow-dark_card`}>
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
                            return <div key={`submenu_${index}`} className={`h-7_5 w-28 flex justify-center items-center text-sm ${index === 0 ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white rounded-r-full rounded-l-full shadow-card' : 'bg-transparent dark:text-white font-semibold'}`}>{item}</div>
                        })}
                    </div>
                </div>

                {/* table part */}
                <div className="overflow-x-auto w-full">
                    <div className="mt-5
                                text-black dark:text-white"
                        style={{width: 1050}}>
                        <div className="flex items-center w-full text-xs font-bold py-4">
                            <div className="flex items-center pl-5" style={{width: '7%'}}>
                                <div>#</div>
                                <FaCaretUp className="ml-1"/>
                            </div>
                            <div className="" style={{width: '10%'}}>Name</div>
                            <div className="text-right" style={{width: '10%'}}>Pairs</div>
                            <div className="text-center" style={{width: '10%'}}>Avg. Price</div>
                            <div className="text-right" style={{width: '10%'}}>Ttl. Vol</div>
                            <div className="text-right" style={{width: '10%'}}>Ttl. Vol %</div>
                            <div className="flex items-center justify-center" style={{width: '15%'}}>
                                <div>Confidence</div>
                                <div className="w-4 h-4 rounded-full text-white flex justify-center items-center ml-2 cursor-pointer
                                                bg-c_BCC3CF dark:bg-dark_0fc9f2">
                                    <BsInfo className="text-white" />
                                </div>
                            </div>
                            <div className="flex items-center" style={{width: '7%'}}>
                                <div className="ml-auto flex-1">Liquidity</div>
                                <div className="w-4 h-4 rounded-full text-white flex justify-center items-center ml-auto cursor-pointer
                                                bg-c_BCC3CF dark:bg-dark_0fc9f2">
                                    <BsInfo className="text-white" />
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center pr-5">Updated</div>
                        </div>
                        <div className="flex flex-col text-sm">
                            {table_data.map((item, index) => {
                                return <div key={`data_${index}`} className="flex flex-col">
                                            <div className={`flex items-center w-full py-4 ${enableExpand[index] ? 'bg-white dark:bg-transparent' : ''}`}>
                                                <div className="flex items-center pl-5" style={{width: '7%'}}>
                                                    <div className="font-semibold text-center">{index + 1}</div>
                                                </div>
                                                <div className="flex items-center" style={{width: '10%'}}>
                                                    <div className="bg-c_E8EBF1 w-6 h-6 rounded-full"></div>
                                                    <div className="ml-1 font-semibold">{item.name}</div>
                                                </div>
                                                <div className="text-right font-semibold
                                                                text-c_1564C0 dark:text-dark_0fc9f2"
                                                    style={{width: '10%'}}>ABC/XYZ</div>
                                                <div className={`flex items-center justify-center font-semibold`} style={{width: '10%'}}>
                                                    <div>${Number(item.price).toLocaleString()}</div>
                                                </div>
                                                <div className="text-right font-semibold" style={{width: '10%'}}>${Number(item.ttl_vol).toLocaleString()}</div>
                                                <div className={`text-right font-semibold`} style={{width: '10%'}}>
                                                    <div>{item.ttl_vol_perc}%</div>
                                                </div>
                                                <div className="flex items-center justify-center" style={{width: '15%'}}>
                                                    <div className={`h-7_5 w-24 flex justify-center items-center rounded-r-full rounded-l-full text-sm text-white shadow-card bg-c_64A879`}>High</div>
                                                </div>
                                                <div className={`font-semibold text-right`} style={{width: '7%'}}>{item.liquidity}</div>
                                                <div className="flex-1 flex items-center justify-center pr-5">
                                                    <div className="font-semibold mr-5">Recently</div>
                                                    <div className={`w-5 h-5 rounded-full flex flex-col shadow-card dark:shadow-dark_card ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}`}>
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


                                            <div className={`bg-white dark:bg-transparent text-black dark:text-white ${enableExpand[index] ? 'block': 'hidden'}`}>
                                                <div className={`flex items-center w-full py-4 ${enableExpand[index] ? 'bg-white dark:bg-transparent' : ''}`}>
                                                    <div className="flex items-center pl-5" style={{width: '7%'}}>
                                                        <div className="font-semibold text-center hidden">{index + 1}</div>
                                                    </div>
                                                    <div className="flex items-center" style={{width: '10%'}}>
                                                        <div className="bg-c_E8EBF1 w-6 h-6 rounded-full hidden"></div>
                                                        <div className="ml-1 font-semibold hidden">{item.name}</div>
                                                    </div>
                                                    <div className="text-right font-semibold
                                                                    text-c_1564C0 dark:text-dark_0fc9f2"
                                                        style={{width: '10%'}}>ABC/XYZ</div>
                                                    <div className={`flex items-center justify-center font-semibold`} style={{width: '10%'}}>
                                                        <div>${Number(item.price).toLocaleString()}</div>
                                                    </div>
                                                    <div className="text-right font-semibold" style={{width: '10%'}}>${Number(item.ttl_vol).toLocaleString()}</div>
                                                    <div className={`text-right font-semibold`} style={{width: '10%'}}>
                                                        <div>{item.ttl_vol_perc}%</div>
                                                    </div>
                                                    <div className="flex items-center justify-center" style={{width: '15%'}}>
                                                        <div className={`h-7_5 w-24 flex justify-center items-center rounded-r-full rounded-l-full text-sm text-white shadow-card bg-c_64A879`}>High</div>
                                                    </div>
                                                    <div className={`font-semibold text-right`} style={{width: '7%'}}>{item.liquidity}</div>
                                                    <div className="flex-1 flex items-center justify-center pr-5">
                                                        <div className="font-semibold mr-5 hidden">Recently</div>
                                                        <div className={`hidden w-5 h-5 rounded-full flex-col shadow-card dark:shadow-dark_card ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}`}>
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
                
            </div>
        </>
    )
}

export default TitleTable