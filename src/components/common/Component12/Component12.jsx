import {
    BsFullscreen,
    BsDownload,
} from '../../icon/IconImage'

import BarChart from '../BarChart'


const Component12 = () => {
    let item_li = [
        {title: 'Title 1', value: '38789174'},
        {title: 'Title 2', value: '963625'},
        {title: 'Title 3', value: '5.43%'},
        {title: 'Title 4', value: '7.66%'},
        {title: 'Title 5', value: '11.13%'},
        {title: 'Title 6', value: '13.84%'},
    ]
    let chart_data = [
        {x_data: 'Sep 4', y_data: 12},
        {x_data: 'Sep 5', y_data: 35},
        {x_data: 'Sep 6', y_data: 9},
        {x_data: 'Sep 7', y_data: 56},
        {x_data: 'Sep 8', y_data: 47},
        {x_data: 'Sep 9', y_data: 23},
        {x_data: 'Sep 10', y_data: 31},
    ]
    return (
        <div>
            <div className="flex items-center">
                <div className="font-semibold text-black dark:text-white
                                text-lg sm:text-22px">Heading Title</div>
                <div className="flex items-center ml-auto">
                    <BsFullscreen className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700
                                        text-black dark:text-dark_0fc9f2"/>
                    <BsDownload className="ml-5 stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700
                                        text-black dark:text-dark_0fc9f2"/>
                </div>
            </div>
            <div className="mt-8 rounded-lg
                            bg-white dark:bg-transparent dark:shadow-dark_card">
                <BarChart chart_data={chart_data}/>
                <div className="pt-0 sm:pt-7">
                    <div className="h-px bg-c_F2F2F2 w-full
                                    hidden sm:block"></div>
                    <div className="py-10 grid px-6 gap-y-6
                                    grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
                        {item_li.map((item, index) => {
                            return <div key={`item_${index}`} className="flex">
                                        <div className="h-full w-2 flex flex-col">
                                            <div className="w-full h-7_5 my-auto bg-c_E8EBF1 rounded-md"></div>
                                        </div>
                                        <div className="ml-2_5 flex flex-col font-semibold text-xs">
                                            <div className="text-c_6E7582 font-medium leading-normal
                                                            text-10px sm:text-xs">{item.title}</div>
                                            <div className="mr-2 text-black dark:text-white
                                                            text-xs sm:text-sm">{item.value}</div>
                                            
                                        </div>
                                    </div>
                        })}
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Component12