import { useState } from 'react'
import {
    FaOutdent,
    FaIndent,
    BsDownload,
    FaCaretDown
} from '../../icon/IconImage'
import NavBar from "../NavBar"
import {convertToInternationalCurrencySystem} from "../../../utils/SimpleFun"
const Component39 = () => {

    let navItems = [
        { title: 'Category 1', items: new Array(7).fill({title: 'Sample Text 1', link: ''}) },
        { title: 'Category 2', items: new Array(7).fill({title: 'Sample Text 2', link: ''}) },
        { title: 'Category 3', items: new Array(7).fill({title: 'Sample Text 3', link: ''}) },
        { title: 'Category 4', items: new Array(7).fill({title: 'Sample Text 4', link: ''}) },
        { title: 'Category 5', items: new Array(7).fill({title: 'Sample Text 5', link: ''}) },
        { title: 'Category 6', items: new Array(7).fill({title: 'Sample Text 6', link: ''}) },
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
    const [currentSubCategory, setCurrentSubCategory] = useState(navItems[0].items[0])
    const [enableCategoryModal, setEnableCategoryModal] = useState(false)
    const [enableSubcategoryModal, setEnableSubcategoryModal] = useState(false)
    
    const navBarHandler = () => {
        setEnableNavBar(!enableNavBar)
    }

    const closeCategoryModalHandler = () => {
        setEnableCategoryModal(false)
        document.querySelector('body').style.overflow = 'auto'
    }
    const openCategoryModalHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        setEnableCategoryModal(true)
    }
    const selectCurrentCategoryHandler = (index) => {
        document.querySelector('body').style.overflow = 'auto'
        setCurrentCategory(navItems[index])
        setCurrentSubCategory(navItems[index].items[0])
        setEnableCategoryModal(false)
    }

    const closeSubcategoryModalHandler = () => {
        setEnableSubcategoryModal(false)
        document.querySelector('body').style.overflow = 'auto'
    }
    const openSubcategoryModalHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        setEnableSubcategoryModal(true)
    }
    const selectCurrentSubcategoryHandler = (index) => {
        setEnableSubcategoryModal(false)
        document.querySelector('body').style.overflow = 'auto'
        setCurrentSubCategory(currentCategory.items[index])
    }

    return (
        <div className="items-stretch rounded-lg
                        bg-transparent lg:bg-white dark:bg-transparent shadow-none lg:shadow-card lg:dark:shadow-dark_card
                        block lg:flex">
            {/* navbar */}
            <div className={`${enableNavBar === true ? 'hidden lg:block' : 'hidden'}`}>
                <NavBar navItems={navItems} />
            </div>
            <div className="flex lg:hidden flex-col">
                <div className="flex items-center">
                    <div className="font-semibold text-xs mr-auto text-black dark:text-white">Category</div>
                    <div className="relative flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                h-6_5 lg:h-7_5
                                w-40 text-xs"
                        onClick={() => {openCategoryModalHandler()}}
                    >   
                        {currentCategory.title}
                        <div className="absolute top-0 right-3 w-full h-full flex flex-col">
                            <FaCaretDown className="ml-auto my-auto" />
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                    <div className="font-semibold text-xs mr-auto text-black dark:text-white">Sub-Category</div>
                    <div className="relative flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                h-6_5 lg:h-7_5
                                w-40 text-xs"
                        onClick={() => {openSubcategoryModalHandler()}}
                    >   
                        {currentSubCategory.title}
                        <div className="absolute top-0 right-3 w-full h-full flex flex-col">
                            <FaCaretDown className="ml-auto my-auto" />
                        </div>
                    </div>
                </div>
            </div>

            {/* main part */}
            <div className="flex-1 flex flex-col 
                            text-black dark:text-white
                            mt-7_5 lg:mt-0
                            px-0 lg:px-5 py-0 lg:py-5">
                <div className="flex items-center">
                    <div className="cursor-pointer transform hover:scale-105 ease-out duration-700 mr-5
                                    hidden lg:block">
                        {enableNavBar && 
                            <div onClick={() => {navBarHandler()}}>
                                <FaOutdent className="text-black dark:text-dark_0fc9f2" />
                            </div>
                        }
                        {!enableNavBar &&
                            <div onClick={() => {navBarHandler()}}>
                                <FaIndent className="text-black dark:text-dark_0fc9f2" />
                            </div>
                        }
                    </div>
                    <div className="font-semibold text-lg sm:text-22px">Heading Title</div>
                </div>

                <div className="flex items-center mt-8">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-auto">
                        <BsDownload className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
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


                <div className="w-full h-px mt-9 mb-10 bg-c_F2F2F2 dark:bg-dark_0fc9f2"></div>


                <div className="flex items-center">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-auto">
                        <BsDownload className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
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


            {/* mobile category select modal */}
            {enableCategoryModal &&
                <div className="fixed top-0 left-0 bg-black bg-opacity-50 dark:bg-opacity-80 w-full h-screen flex flex-col text-black dark:text-white z-10
                                px-3 sm:px-0">
                    <div className="m-auto w-full max-w-430px pb-10 px-8 rounded-md
                                bg-c_F8F9FB dark:bg-gray-900 dark:shadow-dark_card
                                pt-6 sm:pt-7_5">
                        <div className="flex justify-end">
                            <button className="font-semibold text-xs text-c_1564C0 dark:text-dark_0fc9f2 transform hover:scale-110 ease-out duration-700"
                                    onClick={() => {closeCategoryModalHandler()}}>Close</button>
                        </div>
                        <div className="mt-5">
                            {navItems.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`py-3 cursor-pointer transform hover:scale-110 ease-out duration-700 text-xs font-semibold border-b border-c_E8EBF1 dark:border-dark_0fc9f2 ${index === 0 ? 'border-t' : ''}`}
                                        onClick={() => {selectCurrentCategoryHandler(index)}}>
                                        {item.title}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }

            {/* mobile category select modal */}
            {enableSubcategoryModal &&
                <div className="fixed top-0 left-0 bg-black bg-opacity-50 dark:bg-opacity-80 w-full h-screen flex flex-col text-black dark:text-white z-10
                                px-3 sm:px-0">
                    <div className="m-auto w-full max-w-430px pb-10 px-8 rounded-md
                                bg-c_F8F9FB dark:bg-gray-900 dark:shadow-dark_card
                                pt-6 sm:pt-7_5">
                        <div className="flex justify-end">
                            <button className="font-semibold text-xs text-c_1564C0 dark:text-dark_0fc9f2 transform hover:scale-110 ease-out duration-700"
                                    onClick={() => {closeSubcategoryModalHandler()}}>Close</button>
                        </div>
                        <div className="mt-5">
                            {currentCategory.items.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`py-3 cursor-pointer transform hover:scale-110 ease-out duration-700 text-xs font-semibold border-b border-c_E8EBF1 dark:border-dark_0fc9f2 ${index === 0 ? 'border-t' : ''}`}
                                        onClick={() => {selectCurrentSubcategoryHandler(index)}}>
                                        {item.title}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Component39