import { useState } from 'react'
import {
    CoinSearchSvg, 
    BsChevronRight,
    BsChevronDown,
    MdQuestionAnswer,
    IoTrendingDownSharp,
    IoTrendingUpSharp
} from '../../icon/IconImage'


const Component18 = () => {
    let category_li = [
        { title: "Sub Category 1"},
        { title: "Sub Category 2"},
        { title: "Sub Category 3"},
        { title: "Sub Category 4"},
        { title: "Sub Category 5"},
    ]
    let heading_card_li = [
        { tradeUp: 386, tradeDown: 28, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 560, tradeDown: 56, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 490, tradeDown: 32, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 692, tradeDown: 56, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 453, tradeDown: 67, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 265, tradeDown: 73, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' }
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
                        return <div className="flex flex-col p-3 rounded-lg cursor-pointer transform hover:scale-105 ease-out duration-700
                                                shadow-card dark:shadow-dark_card
                                                bg-white dark:bg-transparent" 
                                    key={`heading_card_${index}`}>
                                    <div className="flex">
                                        <div className="rounded-full w-14_5 h-14_5 bg-c_E8EBF1"></div>
                                        <div className="ml-4 flex-1 font-semibold leading-18_22
                                                        text-black dark:text-white
                                                        text-xs sm:text-base">{item.detail}</div>
                                    </div>
                                    <div className="mt-4 flex items-center">
                                        <div className="flex items-center text-c_64A879 text-sm leading-normal">
                                            <IoTrendingUpSharp />
                                            <div className="ml-1.5">{item.tradeUp}</div>
                                        </div>
                                        <div className="ml-4 flex items-center text-c_C85151 text-sm leading-normal">
                                            <IoTrendingUpSharp />
                                            <div className="ml-1.5">{item.tradeDown}</div>
                                        </div>
                                        <div className="ml-4 flex items-center text-c_7EAFE8 text-sm leading-normal">
                                            <MdQuestionAnswer />
                                            <div className="ml-1.5">{item.question}</div>
                                        </div>
                                        <img src={CoinSearchSvg} className="ml-auto"></img>
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