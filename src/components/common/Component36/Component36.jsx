import { useState } from 'react'
import {
    NavBarCloseIcon,
    NavBarOpenIcon,
    BsFullscreen,
    BsDownload,
    BsChevronDown
} from '../../icon/IconImage'
import SelectInput from '../../ui/SelectInput'
import BarLineChart from '../BarLineChart'
import NavBar from "../NavBar"


const Component36 = () => {

    let navItems = [
        { title: 'CATEGORY 1', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 2', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 3', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 4', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 5', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 6', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
    ]

    let chart_data = {
        line1_data: [],
        line2_data: [],
        bar_data: []
    }
    for (let index = 0; index < 100; index++) {
        chart_data.line1_data.push(Math.floor(Math.random() * 350))
        chart_data.line2_data.push(Math.floor(Math.random() * 250))
        chart_data.bar_data.push(Math.floor(Math.random() * 100))
    }

    let table_data = [
        {item1: '2021/11/18', item2: 2.4578125656892541, item3: 41260909468, item4: 44835.3945},
        {item1: '2021/11/18', item2: 2.4578125656892541, item3: 41260909468, item4: 44835.3945},
        {item1: '2021/11/18', item2: 2.4578125656892541, item3: 41260909468, item4: 44835.3945},
        {item1: '2021/11/18', item2: 2.4578125656892541, item3: 41260909468, item4: 44835.3945},
        {item1: '2021/11/18', item2: 2.4578125656892541, item3: 41260909468, item4: 44835.3945},
        {item1: '2021/11/18', item2: 2.4578125656892541, item3: 41260909468, item4: 44835.3945},
        {item1: '2021/11/18', item2: 2.4578125656892541, item3: 41260909468, item4: 44835.3945},
    ]

    const [enableNavBar, setEnableNavBar] = useState(true)
    const [currentCategory, setCurrentCategory] = useState(navItems[0])
    const [currentSubCategory, setCurrentSubCategory] = useState(navItems[0].items[0])
    const [enableChart, setEnableChart] = useState(true)
    
    const navBarHandler = () => {
        setEnableNavBar(!enableNavBar)
        setEnableChart(false)
        setTimeout(() => {
            setEnableChart(true)
        }, 10);
    }

    return (
        <div className="items-stretch
                        block sm:flex">
            {/* navbar */}
            <div className={`${enableNavBar === true ? 'hidden sm:block' : 'hidden'}`}>
                <NavBar navItems={navItems} />
            </div>
            <div className="flex sm:hidden flex-col">
                <div className="flex items-center">
                    <div className="font-semibold text-xs mr-auto">Category</div>
                    <SelectInput 
                        className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                h-5_5 sm:h-7_5
                                w-40
                                text-9px sm:text-xs"
                        option_board_class="bg-c_F8F9FB dark:bg-gray-900 top-8 z-10"
                        option_li={navItems} 
                        default_option={navItems[0]}
                        returnVal={setCurrentCategory}
                    />
                </div>
                <div className="mt-4 flex items-center">
                    <div className="font-semibold text-xs mr-auto">Sub-Category</div>
                    {/* <SelectInput 
                        className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                h-5_5 sm:h-7_5
                                w-40
                                text-9px sm:text-xs"
                        option_board_class="bg-c_F8F9FB dark:bg-gray-900 top-8 z-10"
                        option_li={currentCategory.items} 
                        default_option={currentSubCategory[0]}
                        returnVal={setCurrentSubCategory}
                    /> */}
                </div>
            </div>

            {/* main part */}
            <div className="flex-1 flex flex-col px-5 py-5 rounded-r-md bg-white dark:bg-transparent shadow-card dark:shadow-dark_card
                            mt-7_5 sm:mt-0">
                <div className="flex items-center">
                    <div className="cursor-pointer transform hover:scale-105 ease-out duration-700">
                        {enableNavBar && 
                            <div onClick={() => {navBarHandler()}}>
                                <NavBarCloseIcon />
                            </div>
                        }
                        {!enableNavBar &&
                            <div onClick={() => {navBarHandler()}}>
                                <NavBarOpenIcon />
                            </div>
                        }
                    </div>
                    <div className="ml-5 font-semibold text-lg sm:text-22px">Heading Title</div>
                    <div className="ml-auto flex items-center">
                        <BsFullscreen className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700" />
                        <BsDownload className="stroke-1 ml-7 cursor-pointer transform hover:scale-105 ease-out duration-700" />
                    </div>
                </div>

                <div className="mt-0">
                    {enableChart && <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false} />}
                </div>


                {/* table part */}
                <div className="mt-7">
                    <div className="text-black dark:text-white">
                        <div className="grid items-center px-3 w-full font-bold py-4 grid-cols-4 border-t border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50
                                        text-9px xl:text-xs">
                            <div className="flex items-center pl-10">Title</div>
                            <div className="flex items-center justify-end">Title</div>
                            <div className="flex items-center justify-end">Title</div>
                            <div className="flex items-center justify-end pr-10">Title</div>
                        </div>
                        <div className="flex flex-col
                                        text-sm">
                            {table_data.map((item, index) => {
                                return <div key={`data_${index}`} className="flex flex-col">
                                            <div className={`px-3 grid grid-cols-4 items-center w-full h-71px border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${index === 0 ? 'border-t' : ''}`}>
                                                
                                                <div className="flex items-center font-semibold pl-10">{item.item1}</div>
                                                <div className="flex items-center justify-end font-semibold">{item.item2}</div>
                                                <div className="flex flex-col font-semibold text-right">${Number(item.item3).toLocaleString()}</div>
                                                <div className="flex flex-col font-semibold text-right pr-10">{item.item4}</div>
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


                
            </div>
        </div>
    )
}

export default Component36