import { useState } from 'react'
import { 
    BsChevronRight,
    BsChevronDown
} from '../../icon/IconImage'

import BitcoinDollarImg from '../../../assets/img/bitcoin-dollar.jpg'
import CoinbaseImg from '../../../assets/img/coinbase.jpg'
import TradingCenterImg from '../../../assets/img/trading-center.jpg'

const Component18 = () => {
    let category_li = [
        { title: "Sub Category 1"},
        { title: "Sub Category 2"},
        { title: "Sub Category 3"},
        { title: "Sub Category 4"},
        { title: "Sub Category 5"},
    ]
    let heading_card_li = [
        { title: 'Heading Title', detail: 'Sed do eiusmod tempor incidid unt ut labore et dolore.', img: CoinbaseImg, created_at: 'CRISTOPHER - JUNE 24, 2021' },
        { title: 'Heading Title', detail: 'Sed do eiusmod tempor incidid unt ut labore et dolore.', img: TradingCenterImg, created_at: 'CRISTOPHER - JUNE 24, 2021' },
        { title: 'Heading Title', detail: 'Sed do eiusmod tempor incidid unt ut labore et dolore.', img: BitcoinDollarImg, created_at: 'CRISTOPHER - JUNE 24, 2021' },
        { title: 'Heading Title', detail: 'Sed do eiusmod tempor incidid unt ut labore et dolore.', img: CoinbaseImg, created_at: 'CRISTOPHER - JUNE 24, 2021' },
        { title: 'Heading Title', detail: 'Sed do eiusmod tempor incidid unt ut labore et dolore.', img: TradingCenterImg, created_at: 'CRISTOPHER - JUNE 24, 2021' },
        { title: 'Heading Title', detail: 'Sed do eiusmod tempor incidid unt ut labore et dolore.', img: BitcoinDollarImg, created_at: 'CRISTOPHER - JUNE 24, 2021' }
    ]

    const [enableCategory, setEnableCategory] = useState([true, new Array(category_li.length - 1).fill(false)])

    const selectCategoryHandler = (index) => {
        let new_array = new Array(category_li.length).fill(false)
        new_array[index] = true
        setEnableCategory(new_array)
    }
    return (
        <div>
            <div className="flex items-center leading-normal
                            text-c_6E7582
                            text-xs sm:text-sm">
                <div className=" font-semibold">Menu 1</div>
                <div className="text-8px mx-2">
                    <BsChevronRight style={{strokeWidth: 1}}/>
                </div>
                <div className="text-black font-semibold dark:text-white">Category 2</div>
            </div>
            <div className="text-22px font-semibold
                            text-black dark:text-white
                            mt-5_5 sm:mt-9">Heading</div>
            <div className="leading-normal font-normal mt-1.5
                            text-c_6E7582 dark:text-white
                            text-11px sm:text-sm">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>

            <div className="mt-5 sm:mt-17_5">
                <div className="flex items-center justify-center mx-auto flex-wrap gap-x-3 gap-y-4">
                    {category_li.map((item, index) => {
                        return <div className={`px-4 flex justify-center items-center rounded-full cursor-pointer ${enableCategory[index] === true ? 'text-white bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-transparent text-black dark:text-white font-semibold'}
                                                transform hover:scale-110 ease-out duration-700
                                                h-5_5 sm:h-7_5
                                                text-10px sm:text-sm`} 
                                    key={`category_${index}`}
                                    onClick={() => {selectCategoryHandler(index)}}>
                                    {item.title}
                                </div>
                    })}
                </div>
            </div>

            <div className="mt-5 sm:mt-10_5">
                <div className="grid gap-x-8 gap-y-6
                                grid-cols-1 xl:grid-cols-2">
                    {heading_card_li.map((item, index) => {
                        return <div className="flex rounded-lg cursor-pointer transform hover:scale-105 ease-out duration-700
                                                shadow-card dark:shadow-dark_card
                                                bg-white dark:bg-transparent
                                                h-22_5 sm:h-30_5" 
                                    key={`heading_card_${index}`}>
                                    <img src={item.img} 
                                        className="rounded-l-lg
                                                    w-25 sm:w-45"></img>
                                    <div className="px-4 flex-1 flex flex-col
                                                    py-2 sm:py-2.5">
                                        <div className="text-sm font-semibold leading-normal
                                                        text-c_1564C0 dark:text-dark_0fc9f2
                                                        text-9px sm:text-sm">{item.title}</div>
                                        <div className="my-auto font-semibold leading-18_22
                                                        text-black dark:text-white
                                                        text-xs sm:text-lg">{item.detail}</div>
                                        <div className="leading-normal text-c_6E7582
                                                        text-9px sm:text-11px">{item.created_at}</div>
                                    </div>
                                </div>
                    })}
                </div>
                <div className="mt-9 flex flex-col">
                    <div className="h-7 w-30 mx-auto flex justify-center items-center cursor-pointer text-sm leading-tight rounded-full transform hover:scale-110 ease-out duration-700
                                    shadow-card dark:shadow-dark_card
                                    bg-white dark:bg-dark_0fc9f2
                                    text-c_1564C0 dark:text-white">
                        <div className="font-semibold">Load More</div>
                        <div className="ml-2">
                            <BsChevronDown style={{strokeWidth: 1}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Component18