import { useState } from 'react'
import { generateUUID } from '../../utils/SimpleFun'
import {
    BsGlobe2,
    BsCurrencyDollar,
} from '../icon/IconImage'
import SelectInput from '../ui/SelectInput'
import ThemeToggle from '../ui/ThemeToggle/ThemeToggle'
import CoinDetail from './Component07'
import CoinTable from './Component05'
import DynamicLineChart from './DynamicLineChart'
import EventCard from './Component06'
import HightLightCard from './Component02'
import PortfolioCard from './Component03'
import TitleTable from './Component08'
import TrendingCard from './Component04'

const MainBoard = () => {
    let language_li = ['English', 'Hindi', 'Russian']
    let currency_li = ['USD', 'Rupee', 'Ruble']
    let submenu_li = ['Sub Menu 01', 'Sub Menu 02', 'Sub Menu 03', 'Sub Menu 04', 'Sub Menu 05', 'Sub Menu 06']
    const [language, setLanguage] = useState(language_li[0])
    const [currency, setCurrency] = useState(currency_li[0])
    const [enableSubMenu, setEnableSubmenu] = useState([true, new Array(submenu_li.length - 1).fill(false)])

    const subMenuHandler = (index) => {
        let new_array = new Array(submenu_li.length).fill(false)
        new_array[index] = true
        setEnableSubmenu(new_array)
    }

    return (
        <div className="flex-1 w-0 max-w-6xl mr-auto">
            <div className={`w-full rounded-3xl 
                            bg-c_F8F9FB dark:bg-gray-900`}>
                <div className="items-center p-6
                                block sm:flex">
                    <div className="flex items-center
                                    ml-0 sm:ml-auto">
                        <div className="flex items-center">
                            <BsGlobe2 className="text-c_1564C0 dark:text-dark_0fc9f2" />
                            <div className="ml-3">
                                <SelectInput 
                                    className="text-xs text-c_2A7BD9 dark:text-dark_0fc9f2 font-semibold w-16"
                                    option_board_class="bg-c_F8F9FB dark:bg-dark_021a4f top-8 z-10"
                                    option_li={language_li} 
                                    default_option={language_li[0]}
                                    returnVal={setLanguage}
                                />
                            </div>
                        </div>
                        <div className="flex items-center
                                        ml-auto sm:ml-8">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center p-0.5
                                            bg-c_1564C0 dark:bg-dark_0fc9f2">
                                <BsCurrencyDollar className="text-white"/>
                            </div>
                            <div className="ml-3">
                                <SelectInput 
                                    className="text-xs text-c_2A7BD9 dark:text-dark_0fc9f2 font-semibold w-16"
                                    option_board_class="bg-c_F8F9FB dark:bg-dark_021a4f top-8 z-10"
                                    option_li={currency_li} 
                                    default_option={currency_li[0]}
                                    returnVal={setCurrency}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center
                                    ml-0 sm:ml-10
                                    mt-5 sm:mt-0">
                        <div className="">
                            <ThemeToggle />
                        </div>
                        <button className="h-7_5 w-20 flex items-center justify-center text-sm rounded-l-full rounded-r-full
                                            ml-auto sm:ml-8
                                            bg-c_1564C0 text-white dark:bg-dark_0fc9f2">Sign In</button>
                    </div>
                </div>

                <div className="h-0.5 w-full
                                bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>

                <div className="py-10 w-full flex flex-col">
                    <div className="mx-auto flex items-center flex-wrap gap-3
                                    w-full xl:w-8/12
                                    px-7_5 xl:px-0">
                        {submenu_li.map((item, index) => {
                            return <div key={`submenu_${index}`} 
                                        className={`h-7_5 w-28 flex justify-center items-center rounded-r-full rounded-l-full cursor-pointer text-sm ${enableSubMenu[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'bg-white text-black font-semibold'}
                                                    shadow-card dark:shadow-dark_card`}
                                        onClick={() => {subMenuHandler(index)}}>{item}</div>
                        })}
                    </div>

                    <div className="mt-15 px-7">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 2</div>
                        <div className="mt-12">
                            <HightLightCard />
                        </div>
                    </div>

                    <div className="mt-15 px-7 ">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 3</div>
                        <div className="mt-7">
                            <PortfolioCard />
                        </div>
                    </div>

                    <div className="mt-15 px-7">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 4</div>
                        <div className="mt-7">
                            <TrendingCard />
                        </div>
                    </div>


                    <div className="mt-15 px-7">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 5</div>
                        <div className="mt-7">
                            <CoinTable />
                        </div>
                    </div>

                    <div className="mt-15 px-7">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 6</div>
                        <div className="mt-7">
                            <div className="flex items-center">
                                <div className="font-semibold text-lg text-black dark:text-white">Events Today</div>
                                <button className="text-sm ml-auto cursor-pointer font-semibold
                                                dark:text-dark_0fc9f2">View All</button>
                            </div>
                            <div className="grid gap-6 mt-4
                                            grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                                {[0, 1, 2].map((item, index) => {
                                    return <div key={`event_card_${index}`}>
                                                <EventCard />
                                            </div>
                                })}
                            </div>
                        </div>
                    </div>

                    
                    
                    <div className="mt-15 px-7">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 7</div>
                        <div className="mt-7">
                            <CoinDetail />
                        </div>
                    </div>


                    <div className="mt-15 px-7">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 8</div>
                        <div className="">
                            <TitleTable />
                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
        
    )
}

export default MainBoard