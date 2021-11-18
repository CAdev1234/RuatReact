import React, { useEffect, useState } from "react"
import { generateUUID } from "../../utils/SimpleFun"

const BarChart = () => {

    let chart_data = [
        {x_data: 'Sep 4', y_data: 12},
        {x_data: 'Sep 5', y_data: 35},
        {x_data: 'Sep 6', y_data: 9},
        {x_data: 'Sep 7', y_data: 56},
        {x_data: 'Sep 8', y_data: 47},
        {x_data: 'Sep 9', y_data: 23},
        {x_data: 'Sep 10', y_data: 31},
    ]

    let date_option_li = [
        {title: '7d', value: '7d'},
        {title: '30d', value: '30d'},
        {title: '60d', value: '60d'},
        {title: '90d', value: '90d'},
        {title: '1yr', value: '1yr'},
        {title: 'All', value: 'all'},
        
    ]

    const [chartID, setChartID] = useState(generateUUID())
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [enableDateOption, setEnableDateOption] = useState([true, new Array(date_option_li.length - 1).fill(false)])

    const updateChartByDateHandler = (index) => {
        let new_array = new Array(date_option_li.length).fill(false)
        new_array[index] = true
        setEnableDateOption(new_array)
    }

    useEffect(() => {
        const bar_chart = window.echarts.init(document.getElementById(chartID))
        let x_data = []
        let y_data = []
        for (let index = 0; index < chart_data.length; index++) {
            x_data.push(chart_data[index].x_data)
            y_data.push(chart_data[index].y_data)
        }
        let yMax = 500;
        let dataShadow = [];
        for (let i = 0; i < y_data.length; i++) {
            dataShadow.push(yMax);
        }
        let option = {
            backgroundColor: '#fff',
            xAxis: {
                data: x_data,
                axisLabel: {
                    inside: false,
                    color: '#BCC3CF'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#F2F2F2'
                    }
                },
                splitLine: {
                    itemStyle: {
                        color: '#F2F2F2'
                    }
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#C8C8C8'
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                {
                    type: 'bar',
                    showBackground: true,
                    itemStyle: {
                        // color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        //     { offset: 0, color: '#83bff6' },
                        //     { offset: 0.5, color: '#188df0' },
                        //     { offset: 1, color: '#188df0' }
                        // ])
                        color: '#7EAFE8'
                    },
                    emphasis: {
                        itemStyle: {
                            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ])
                        }
                    },
                    data: y_data
                }
            ]
        };
        // Enable data zoom when user click bar.
        const zoomSize = 6;
        bar_chart.on('click', function (params) {
            console.log(x_data[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            bar_chart.dispatchAction({
                type: 'dataZoom',
                startValue: x_data[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue:
                x_data[Math.min(params.dataIndex + zoomSize / 2, y_data.length - 1)]
            });
        });

        bar_chart.setOption(option)
    }, [])

    return (
        <div className="flex flex-col">
            <div id={chartID} className="w-full" style={{height: 500}}></div>
            <div className="bg-white flex flex-col">
                <div className="ml-auto mr-5 flex items-center">
                    {date_option_li.map((item, index) => {
                        return (
                            <div key={`date_option_${index}`} 
                                className={`flex items-center justify-center rounded-full text-sm font-semibold px-4 ${enableDateOption[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'text-black'}
                                            cursor-pointer transform hover:scale-105 ease-out duration-700
                                            h-7_5`}
                                onClick={() => {updateChartByDateHandler(index)}}>{item.title}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default React.memo(BarChart)