import { useEffect, useState } from 'react'
import {
    FaIndent,
    FaOutdent,
    BsFullscreen,
    BsDownload,
    BsChevronDown,
    FaCaretDown
} from '../../icon/IconImage'
import SelectInput from '../../ui/SelectInput'
import BarLineChart from '../BarLineChart'
import NavBar from "../NavBar"


const Component36 = () => {

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

    let table_data = [
        {item1: '2021/11/18', item2: 2.4578, item3: 412609, item4: 44835.39},
        {item1: '2021/11/18', item2: 2.4578, item3: 412609, item4: 44835.39},
        {item1: '2021/11/18', item2: 2.4578, item3: 412609, item4: 44835.39},
        {item1: '2021/11/18', item2: 2.4578, item3: 412609, item4: 44835.39},
        {item1: '2021/11/18', item2: 2.4578, item3: 412609, item4: 44835.39},
        {item1: '2021/11/18', item2: 2.4578, item3: 412609, item4: 44835.39},
        {item1: '2021/11/18', item2: 2.4578, item3: 412609, item4: 44835.39},
    ]

    const [enableNavBar, setEnableNavBar] = useState(true)
    const [currentCategory, setCurrentCategory] = useState(navItems[0])
    const [currentSubCategory, setCurrentSubCategory] = useState(currentCategory.items[0])
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
                    <div className="ml-auto flex items-center">
                        <BsFullscreen className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                        <BsDownload className="stroke-1 ml-7 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                <div className="rounded-lg lg:rounded-none bg-white dark:bg-transparent lg:bg-white shadow-card lg:shadow-none dark:shadow-dark_card lg:dark:shadow-none
                                mt-4_5 lg:mt-6">
                    {enableChart && <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false} />}
                </div>


                {/* table part */}
                <div className="mt-7">
                    <div className="text-black dark:text-white">
                        <div className="grid items-center px-3 w-full font-bold py-4 grid-cols-4 border-t border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50
                                        text-9px lg:text-xs">
                            <div className="flex items-center
                                            pl-0 lg:pl-10">Title</div>
                            <div className="flex items-center justify-end">Title</div>
                            <div className="flex items-center justify-end">Title</div>
                            <div className="flex items-center justify-end
                                            pr-0 lg:pr-10">Title</div>
                        </div>
                        <div className="flex flex-col
                                        text-10px sm:text-sm">
                            {table_data.map((item, index) => {
                                return <div key={`data_${index}`} className="flex flex-col">
                                            <div className={`px-3 grid grid-cols-4 items-center w-full border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${index === 0 ? 'border-t' : ''}
                                                             h-11 sm:h-71px`}>
                                                <div className="flex items-center font-semibold
                                                                pl-0 lg:pl-10">{item.item1}</div>
                                                <div className="flex items-center justify-end font-semibold">{item.item2}</div>
                                                <div className="flex flex-col font-semibold text-right">${Number(item.item3).toLocaleString()}</div>
                                                <div className="flex flex-col font-semibold text-right
                                                                pr-0 lg:pr-10">{item.item4}</div>
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

export default Component36