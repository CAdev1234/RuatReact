import { useEffect } from 'react';
import {
    BsChevronRight,
    BsDownload,
    BsBoxArrowUpRight,
    FaCaretUp,
    FaCaretDown
} from '../icon/IconImage'

const Component07 = () =>  {
    let currency_price_detail = [
        {title: 'Open',                 price: 2.44,                perc: null},
        {title: 'High',                 price: 2.66,                perc: null},
        {title: '1 Hour',               price: null,                perc: -27.03},
        {title: '24 Hours',             price: null,                perc: -27.03},
        {title: '3 Months',             price: null,                perc: 27.03},
        {title: '1 YTD',                price: null,                perc: -27.03},
        {title: 'Low',                  price: 2.66,                perc: null},
        {title: 'Close',                price: 2.40,                perc: null},
        {title: '7 Days',               price: null,                perc: -27.03},
        {title: '1 Month',              price: null,                perc: -27.03},
        {title: '1 Year',               price: null,                perc: -27.03},
        {title: 'All Time',             price: null,                perc: -27.03},
        {title: 'Price Change',         price: 0.20,                perc: -27.03},
        {title: 'Volume Tradeed (24h)', price: 5493014091.31,       perc: -27.03},
    ]
    let currency_custom_detail = [
        {title: 'Name',             detail: 'Cardano',          link: null},
        {title: 'Symbol',           detail: 'ADA',              link: null},
        {title: 'Explorer 1',       detail: 'cardano.org',      link: 'https://cardona.org'},
        {title: 'Explorer 2',       detail: 'cardano.org',      link: 'https://cardona.org'},
        {title: 'Community 1',      detail: 'Telegram',         link: 'https://cardona.org'},
        {title: 'Community 2',      detail: 'Reddit',           link: 'https://cardona.org'},
        {title: 'Website',          detail: 'cardano.org',      link: 'https://cardona.org'},
        {title: 'Whitepaper',       detail: 'View',             link: 'https://cardona.org'},
        {title: 'Explorer 3',       detail: 'cardano.org',      link: 'https://cardona.org'},
        {title: 'Explorer 4',       detail: 'cardano.org',      link: 'https://cardona.org'},
        {title: 'Source Code',      detail: 'Access',           link: 'https://cardona.org'},
        {title: 'Holding Company',  detail: 'IOHK',             link: 'https://cardona.org'},
        {title: 'Explorer 5',       detail: 'cardano.org',      link: 'https://cardona.org'},
        {title: 'Explorer 6',       detail: 'cardano.org',      link: 'https://cardona.org'},
    ]

    let percent_availability = 71
    useEffect(() => {
        let pie_chart = window.echarts.init(document.getElementById('pie_chart'))
        let option = {
            title: {
                text: `${percent_availability}%`,
                textStyle: {
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#64A879'
                },
                top: '44%',
                left: '43%'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: false
            },
            series: [
                {
                    name: 'Max Supply',
                    type: 'pie',
                    color: '#7EAFE8',
                    radius: ['75%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'center',
                        color: '#64A879',
                        fontSize: 15,
                        fontWeight: 'bold'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: '#64A879'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 45000000000 },
                    ]
                },

                {
                    name: 'Total Supply',
                    type: 'pie',
                    colorBy: 'data',
                    radius: ['55%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { 
                            value: 33117618880, 
                            // name: 'Total Supply',
                            itemStyle: {
                                color: '#F17A13',
                                borderRadius: '100'
                            }
                        },
                        { 
                            value: 12117618880,
                            itemStyle: {
                                color: '#FCE4D0'
                            } 
                        },
                    ]
                },

                {
                    name: 'Circulating Supply',
                    type: 'pie',
                    colorBy: 'data',
                    radius: ['35%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { 
                            value: 32117618880, 
                            // name: 'Circulating Supply',
                            itemStyle: {
                                color: '#E5BE3D',
                                borderRadius: '100'
                            }
                        },
                        { 
                            value: 12117618880, 
                            // name: 'Circulating Supply',
                            itemStyle: {
                                color: '#faf2d8',
                            }
                        },
                    ]
                }
            ]
          };
        
          pie_chart.setOption(option)
    }, [])

    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center text-xs text-c_6E7582 font-semibold">
                    <div className="mr-1">Menu2</div>
                    <BsChevronRight className="mr-1"/>
                    <div className="mr-1">Sub Menu 01</div>
                    <BsChevronRight className="mr-1"/>
                    <div className="text-black dark:text-white">Cardano</div>
                </div>
                <div className="mt-8 rounded-md py-7_5
                                shadow-card dark:shadow-dark_card
                                bg-white dark:bg-gray-900
                                text-black dark:text-white">
                    <div className="px-5 sm:px-7_5
                                    block xl:flex">
                        <div className="flex">
                            <div className="rounded-full bg-c_E8EBF1
                                            w-10 sm:w-11_5 
                                            h-10 sm:h-11_5"></div>
                            <div className="flex flex-1 flex-col ml-3">
                                <div className="flex items-center">
                                    <div className="font-bold
                                                    text-xl sm:text-3xl">Cardano</div>
                                    <div className="ml-3 border font-semibold w-12 h-6 flex justify-center items-center rounded-md
                                                    text-c_1564C0 dark:text-dark_0fc9f2
                                                    border-c_1564C0 dark:border-dark_0fc9f2">ADA</div>
                                </div>
                                <div className="flex items-center mt-1 text-sm font-semibold text-c_6E7582">
                                    <div>Rank #1</div>
                                    <div className="ml-6">Coin</div>
                                    <div className="ml-6">{Number(2324134).toLocaleString()} watching</div>
                                </div>
                            </div>                            
                        </div>
                        <div className="grid flex-1 items-start gap-y-4
                                        grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
                                        ml-14_5 xl:ml-0
                                        mt-5 xl:mt-0">
                            <div className="flex flex-col text-xs font-semibold
                                            ml-0 xl:ml-auto ">
                                <div className="text-c_6E7582">Volume/MarketCap</div>
                                <div className="text-c_64A879 text-sm">0.03692</div>
                            </div>
                            <div className="flex flex-col text-xs font-semibold
                                            ml-0 sm:ml-auto">
                                <div className="text-c_6E7582">Market Dominance</div>
                                <div className="text-c_C85151 text-sm">46.74%</div>
                            </div>
                            <div className="flex flex-col text-xs font-semibold
                                            ml-0 xl:ml-auto">
                                <div className="text-c_6E7582">Bitcoin Price(BTC)</div>
                                <div className="font-bold my-1
                                                text-xl sm:text-3xl">$1.23</div>
                                <div className="flex items-center text-sm">
                                    <div className="text-c_6E7582 font-semibold">0.005ETH</div>
                                    <div className="ml-1">
                                        <FaCaretDown className="text-c_C85151" />
                                    </div>
                                    <div className="text-c_C85151">4.29%</div>
                                </div>
                            </div>
                            <div className="ml-0 sm:ml-auto cursor-pointer">
                                <BsDownload className="font-semibold"/>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 w-full h-0.5
                                    bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>

                    <div className="px-7_5 grid gap-y-6 my-4
                                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                        {currency_price_detail.map((item, index) => {
                            return <div className="flex text-xs" key={`item_${index}`}>
                                        <div className="w-2 h-7_5 bg-c_E8EBF1 rounded-md"></div>
                                        <div className="ml-3 flex flex-col flex-1 font-semibold">
                                            <div className="text-c_6E7582">{item.title}</div>
                                            <div className="flex items-center text-sm flex-wrap">
                                                <div className={`mr-2 ${item.price !== null ? 'block' : 'hidden'}`}>${Number(item.price).toLocaleString()}</div>
                                                <div className={`flex items-center ${item.perc > 0 ? 'text-c_64A879' : 'text-c_C85151'} ${item.perc !== null ? 'block' : 'hidden'}`}>
                                                    {item.perc < 0 && <FaCaretDown />}
                                                    {item.perc > 0 && <FaCaretUp />}
                                                    <div className={`ml-1`}>{item.perc}%</div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>

                    <div className="w-full h-0.5
                                bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>

                    <div className="flex flex-col py-7">
                        <div className="mx-auto items-center
                                        block lg:flex">
                            <div id="pie_chart" 
                                className="w-52 h-52
                                            mx-auto lg:mx-0"></div>
                            
                            <div className="flex flex-col 
                                            ml-5 xl:ml-20">
                                <div className="grid gap-y-9 gap-x-5
                                                grid-cols-1 sm:grid-cols-3">
                                    <div className="flex">
                                        <div className="w-2 h-full bg-c_7EAFE8 rounded-md"></div>
                                        <div className="ml-2_5 flex flex-col font-semibold text-xs">
                                            <div className="text-c_6E7582">Max Supply</div>
                                            <div className="text-sm">{Number(45000000000).toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-2 h-full bg-c_E5BE3D rounded-md"></div>
                                        <div className="ml-2_5 flex flex-col font-semibold text-xs">
                                            <div className="text-c_6E7582">Circulating Supply</div>
                                            <div className="text-sm">{Number(32117618880).toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-2 h-full bg-c_E8EBF1 rounded-md"></div>
                                        <div className="ml-2_5 flex flex-col font-semibold text-xs">
                                            <div className="text-c_6E7582">Market Cap</div>
                                            <div className="text-sm">${Number(79130267322).toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-2 h-full bg-c_F17A13 rounded-md"></div>
                                        <div className="ml-2_5 flex flex-col font-semibold text-xs">
                                            <div className="text-c_6E7582">Total Supply</div>
                                            <div className="text-sm">{Number(33117618880).toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-2 h-full bg-c_64A879 rounded-md"></div>
                                        <div className="ml-2_5 flex flex-col font-semibold text-xs">
                                            <div className="text-c_6E7582">Percentage Availability</div>
                                            <div className="text-sm">{percent_availability}%</div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-2 h-full bg-c_E8EBF1 rounded-md"></div>
                                        <div className="ml-2_5 flex flex-col font-semibold text-xs">
                                            <div className="text-c_6E7582">Fully Diluted Market Cap</div>
                                            <div className="text-sm">${Number(111071564175).toLocaleString()}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="w-full h-0.5
                                    bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>

                    <div className="mt-8 px-7_5">
                        <div className="grid gap-y-5
                                        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                            {currency_custom_detail.map((item, index) => {
                                return <div key={`item_${index}`} className="flex">
                                            <div className="w-2 h-full bg-c_E8EBF1 rounded-md"></div>
                                            <div className="ml-2_5 flex flex-col font-semibold text-xs">
                                                <div className="text-c_6E7582">{item.title}</div>
                                                {item.link === null && <div className="text-sm mr-2">{item.detail}</div>}
                                                {item.link !== null && 
                                                    <div className="flex items-center font-semibold cursor-pointer
                                                                text-c_1564C0 dark:text-dark_0fc9f2">
                                                        <div className="text-sm mr-2">{item.detail}</div>
                                                        <BsBoxArrowUpRight />
                                                    </div>
                                                }
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

export default Component07