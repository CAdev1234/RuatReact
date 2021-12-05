import { useState } from 'react'
import {
    NavBarCloseIcon,
    NavBarOpenIcon,
    BsDownload,
} from '../../icon/IconImage'
import SelectInput from '../../ui/SelectInput'
import NavBar from "../NavBar"
import {convertToInternationalCurrencySystem} from "../../../utils/SimpleFun"
const Component40 = () => {

    let navItems = [
        { title: 'CATEGORY 1', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 2', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 3', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 4', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 5', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 6', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
    ]
    let data_1 = [0,1,2,3,4,5,6,7,8]
    let data_2 = [8649, 10127, 2313, 678, 321, 11640, 12761, 2008, 887]
    let data_3 = [-609, -598, 387, 112, -22, -110, -233, -63, 60]
    let data_4 = [63.4, 74.2, 16.9, 5.0, 2.4, 85.3, 93.5, 14.7, 6.5]
    let data_5 = [12, 45, 78, 28, 74, 66, 43, "-", "-"]
    
    
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

                {/* table part */}
                <div className="mt-4_5 flex flex-col">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-9 h-8 bg-c_E8EBF1">
                            <div className="col-span-3 flex justify-center items-center font-semibold text-xs">Title</div>
                            <div className="col-span-2 flex justify-center items-center font-semibold text-xs border-l-2 border-white">Title</div>
                            <div className="col-span-2 flex justify-center items-center font-semibold text-xs border-l-2 border-white">Title</div>
                            <div className="col-span-2 flex justify-center items-center font-semibold text-xs border-l-2 border-white">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 bg-c_F8F9FB">
                            {data_1.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center bg-c_F8F9FB font-semibold text-11px text-c_6E7582 ${index !== 0 ? 'border-l-2 border-white' : ''}`}>Text</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 bg-c_E8EBF1">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs">Title</div>
                            <div className="col-span-4 flex justify-center items-center font-semibold text-xs border-l-2 border-white">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 bg-c_F8F9FB">
                            {data_2.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center bg-c_F8F9FB font-semibold text-11px text-c_6E7582 ${index !== 0 ? 'border-l-2 border-white' : ''}`}>{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 bg-c_E8EBF1">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs">Title</div>
                            <div className="col-span-4 flex justify-center items-center font-semibold text-xs border-l-2 border-white">(Title<span className="text-c_C85151">-173</span>)</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 bg-c_F8F9FB">
                            {data_3.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center bg-c_F8F9FB font-semibold text-11px 
                                                    ${index !== 0 ? 'border-l-2 border-white' : ''}
                                                    ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 bg-c_E8EBF1">
                            <div className="col-span-9 flex justify-center items-center font-semibold text-xs">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 bg-c_F8F9FB">
                            {data_4.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center bg-c_F8F9FB font-semibold text-11px text-c_6E7582 
                                                    ${index !== 0 ? 'border-l-2 border-white' : ''}`}>{item}%</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 bg-c_E8EBF1">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs">Title</div>
                            <div className="col-span-4 flex justify-center items-center font-semibold text-xs">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 bg-c_F8F9FB">
                            {data_5.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center bg-c_F8F9FB font-semibold text-11px text-c_6E7582 
                                                    ${index !== 0 ? 'border-l-2 border-white' : ''}`}>{item}</div>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>


                <div className="w-full h-px bg-c_F2F2F2 mt-9 mb-7"></div>


                <div className="flex items-center">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-auto">
                        <BsDownload className="stroke-1" />
                    </div>
                </div>

                

                
                
            </div>
        </div>
    )
}

export default Component40