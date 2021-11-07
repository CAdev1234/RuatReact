import { useState } from 'react'
import {
    BsGlobe2,
    BsCurrencyDollar
} from '../icon/IconImage'
import SelectInput from '../ui/SelectInput'
import ThemeToggle from '../ui/ThemeToggle'
import CoinDetail from './CoinDetail'
import CoinTable from './CoinTable'
import DynamicLineChart from './DynamicLineChart'
import EventCard from './EventCard'
import HightLightCard from './HightLightCard'
import PortfolioCard from './PortfolioCard'
import TrendingCard from './TrendingCard'

const MainBoard = () => {
    let language_li = ['English', 'English', 'English']
    let currency_li = ['USD', 'USD', 'USD']
    let submenu_li = ['Sub Menu 01', 'Sub Menu 02', 'Sub Menu 03', 'Sub Menu 04', 'Sub Menu 05', 'Sub Menu 06']
    const [language, setLanguage] = useState(language_li[0])
    const [currency, setCurrency] = useState(currency_li[0])
    return (
        <div className="bg-c_F8F9FB flex-1 w-full rounded-3xl">
            <div className="flex items-center p-6">
                <div className="ml-auto flex items-center">
                    <BsGlobe2 className="text-c_1564C0" />
                    <div className="ml-3">
                        <SelectInput 
                            className="text-xs text-c_2A7BD9 font-semibold w-16"
                            option_li={language_li} 
                            default_option={language_li[0]}
                            returnVal={setLanguage}
                        />
                    </div>
                </div>
                <div className="ml-8 flex items-center">
                    <div className="w-4 h-4 bg-c_1564C0 rounded-full text-white flex items-center justify-center p-0.5">
                        <BsCurrencyDollar className="text-white"/>
                    </div>
                    <div className="ml-3">
                        <SelectInput 
                            className="text-xs text-c_2A7BD9 font-semibold w-11"
                            option_li={currency_li} 
                            default_option={currency_li[0]}
                            returnVal={setCurrency}
                        />
                    </div>
                </div>
                <div className="ml-10">
                    <ThemeToggle />
                </div>
                <button className="ml-8 bg-c_1564C0 text-white h-7_5 w-20 flex items-center justify-center text-sm rounded-l-full rounded-r-full">Sign In</button>
            </div>

            <div className="h-0.5 w-full bg-c_E8EBF1"></div>

            <div className="py-10 w-full flex flex-col">
                <div className="w-8/12 mx-auto flex items-center justify-between flex-wrap">
                    {submenu_li.map((item, index) => {
                        return <div key={`submenu_${index}`} className={`h-7_5 w-28 flex justify-center items-center rounded-r-full rounded-l-full text-sm shadow-card ${index === 0 ? 'bg-c_1564C0 text-white' : 'bg-white text-black font-semibold'}`}>{item}</div>
                    })}
                </div>

                <div className="px-7 mt-12">
                    <HightLightCard />
                </div>

                <div className="mt-7 px-7">
                    <PortfolioCard />
                </div>

                <div className="mt-7 px-7">
                    <TrendingCard />
                </div>

                <div className="mt-7">
                    <CoinTable />
                </div>

                <div className="mt-7 px-6">
                    <div className="flex items-center">
                        <div className="text-black font-semibold text-lg">Events Today</div>
                        <button className="text-c_1564C0 text-sm ml-auto cursor-pointer font-semibold">View All</button>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mt-4">
                        {[0, 1, 2].map((item, index) => {
                            return <div key={`event_card_${index}`}>
                                        <EventCard />
                                    </div>
                        })}
                    </div>
                </div>

                <div className="mt-7 px-6">
                    <CoinDetail />
                </div>
            </div>
        </div>
    )
}

export default MainBoard