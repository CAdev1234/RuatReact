import React, { useContext, useEffect, useState } from "react"
import {
    BsCalendarEvent
} from '../icon/IconImage'
import { generateUUID } from "../../utils/SimpleFun"
import { ThemeContext } from "../contexts/ThemeContext"


function debounce(fn, ms) {
    let timer
    return () => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}


const BarLineChart = ({chart_data, enable_chart_option_btn_group}) => {

    let date_option_li = [
        {title: '24h', value: '24h'},
        {title: '7d', value: '7d'},
        {title: '30d', value: '30d'},
        {title: '60d', value: '60d'},
        {title: '90d', value: '90d'},
        {title: 'All', value: 'all'},
    ]

    const [chartID, setChartID] = useState(generateUUID())
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [enableDateOption, setEnableDateOption] = useState([true, new Array(date_option_li.length - 1).fill(false)])
    const [enableDatePicker, setEnableDatePicker] = useState(false)
    const [enableLine, setEnableLine] = useState(true)
    const [enableBar, setEnableBar] = useState(false)

    const {theme, setTheme} = useContext(ThemeContext)

    const updateChartByDateHandler = (index) => {
        let new_array = new Array(date_option_li.length).fill(false)
        new_array[index] = true
        setEnableDateOption(new_array)
        setEnableDatePicker(false)
    }

    const chooseDatePickerHandler = () => {
        let new_array = new Array(date_option_li.length).fill(false)
        setEnableDateOption(new_array)
        setEnableDatePicker(true)
    }

    const selectLineChartHandler = () => {
        setEnableLine(!enableLine)
    }
    const selectBarChartHandler = () => {
        setEnableBar(!enableBar)
    }

    useEffect(() => {
        const bar_line_chart = window.echarts.init(document.getElementById(chartID))
        
        let option = {
            color: ['#C85151', '#64A879'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            grid: {left: '5%', right: '3%', bottom: '5%', top: '10%'},
            xAxis: [
                {
                    show: false,
                    type: 'category',
                    boundaryGap: false,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#C8C8C8'
                        }
                    },
                },
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                    color: '#C8C8C8'
                }
              }
            ],
            series: [
                {
                    name: 'Line 1',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 1
                    },
                    showSymbol: false,
                    emphasis: {
                        focus: 'series'
                    },
                    data: chart_data.line1_data
                },
                {
                    name: 'Line 2',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 1
                    },
                    showSymbol: false,
                    emphasis: {
                        focus: 'series'
                    },
                    data: chart_data.line2_data,
                },
                {
                    name: 'Bar',
                    type: 'bar',
                    itemStyle: {
                        color: '#7EAFE8'
                    },
                    data: chart_data.bar_data,
                    emphasis: {
                      focus: 'series'
                    },
                    animationDelay: function (idx) {
                      return idx * 10;
                    }
                },
            ]
        };

        bar_line_chart.setOption(option)

        // update chart when screen width changed
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            bar_line_chart.resize()
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }

        
    }, [dimensions])

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col">
            <div id={chartID} className="w-full" style={{height: 500}}></div>
            <div className="flex items-center px-2">
                {enable_chart_option_btn_group &&
                    <div className="items-center gap-x-2
                                    hidden sm:flex">
                        <button className={`flex items-center justify-center rounded-full font-semibold px-4
                                            cursor-pointer transform hover:scale-105 ease-out duration-700
                                            ${enableLine === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'bg-transparent text-black dark:text-white'}
                                            h-7_5
                                            text-xs sm:text-sm`}
                                onClick={() => {selectLineChartHandler()}}>Line Chart</button>
                        <button className={`flex items-center justify-center rounded-full font-semibold px-4
                                            cursor-pointer transform hover:scale-105 ease-out duration-700
                                            ${enableBar === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'bg-transparent text-black dark:text-white'}
                                            h-7_5
                                            text-xs sm:text-sm`}
                                onClick={() => {selectBarChartHandler()}}>Graph2</button>
                    </div>
                }
                <div className="flex items-center gap-y-2 flex-wrap ml-auto
                                gap-x-1 sm:gap-x-2">
                    {date_option_li.map((item, index) => {
                        return (
                            <button key={`date_option_${index}`} 
                                className={`flex items-center justify-center rounded-full font-semibold px-4 ${enableDateOption[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'text-black dark:text-white'}
                                            cursor-pointer transform hover:scale-105 ease-out duration-700
                                            h-7_5
                                            text-xs sm:text-sm`}
                                onClick={() => {updateChartByDateHandler(index)}}>{item.title}</button>
                        )
                    })}
                    <button className={`flex items-center justify-center rounded-full font-semibold ${enableDatePicker === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'text-black dark:text-white'}
                                    transform hover:scale-105 ease-out duration-700
                                    text-xs sm:text-sm
                                    px-1 sm:px-4
                                    h-6_5 sm:h-7_5`}
                        onClick={() => {chooseDatePickerHandler()}}>
                        <BsCalendarEvent className="stroke-1" />
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default React.memo(BarLineChart)