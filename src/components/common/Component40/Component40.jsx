import { useState } from 'react'
import {
    FaIndent,
    FaOutdent,
    BsDownload,
    BsFullscreen,
    FaCaretDown
} from '../../icon/IconImage'
import SelectInput from '../../ui/SelectInput'
import BarLineChart from '../BarLineChart'
import NavBar from "../NavBar"

const Component40 = () => {

    let navItems = [
        { title: 'Category 1', items: new Array(7).fill({title: 'Sample Text 1', link: ''}) },
        { title: 'Category 2', items: new Array(7).fill({title: 'Sample Text 2', link: ''}) },
        { title: 'Category 3', items: new Array(7).fill({title: 'Sample Text 3', link: ''}) },
        { title: 'Category 4', items: new Array(7).fill({title: 'Sample Text 4', link: ''}) },
        { title: 'Category 5', items: new Array(7).fill({title: 'Sample Text 5', link: ''}) },
        { title: 'Category 6', items: new Array(7).fill({title: 'Sample Text 6', link: ''}) },
    ]

    let data_1 = [0,1,2,3,4,5,6,7,8]
    let data_2 = [8649, 10127, 2313, 678, 321, 11640, 12761, 2008, 887]
    let data_3 = [-609, -598, 387, 112, -22, -110, -233, -63, 60]
    let data_4 = [63.4, 74.2, 16.9, 5.0, 2.4, 85.3, 93.5, 14.7, 6.5]
    let data_5 = [12, 45, 78, 28, 74, 66, 43, "-", "-"]
    let data_6 = [
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
    ]
    let data_7 = [-609, -598, 387, 112, -22, -110, -233, -63, 60, 112, -22, -110,]
    let data_8 = [
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
    ]
    let data_9 = [-609, -598, 387, 112, -22, -110]
    let chart_option = ["All", "Item 1", "Item 2", "Item 3"]

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
    const [enableChartOption, setEnableChartOption] = useState(chart_option[0])
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
                </div>

                <div className="flex items-center mt-8">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-auto">
                        <BsDownload className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                {/* table part */}
                <div className="mt-4_5 flex-col
                                bg-white lg:bg-transparent
                                py-4 lg:py-0
                                px-2 lg:px-0
                                rounded-lg lg:rounded-none
                                hidden lg:flex">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-9 h-8 gap-x-0.5">
                            <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-2 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-2 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-2 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_1.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>Text</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-4 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_2.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-4 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">(Title<span className="text-c_C85151">-173</span>)</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_3.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                    ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 mt-0.5">
                            <div className="col-span-9 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_4.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}%</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-4 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_5.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}</div>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>

                {/* mobile design part */}
                <div className="mt-4_5 flex-col
                                bg-white lg:bg-transparent
                                py-4 lg:py-0
                                px-2 lg:px-0
                                rounded-lg lg:rounded-none
                                flex lg:hidden">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-3 h-8 gap-x-0.5">
                            <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-3 h-8 mt-0.5 gap-x-0.5">
                            {[0, 1, 2].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>Text</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-3 h-8 mt-0.5 gap-x-0.5">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-3 h-8 mt-0.5 gap-x-0.5">
                            {[8649, 10127, 2313].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-1 h-8 mt-0.5 gap-x-0.5">
                            <div className="flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-3 h-8 mt-0.5 gap-x-0.5">
                            {[-609, -598, 387].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                    ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid h-8 mt-0.5">
                            <div className="flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-3 h-8 mt-0.5 gap-x-0.5">
                            {[63.4, 74.2, 16.9].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}%</div>
                                )
                            })}
                        </div>

                        <div className="grid h-8 mt-0.5 gap-x-0.5">
                            <div className="flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-3 h-8 mt-0.5 gap-x-0.5">
                            {[12, 45, 78].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}</div>
                                )
                            })}
                        </div>
                    </div>


                    <div className="flex flex-col mt-6">
                        <div className="grid grid-cols-3 h-8 gap-x-0.5">
                            <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-2 h-8 mt-0.5 gap-x-0.5">
                            {[0, 1].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>Text</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-3 h-8 mt-0.5 gap-x-0.5">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-2 h-8 mt-0.5 gap-x-0.5">
                            {[678, 321].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-1 h-8 mt-0.5 gap-x-0.5">
                            <div className="flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-2 h-8 mt-0.5 gap-x-0.5">
                            {[112, -22].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                    ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid h-8 mt-0.5">
                            <div className="flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-2 h-8 mt-0.5 gap-x-0.5">
                            {[5.0, 2.4].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}%</div>
                                )
                            })}
                        </div>

                        <div className="grid h-8 mt-0.5 gap-x-0.5">
                            <div className="flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-2 h-8 mt-0.5 gap-x-0.5">
                            {[28, 74].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}</div>
                                )
                            })}
                        </div>
                    </div>


                    <div className="flex flex-col mt-6">
                        <div className="grid grid-cols-2 h-8 gap-x-0.5">
                            <div className="col-span-1 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-1 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-4 h-8 mt-0.5 gap-x-0.5">
                            {[0, 1, 2, 3].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>Text</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-3 h-8 mt-0.5 gap-x-0.5">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-4 h-8 mt-0.5 gap-x-0.5">
                            {[11640, 12761, 2008, 887].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-1 h-8 mt-0.5 gap-x-0.5 font-semibold text-xs">
                            <div className="flex justify-center items-center bg-c_E8EBF1 dark:bg-gray-700">(Title<span className="text-c_C85151">-173</span>)</div>
                        </div>
                        <div className="grid grid-cols-4 h-8 mt-0.5 gap-x-0.5">
                            {[-110, -233, -63, 60].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                    ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid h-8 mt-0.5">
                            <div className="flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-4 h-8 mt-0.5 gap-x-0.5">
                            {[85.3, 93.5, 14.7, 6.5].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}%</div>
                                )
                            })}
                        </div>

                        <div className="grid h-8 mt-0.5 gap-x-0.5">
                            <div className="flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-4 h-8 mt-0.5 gap-x-0.5">
                            {[66, 43, '-', '-'].map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}</div>
                                )
                            })}
                        </div>
                    </div>

                    
                </div>

                <div className="w-full h-px mt-9 bg-c_F2F2F2 dark:bg-dark_0fc9f2
                                hidden lg:block"></div>


                <div className="flex items-center mt-7">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-2 text-11px text-c_6E7582 font-semibold">(Sample Text)</div>
                    <div className="ml-auto">
                        <BsDownload className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                
                {/* table part */}
                <div className="flex-col mt-5_5
                                bg-white lg:bg-transparent
                                py-4 lg:py-0
                                px-2 lg:px-0
                                rounded-lg lg:rounded-none
                                hidden lg:flex">
                    <div className="grid grid-cols-12 h-8 gap-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                    </div>
                    <div className="grid grid-cols-12 h-8 mt-0.5 gap-x-0.5">
                        {data_6.map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item.title}</div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-12 h-8 mt-0.5 gap-x-0.5">
                        {data_6.map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item.value).toLocaleString()}</div>
                            )
                        })}
                    </div>

                    <div className="grid grid-cols-12 h-8 mt-0.5">
                        <div className="col-span-12 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                    </div>
                    <div className="grid grid-cols-12 h-8 mt-0.5 gap-x-0.5">
                        {data_7.map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                            )
                        })}
                    </div>

                    <div className="grid grid-cols-12 h-8 gap-x-0.5 mt-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>
                    <div className="grid grid-cols-12 h-8 gap-x-0.5 mt-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        {data_8.map((item, index) => {
                            return (
                                <div key={`item1_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item.title}</div>
                            )
                        })}
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>
                    <div className="grid grid-cols-12 h-8 gap-x-0.5 mt-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        {data_8.map((item, index) => {
                            return (
                                <div key={`item1_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item.value).toLocaleString()}</div>
                            )
                        })}
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>

                    
                    <div className="grid grid-cols-12 h-8 mt-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        <div className="col-span-6 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>
                    <div className="grid grid-cols-12 h-8 mt-0.5 gap-x-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        {data_9.map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                            )
                        })}
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>
                    
                </div>


                {/* mobile design part */}
                <div className="flex-col mt-5_5
                                bg-white lg:bg-transparent
                                py-4 lg:py-0
                                px-2 lg:px-0
                                rounded-lg lg:rounded-none
                                flex lg:hidden">
                    <div className="grid grid-cols-2 h-8 gap-0.5">
                        <div className="col-span-1 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-1 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                    </div>
                    <div className="grid grid-cols-6 h-8 mt-0.5 gap-x-0.5">
                        {[0, 1, 2, 3, 4, 5].map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>Text</div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-6 h-8 mt-0.5 gap-x-0.5">
                        {[8649, 10127, 2313, 8649, 10127, 2313].map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item).toLocaleString()}</div>
                            )
                        })}
                    </div>

                    <div className="grid grid-cols-12 h-8 mt-0.5">
                        <div className="col-span-12 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                    </div>
                    <div className="grid grid-cols-6 h-8 mt-0.5 gap-x-0.5">
                        {[-233, -63, 60, -233, -63, 60].map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                            )
                        })}
                    </div>

                    <div className="grid grid-cols-2 h-8 gap-x-0.5 mt-5">
                        <div className="col-span-1 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-1 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                    </div>
                    <div className="grid grid-cols-6 h-8 gap-x-0.5 mt-0.5">
                        {[8649, 10127, 2313, 8649, 10127, 2313].map((item, index) => {
                            return (
                                <div key={`item1_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>Text</div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-6 h-8 gap-x-0.5 mt-0.5">
                        {[8649, 10127, 2313, 8649, 10127, 2313].map((item, index) => {
                            return (
                                <div key={`item1_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item).toLocaleString()}</div>
                            )
                        })}
                    </div>

                    
                    <div className="grid grid-cols-1 h-8 mt-0.5">
                        <div className="flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                    </div>
                    <div className="grid grid-cols-6 h-8 mt-0.5 gap-x-0.5">
                        {[-233, -63, 60, -233, -63, 60].map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                            )
                        })}
                    </div>
                    
                </div>
                

                <div className="w-full h-px mt-7_5 mb-7 bg-c_F2F2F2 dark:bg-dark_0fc9f2"></div>


                <div className="flex items-center flex-wrap gap-y-4">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="flex items-center
                                    ml-0 lg:ml-auto">
                        <label className="font-semibold text-sm mr-2">Sample Text</label>
                        <SelectInput 
                            className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                    border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                    h-6_5 sm:h-7_5
                                    w-27 text-xs"
                            option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                            option_li={chart_option} 
                            default_option={chart_option[0]}
                            returnVal={setEnableChartOption}
                        />
                    </div>
                    <div className="flex items-center
                                    ml-auto lg:ml-10">
                        <BsFullscreen className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                        <BsDownload className="stroke-1 ml-5 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                <div className="mt-5
                                bg-white lg:bg-transparent
                                py-4 lg:py-0
                                px-2 lg:px-0
                                rounded-lg lg:rounded-none">
                    {enableChart && <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false} />}
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

export default Component40