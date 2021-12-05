import { useState } from 'react'
import {
    FaOutdent,
    FaIndent,
    BsFullscreen,
    BsDownload,
} from '../../icon/IconImage'
import SelectInput from '../../ui/SelectInput'
import BarLineChart from '../BarLineChart'
import NavBar from "../NavBar"


const Component38 = () => {

    let navItems = [
        { title: 'CATEGORY 1', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 2', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 3', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 4', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 5', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 6', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
    ]

    let chart_option = ["All", "Item 1", "Item 2", "Item 3"]

    let chart_data = {
        line1_data: [],
        line2_data: [],
        bar_data: []
    }
    for (let index = 0; index < 100; index++) {
        chart_data.line1_data.push(Math.floor(Math.random() * 350))
        chart_data.line2_data.push(Math.floor(Math.random() * 250))
        chart_data.bar_data.push(Math.floor(Math.random() * 100))
    }

    
    const [enableNavBar, setEnableNavBar] = useState(true)
    const [currentCategory, setCurrentCategory] = useState(navItems[0])
    const [currentSubCategory, setCurrentSubCategory] = useState(navItems[0].items[0])
    const [enableChartOption, setEnableChartOption] = useState(chart_option[0])
    const [enableChart, setEnableChart] = useState(true)
    
    const navBarHandler = () => {
        setEnableNavBar(!enableNavBar)
        setEnableChart(false)
        setTimeout(() => {
            setEnableChart(true)
        }, 10);
    }

    return (
        <div className="items-stretch rounded-lg shadow-card dark:shadow-dark_card
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
            <div className="flex-1 flex flex-col px-5 py-5 
                        bg-white dark:bg-transparent text-black dark:text-white
                        mt-7_5 sm:mt-0">
                <div className="flex items-center">
                    <div className="cursor-pointer transform hover:scale-105 ease-out duration-700">
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
                    <div className="ml-5 font-semibold text-lg sm:text-22px">Heading Title</div>
                    <div className="ml-auto flex items-center">
                        <BsFullscreen className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                        <BsDownload className="stroke-1 ml-7 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                <div className="flex items-center mt-7 gap-x-7">
                    <div className="flex items-center">
                        <label className="text-sm font-medium mr-2.5">Text</label>
                        <SelectInput 
                            className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                    border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                    h-5_5 sm:h-7_5
                                    w-27
                                    text-9px sm:text-xs"
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
                                    h-5_5 sm:h-7_5
                                    w-27
                                    text-9px sm:text-xs"
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
                                    h-5_5 sm:h-7_5
                                    w-27
                                    text-9px sm:text-xs"
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
                                    h-5_5 sm:h-7_5
                                    w-27
                                    text-9px sm:text-xs"
                            option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                            option_li={chart_option} 
                            default_option={chart_option[0]}
                            returnVal={setEnableChartOption}
                        />
                    </div>
                </div>

                <div className="mt-0">
                    {enableChart && <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false} />}
                </div>


                <div className="w-full h-px mt-7 mb-10 bg-c_F2F2F2 dark:bg-dark_0fc9f2"></div>

                <div className="flex flex-col">
                    <div className="font-semibold text-lg sm:text-22px">Heading Title</div>
                    <div className="text-sm font-medium">
                        <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione. </p>
                        <p className="mt-6">Voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                        <p className="mt-6">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Component38