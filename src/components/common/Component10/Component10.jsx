import { useState } from "react"

import {
    FaCaretDown,
    FaCaretUp,
} from '../../icon/IconImage'
import DynamicLineChart from "../DynamicLineChart"

const Component10 = () => {
    let heading_li = [
        { title: 'Sub Heading 1' },
        { title: 'Sub Heading 2' },
        { title: 'Sub Heading 3' },
    ]
    
    let coin_info_li = [
        { title: 'Sample Txt', price: 0.03328, perc: -27.03 },
        { title: 'Sample Txt', price: 0.03328, perc: 27.03 },
        { title: 'Sample Txt', price: 0.03328, perc: -27.03 }
    ]

    const [enableHeading, setEnableHeading] = useState([true, new Array(heading_li.length - 1).fill(false)])
    
    const selectHeadingHandler = (index) => {
        let new_array = new Array(heading_li.length).fill(false)
        new_array[index] = true
        setEnableHeading(new_array)
    }
    return (
        <div>
            <div className="flex items-center flex-wrap gap-y-3 text-black dark:text-white">
                <div className="text-22px font-semibold">Heading Title</div>
                <div className="ml-15 mr-10 w-px h-8 bg-c_BCC3CF dark:bg-dark_0fc9f2
                                hidden lg:block"></div>
                <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-4">
                    {heading_li.map((item, index) => {
                        return <div className={`px-4 flex justify-center items-center rounded-full cursor-pointer ${enableHeading[index] === true ? 'text-white bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-transparent text-black dark:text-white font-semibold'}
                                                transform hover:scale-110 ease-out duration-700
                                                h-5_5 sm:h-7_5
                                                text-10px sm:text-sm`} 
                                    key={`category_${index}`}
                                    onClick={() => {selectHeadingHandler(index)}}>
                                    {item.title}
                                </div>
                    })}
                </div>
            </div>

            <div className="mt-9 gap-x-4 gap-y-4
                            grid grid-cols-3 sm:flex sm:items-center sm:flex-wrap">
                {coin_info_li.map((item, index) => {
                    return (
                        <div key={`coin_card_${index}`} 
                            className="max-w-170px
                                        w-full sm:w-42_5">
                            <div className="aspect-w-1 aspect-h-1">
                                <div className="rounded-lg flex flex-col text-center
                                                bg-white dark:bg-gray-900
                                                shadow-card dark:shadow-dark_card
                                                py-2 sm:py-4">
                                    <div className="flex items-center mx-auto">
                                        <div className="rounded-full bg-c_E8EBF1
                                                        w-5 sm:w-7_5 
                                                        h-5 sm:h-7_5"></div>
                                        <div className="font-medium text-c_6E7582
                                                        text-9px sm:text-sm leading-normal
                                                        ml-1 sm:ml-2.5">{item.title}</div>
                                    </div>
                                    
                                    <div className="font-bold 
                                                    text-11px sm:text-lg
                                                    leading-normal sm:leading-normal
                                                    text-black dark:text-white
                                                    mt-2 sm:mt-0">${item.price}</div>
                                    <div className="flex items-center mx-auto">
                                        <FaCaretDown className={`${item.perc < 0 ? 'block text-c_C85151' : 'hidden'}`} />
                                        <FaCaretUp className={`${item.perc > 0 ? 'block text-c_64A879' : 'hidden'}`}/>
                                        <div className={`font-semibold ml-1 ${item.perc > 0 ? 'text-c_64A879' : 'text-c_C85151'} 
                                                        text-9px sm:text-sm
                                                        leading-normal sm:leading-normal`}>{Math.abs(item.perc)}%</div>
                                    </div>
                                    <DynamicLineChart className='w-full flex-1' line_color={item.perc > 0 ? '#64A879' : '#C85151'} />
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Component10