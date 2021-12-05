import { useState } from 'react'
import {
    NavBarCloseIcon,
    NavBarOpenIcon,
    BsDownload,
} from '../../icon/IconImage'
import SelectInput from '../../ui/SelectInput'
import NavBar from "../NavBar"
import {convertToInternationalCurrencySystem} from "../../../utils/SimpleFun"
const Component39 = () => {

    let navItems = [
        { title: 'CATEGORY 1', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 2', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 3', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 4', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 5', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 6', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
    ]
    let chart_data = [
        {value: 5900000000, total: 5900000000},
        {value: 4000000000, total: 5900000000},
        {value: 3600000000, total: 5900000000},
        {value: 3300000000, total: 5900000000},
        {value: 3000000000, total: 5900000000},
        {value: 1500000000, total: 5900000000},
        {value: 760000000, total: 5900000000},
        {value: 700000000, total: 5900000000}
    ]

    
    const [enableNavBar, setEnableNavBar] = useState(true)
    const [currentCategory, setCurrentCategory] = useState(navItems[0])
    
    const navBarHandler = () => {
        setEnableNavBar(!enableNavBar)
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
                </div>

                <div className="flex items-center mt-8">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-auto">
                        <BsDownload className="stroke-1" />
                    </div>
                </div>

                <div className="mt-7">
                    {chart_data.map((item, index) => {
                        return (
                            <div className={`flex items-center ${index !== chart_data.length - 1 ? 'mb-4_5' : ''}`} key={`item_${index}`}>
                                <div className="w-20 text-xs text-c_6E7582 font-medium">Sample Text</div>
                                <div className="flex-1 ml-2 flex items-center">
                                    <div className="bg-c_7EAFE8 h-6" style={{width: `${Math.floor(item.value / item.total * 100)}%`}}></div>
                                    <div className="font-semibold ml-2.5 text-sm">${convertToInternationalCurrencySystem(item.value)}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>


                <div className="w-full h-px bg-c_F2F2F2 mt-9 mb-10"></div>


                <div className="flex items-center">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-auto">
                        <BsDownload className="stroke-1" />
                    </div>
                </div>

                <div className="mt-7">
                    {chart_data.map((item, index) => {
                        return (
                            <div className={`flex items-center ${index !== chart_data.length - 1 ? 'mb-4_5' : ''}`} key={`item_${index}`}>
                                <div className="w-20 text-xs text-c_6E7582 font-medium">Sample Text</div>
                                <div className="flex-1 ml-2 flex items-center">
                                    <div className="bg-c_7EAFE8 h-6" style={{width: `${Math.floor(item.value / item.total * 100)}%`}}></div>
                                    <div className="font-semibold ml-2.5 text-sm">${convertToInternationalCurrencySystem(item.value)}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                
                
            </div>
        </div>
    )
}

export default Component39