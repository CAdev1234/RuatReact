import { useState } from 'react'
import {
    FaOutdent,
    FaIndent,
    BsFullscreen,
    BsDownload,
    BsSliders,
    FaCaretDown
} from '../../icon/IconImage'
import SelectInput from '../../ui/SelectInput'
import BarLineChart from '../BarLineChart'
import NavBar from "../NavBar"


const Component38 = () => {

    let navItems = [
        { title: 'Category 1', items: new Array(7).fill({title: 'Sample Text 1', link: ''}) },
        { title: 'Category 2', items: new Array(7).fill({title: 'Sample Text 2', link: ''}) },
        { title: 'Category 3', items: new Array(7).fill({title: 'Sample Text 3', link: ''}) },
        { title: 'Category 4', items: new Array(7).fill({title: 'Sample Text 4', link: ''}) },
        { title: 'Category 5', items: new Array(7).fill({title: 'Sample Text 5', link: ''}) },
        { title: 'Category 6', items: new Array(7).fill({title: 'Sample Text 6', link: ''}) },
    ]

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
    const [enableChart, setEnableChart] = useState(true)
    const [enableCategoryModal, setEnableCategoryModal] = useState(false)
    const [enableSubcategoryModal, setEnableSubcategoryModal] = useState(false)
    const [enableChartOption, setEnableChartOption] = useState(chart_option[0])
    const [enableChartOptionModal, setEnableChartOptionModal] = useState(false)
    
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
    
    const closeChartOptionModalHandler = () => {
        document.querySelector('body').style.overflow = 'auto'
        setEnableChartOptionModal(false)
    }
    const openChartOptionModalHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        setEnableChartOptionModal(true)
    }
    const selectChartOptionHandler = () => {
        closeChartOptionModalHandler()
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
                        <BsSliders className="block lg:hidden stroke-0.5 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" 
                                    onClick={() => {openChartOptionModalHandler()}}/>
                        <BsFullscreen className="ml-7 stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                        <BsDownload className="stroke-1 ml-7 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                <div className="items-center flex-wrap mt-7 gap-x-7 gap-y-4
                                hidden lg:flex">
                    <div className="flex items-center">
                        <label className="text-sm font-medium mr-2.5">Text</label>
                        <SelectInput 
                            className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                    border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                    h-6_5 lg:h-7_5
                                    w-27
                                    text-xs lg:text-sm"
                            option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                            option_li={chart_option} 
                            default_option={chart_option[0]}
                            returnVal={setEnableChartOption}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm font-medium mr-2.5">Text</label>
                        <SelectInput 
                            className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                    border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                    h-6_5 sm:h-7_5
                                    w-27
                                    text-xs lg:text-sm"
                            option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                            option_li={chart_option} 
                            default_option={chart_option[0]}
                            returnVal={setEnableChartOption}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm font-medium mr-2.5">Text</label>
                        <SelectInput 
                            className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                    border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                    h-6_5 sm:h-7_5
                                    w-27
                                    text-xs sm:text-sm"
                            option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                            option_li={chart_option} 
                            default_option={chart_option[0]}
                            returnVal={setEnableChartOption}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm font-medium mr-2.5">Text</label>
                        <SelectInput 
                            className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                    border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                    h-6_5 sm:h-7_5
                                    w-27
                                    text-xs sm:text-sm"
                            option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                            option_li={chart_option} 
                            default_option={chart_option[0]}
                            returnVal={setEnableChartOption}
                        />
                    </div>
                </div>

                <div className="rounded-lg lg:rounded-none bg-white dark:bg-transparent lg:bg-white shadow-card lg:shadow-none dark:shadow-dark_card lg:dark:shadow-none
                                mt-4_5 lg:mt-6">
                    {enableChart && <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false} />}
                </div>


                <div className="w-full h-px mt-7 bg-c_F2F2F2 dark:bg-dark_0fc9f2
                                hidden lg:block"></div>

                <div className="flex flex-col mt-10">
                    <div className="font-semibold text-lg sm:text-22px">Heading Title</div>
                    <div className="text-sm font-medium">
                        <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione. </p>
                        <p className="mt-6">Voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                        <p className="mt-6">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                    </div>
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

            {/* mobile chart option select modal */}
            {enableChartOptionModal &&
                <div className="fixed top-0 left-0 bg-black bg-opacity-50 dark:bg-opacity-80 w-full h-screen flex flex-col text-black dark:text-white z-10
                                px-3 sm:px-0">
                    <div className="m-auto w-full max-w-430px pb-10 rounded-md
                                bg-c_F8F9FB dark:bg-gray-900 dark:shadow-dark_card
                                pt-5">
                        <div className="flex items-center px-7">
                            <div className="text-lg font-semibold">Heading Title</div>
                            <button className="ml-auto font-semibold text-xs text-c_1564C0 dark:text-dark_0fc9f2 transform hover:scale-110 ease-out duration-700"
                                    onClick={() => {closeChartOptionModalHandler()}}>Close</button>
                        </div>
                        <div className="px-3 mt-4 mb-6 w-full">
                            <div className="w-full h-px bg-c_E8EBF1"></div>
                        </div>
                        
                        <div className="flex flex-col px-4 w-full gap-y-3">
                            <div className="flex items-center w-full">
                                <label className="mr-auto text-sm font-medium">Text</label>
                                <SelectInput 
                                    className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                            border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                            h-6_5 lg:h-7_5
                                            w-27
                                            text-xs lg:text-sm"
                                    option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                                    option_li={chart_option} 
                                    default_option={chart_option[0]}
                                    returnVal={setEnableChartOption}
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="mr-auto text-sm font-medium">Text</label>
                                <SelectInput 
                                    className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                            border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                            h-6_5 sm:h-7_5
                                            w-27
                                            text-xs lg:text-sm"
                                    option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                                    option_li={chart_option} 
                                    default_option={chart_option[0]}
                                    returnVal={setEnableChartOption}
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="mr-auto text-sm font-medium">Text</label>
                                <SelectInput 
                                    className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                            border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                            h-6_5 sm:h-7_5
                                            w-27
                                            text-xs sm:text-sm"
                                    option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                                    option_li={chart_option} 
                                    default_option={chart_option[0]}
                                    returnVal={setEnableChartOption}
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="mr-auto text-sm font-medium">Text</label>
                                <SelectInput 
                                    className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                            border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                            h-6_5 sm:h-7_5
                                            w-27
                                            text-xs sm:text-sm"
                                    option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                                    option_li={chart_option} 
                                    default_option={chart_option[0]}
                                    returnVal={setEnableChartOption}
                                />
                            </div>
                        </div>

                        <div className="mt-16 flex items-center justify-center gap-x-3 h-6_5">
                            <button className="h-full w-20 flex items-center justify-center text-sm font-semibold rounded-full border 
                                            border-c_1564C0 text-c_1564C0">Clear</button>
                            <button className="h-full w-20 flex items-center justify-center text-sm font-semibold rounded-full 
                                            bg-c_1564C0 dark:bg-dark_0fc9f2 text-white"
                                    onClick={() => {selectChartOptionHandler()}}>Ok</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Component38