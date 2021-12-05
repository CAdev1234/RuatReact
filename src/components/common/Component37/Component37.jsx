import { useState } from 'react'
import {
    FaIndent,
    FaOutdent,
    BsFullscreen,
    BsDownload,
    FaCaretDown
} from '../../icon/IconImage'
import BarLineChart from '../BarLineChart'
import NavBar from "../NavBar"


const Component37 = () => {

    let navItems = [
        { title: 'Category 1', items: new Array(7).fill({title: 'Sample Text 1', link: ''}) },
        { title: 'Category 2', items: new Array(7).fill({title: 'Sample Text 2', link: ''}) },
        { title: 'Category 3', items: new Array(7).fill({title: 'Sample Text 3', link: ''}) },
        { title: 'Category 4', items: new Array(7).fill({title: 'Sample Text 4', link: ''}) },
        { title: 'Category 5', items: new Array(7).fill({title: 'Sample Text 5', link: ''}) },
        { title: 'Category 6', items: new Array(7).fill({title: 'Sample Text 6', link: ''}) },
    ]

    let chart_data = {
        line1_data: [],
        line2_data: [],
        bar_data: []
    }
    for (let index = 0; index < 50; index++) {
        chart_data.line1_data.push(Math.floor(Math.random() * 350))
        chart_data.line2_data.push(Math.floor(Math.random() * 250))
        chart_data.bar_data.push(Math.floor(Math.random() * 100))
    }

    

    const [enableNavBar, setEnableNavBar] = useState(true)
    const [currentCategory, setCurrentCategory] = useState(navItems[0])
    const [currentSubCategory, setCurrentSubCategory] = useState(navItems[0].items[0])
    const [enableChart, setEnableChart] = useState(true)
    const [enableCategoryModal, setEnableCategoryModal] = useState(false)
    const [enableSubcategoryModal, setEnableSubcategoryModal] = useState(false)
    
    const navBarHandler = () => {
        setEnableNavBar(!enableNavBar)
        setEnableChart(false)
        setTimeout(() => {
            setEnableChart(true)
        }, 10);
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
                    <div className="font-semibold text-xs mr-auto">Category</div>
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
                    <div className="font-semibold text-xs mr-auto">Sub-Category</div>
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
                        px-0 lg:px-5 py-0 lg:py-5
                        text-black dark:text-white
                        mt-7_5 lg:mt-0">
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
                    <div className="font-semibold text-sm">Graph 1</div>
                    <div className="ml-auto flex items-center">
                        <BsFullscreen className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                        <BsDownload className="stroke-1 ml-7 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                <div className="rounded-lg lg:rounded-none bg-white dark:bg-transparent lg:bg-white shadow-card lg:shadow-none dark:shadow-dark_card lg:dark:shadow-none
                                mt-4_5 lg:mt-6">
                    {enableChart && <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false} />}
                </div>

                <div className="w-full h-px mt-7 mb-10 bg-c_F2F2F2 dark:bg-dark_0fc9f2"></div>


                <div className="flex items-center">
                    <div className="font-semibold text-sm">Graph 2</div>
                    <div className="ml-auto flex items-center">
                        <BsFullscreen className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                        <BsDownload className="stroke-1 ml-7 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                <div className="rounded-lg lg:rounded-none bg-white dark:bg-transparent lg:bg-white shadow-card lg:shadow-none dark:shadow-dark_card lg:dark:shadow-none
                                mt-4_5 lg:mt-6">
                    {enableChart && <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false} />}
                </div>


                <div className="w-full h-px mt-14 bg-c_F2F2F2 dark:bg-dark_0fc9f2
                                hidden lg:block"></div>

                <div className="flex flex-col mt-10">
                    <div className="font-semibold
                                    text-lg sm:text-22px">Heading Title</div>
                    <div className="mt-3 text-sm font-semibold">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
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

export default Component37