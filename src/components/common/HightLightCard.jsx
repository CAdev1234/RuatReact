import { useEffect } from 'react'
import {
    FaCaretDown,
    FaCaretUp,
    BsInfo,
    BsFillShareFill
} from '../icon/IconImage'
import DynamicLineChart from './DynamicLineChart'

const HightLightCard = () => {
    useEffect(() => {
        let gauge_chart = window.echarts.init(document.getElementById('gauge_chart'))
        let gauge_value = 50
        let option = {
            backgroundColor: '#fff',
            xAxis: {
                show: false,
                type: 'category',
                data: ['Mon'],
            },
            yAxis: {
                show: false,
                type: 'value',
            },
            series: [
                {
                    type: 'gauge',
                    radius: '100%',
                    center: ['50%', '70%'],
                    min: 0,
                    max: 100,
                    splitNumber: 100,
                    startAngle: 195,
                    endAngle: -15,
                    zlevel: 0,
                    data: [
                        {
                            value: gauge_value,
                            itemStyle: {
                                color: '#A7A7A7',
                            },
                            title: {
                                show: false
                            },
                            detail: {
                                show: false,
                            }
                        },
                    ],
                    pointer: {
                        show: true,
                        length: '100%',
                        radius: '100%',
                        width: 3,
                    },
                    title: {
                        show: false,
                    },
                    markLine: {
                        precision: 2,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                        formatter: function (value) {
                            if (value === gauge_value) {
                                return value
                            } else {
                                return ''
                            }
                        },
                        fontSize: 10,
                        distance: -40,
                        color: '#fff',
                        borderRadius: 9,
                        backgroundColor: '#BCCF4A',
                        padding: [3, 3, 3, 3],
                        rich: {}
                    },
                    axisLine: {
                        roundCap: true,
                        lineStyle: {
                            width: 13,
                            color: [
                                [1, new window.echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: "#D97458"
                                    },
                                    {
                                        offset: 0.1,
                                        color: "#DF8B58"
                                    },
                                    {
                                        offset: 0.5,
                                        color: "#F4DA5A"
                                    },
                                    {
                                        offset: 0.9,
                                        color: "#91C83F"
                                    },
                                    {
                                        offset: 1,
                                        color: "#50BC2E"
                                    }
                                ])]
                            ]
                        },
                    },
                },
                {
                    name: '小圆形',
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    center: ['50%', '70%'],
                    zlevel: 0,
                    radius: ['0%', '13%'],
                    tooltip: {
                        show: false,
                    },
                    animation: false,
                    z: 10,
                    label: {
                        show: true,
                        position: 'center',
                        color: '#fff',
                        fontSize: 10,
                        formatter: function () {
                            return '₿'
                        }
                    },

                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [
                        {
                            value: 100,
                            name: '2',
                            itemStyle: {
                                normal: {
                                    color: '#A7A7A7',
                                },
                            },
                        },
                    ],
                },
            ],
        };
        gauge_chart.setOption(option)
    }, [])
    return (
        <>
            <div className="bg-white shadow-card relative py-6 w-full">
                <div className="absolute top-0 left-0 w-full flex flex-col">
                    <div className="w-24 mx-auto -mt-3 text-xs h-6 text-c_1564C0 bg-white rounded-md flex items-center justify-center font-semibold shadow-card">HightLights</div>
                </div>
                <div className="flex items-center divide-x-2 divide-c_E8EBF1 flex-1 w-full">
                    <div className="flex items-center justify-evenly w-8/12">
                        <div className="w-31_5 bg-white rounded-lg flex flex-col py-4 border border-c_7EAFE8 text-center shadow-card">
                            <div className="text-xs font-medium text-c_6E7582">Total M.Cap</div>
                            <div className="text-black font-semibold mt-1">$2.59T</div>
                            <div className="flex items-center mx-auto mt-1">
                                <FaCaretDown className="text-c_C85151" />
                                <div className="text-c_C85151 text-xs font-semibold ml-1">1.2%</div>
                            </div>
                            <DynamicLineChart className='w-full h-9' line_color="#C85151" />
                        </div>
                        <div className="w-31_5 bg-white rounded-lg flex flex-col py-4 border text-center shadow-card">
                            <div className="text-xs font-medium text-c_6E7582">24h Vol</div>
                            <div className="text-black font-semibold mt-1">$128B</div>
                            <div className="flex items-center mx-auto mt-1 text-c_64A879">
                                <FaCaretUp className="text-c_64A879" />
                                <div className="text-xs font-semibold ml-1">1.2%</div>
                            </div>
                            <DynamicLineChart className='w-full h-9' line_color="#64A879" />
                        </div>
                        <div className="w-31_5 bg-white rounded-lg flex flex-col py-4 border text-center shadow-card">
                            <div className="text-xs font-medium text-c_6E7582">BTC.D</div>
                            <div className="text-black font-semibold mt-1">45.25%</div>
                            <div className="flex items-center mx-auto mt-1 text-c_64A879">
                                <FaCaretUp className="text-c_64A879" />
                                <div className="text-xs font-semibold ml-1">1.2%</div>
                            </div>
                            <DynamicLineChart className='w-full h-9' line_color="#64A879" />
                        </div>
                        <div className="w-31_5 bg-white rounded-lg flex flex-col py-4 border text-center shadow-card">
                            <div className="text-xs font-medium text-c_6E7582">ETH.D</div>
                            <div className="text-black font-semibold mt-1">17.25%</div>
                            <div className="flex items-center mx-auto mt-1">
                                <FaCaretDown className="text-c_C85151" />
                                <div className="text-c_C85151 text-xs font-semibold ml-1">1.2%</div>
                            </div>
                            <DynamicLineChart className='w-full h-9' line_color="#C85151" />
                        </div>

                    </div>
                    <div className="px-5 flex flex-col flex-1">
                        <div className="flex items-center">
                            <div className="w-7 h-7 rounded-full bg-c_E8EBF1"></div>
                            <div className="text-black font-semibold ml-3">Fear & Greed Index</div>
                            <div className="bg-c_BCC3CF w-4 h-4 rounded-full text-white flex justify-center items-center ml-3">
                                <BsInfo className="text-white" />
                            </div>
                            <div className="ml-auto text-sm">
                                <BsFillShareFill />
                            </div>
                        </div>
                        <div className="flex items-start h-33">
                            <div className="h-full">
                                <div id="gauge_chart" className="w-50 h-full"></div>
                                <div className="flex items-center justify-center text-xs">
                                    <div className="text-black font-semibold">Now:</div>
                                    <div className="text-c_BCCF4A font-semibold ml-1">Greed</div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 h-full">
                                <div>
                                    <div className="text-xs text-c_6E7582 font-semibold">Yesterday</div>
                                    <div className="flex items-center text-c_50BC2E text-sm font-semibold">
                                        <div>Ext.Greed</div>
                                        <div className="ml-auto">70%</div>
                                    </div>
                                </div>
                                <div className="my-auto">
                                    <div className="text-xs text-c_6E7582 font-semibold">Last week</div>
                                    <div className="flex items-center text-c_50BC2E text-sm font-semibold">
                                        <div>Ext.Greed</div>
                                        <div className="ml-auto">78%</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-c_6E7582 font-semibold">Last month</div>
                                    <div className="flex items-center text-c_E4BE64 text-sm font-semibold">
                                        <div>Neutral</div>
                                        <div className="ml-auto">53%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HightLightCard