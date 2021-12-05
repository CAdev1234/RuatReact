import { useState } from 'react'
import {
    FaCaretUp,
    FaCaretDown,
    BsChevronExpand,
    BsChevronRight
} from '../../icon/IconImage'

const Component32 = () => {
    let table_data = [
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
        {item1: 'Text', item2: -1.24, item3: 0.18, item4: -1.24, item5: 0.18, item6: 0.18, item7: 0.18, item8: 0.18, item9: -1.24, item10: 0.18},
    ]

    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))

    return (
        <div className="text-black dark:text-white">
            <div className="flex flex-col">
                <div className="font-semibold
                                text-lg sm:text-22px">Heading Title</div>
                <div className="mt-1.5 text-c_6E7582
                                text-11px sm:text-sm">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>


            {/* table part */}
            <div className="hidden sm:block mt-5 overflow-x-auto w-full">
                <div className="text-black dark:text-white" style={{width: 1060}}>
                    <div className="grid items-center px-3 w-full font-bold py-4 grid-cols-10 border-t border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50
                                    text-9px xl:text-xs">
                        <div>Label</div>
                        <div className="flex items-center">
                            <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                            <div className="ml-2">Label</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                            <div className="ml-2">Label</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                            <div className="ml-2">Label</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                            <div className="ml-2">Label</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                            <div className="ml-2">Label</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                            <div className="ml-2">Label</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                            <div className="ml-2">Label</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                            <div className="ml-2">Label</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                            <div className="ml-2">Label</div>
                        </div>
                    </div>
                    <div className="flex flex-col
                                    text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className="flex flex-col">
                                        <div className={`px-3 grid grid-cols-10 items-center w-full h-71px border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${index === 0 ? 'border-t' : ''}`}>
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 rounded-full bg-c_E8EBF1"></div>
                                                <div className="ml-2_5 font-semibold">{item.item1}</div>
                                            </div>
                                            <div className={`flex items-center justify-start font-medium ${item.item2 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item2 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item2 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item2)}%</div>
                                            </div>

                                            <div className={`flex items-center justify-start font-medium ${item.item3 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item3 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item3 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item3)}%</div>
                                            </div>
                                            
                                            <div className={`flex items-center justify-start font-medium ${item.item4 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item4 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item4 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item4)}%</div>
                                            </div>

                                            <div className={`flex items-center justify-start font-medium ${item.item5 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item5 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item5 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item5)}%</div>
                                            </div>

                                            <div className={`flex items-center justify-start font-medium ${item.item6 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item6 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item6 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item6)}%</div>
                                            </div>

                                            <div className={`flex items-center justify-start font-medium ${item.item7 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item7 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item7 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item7)}%</div>
                                            </div>
                                            <div className={`flex items-center justify-start font-medium ${item.item8 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item8 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item8 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item8)}%</div>
                                            </div>
                                            <div className={`flex items-center justify-start font-medium ${item.item9 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item9 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item9 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item9)}%</div>
                                            </div>
                                            <div className={`flex items-center justify-start font-medium ${item.item10 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item10 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item10 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item10)}%</div>
                                            </div>
                                        </div>

                                    </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-9_5 h-7 items-center justify-center
                            hidden sm:flex">
                <button className="px-3.5 h-full flex items-center justify-center rounded-full text-sm font-semibold transform hover:scale-110 ease-out duration-700 
                                text-c_1564C0 dark:text-dark_0fc9f2 bg-white dark:bg-transparent shadow-card dark:shadow-dark_card">
                    <span>View All</span>
                    <BsChevronRight className="ml-1 stroke-1"/>
                </button>
            </div>



            {/* mobile table */}
            <div className="block sm:hidden w-full mt-3">
                <div className="text-black dark:text-white">
                    <div className="grid items-center px-3 w-full font-bold py-4 grid-cols-7
                                    text-9px xl:text-xs">
                        <div className="flex items-center col-span-2">Label</div>
                        <div className="">Label</div>
                        <div className="flex-1">Label</div>
                        <div className="">Label</div>
                        <div className="">Label</div>
                        <div></div>
                    </div>
                    <div className="flex flex-col
                                    text-9px sm:text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className="flex flex-col">
                                        <div className={`px-3 grid grid-cols-7 items-center w-full h-12 border-b border-c_E8EBF1 dark:border-dark_0fc9f2 dark:border-opacity-50 ${enableExpand[index] ? 'bg-white dark:bg-gray-800' : ''}`}>
                                            <div className="flex items-center col-span-2 h-full">
                                                <div className="rounded-full w-4_5 h-4_5 bg-c_E8EBF1"></div>
                                                <span className="font-semibold flex items-center ml-2">{item.item1}</span>
                                            </div>
                                            
                                            <div className={`flex items-center justify-start font-medium ${item.item2 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item2 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item2 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item2)}%</div>
                                            </div>
                                            <div className={`flex items-center justify-start font-medium ${item.item3 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item3 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item3 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item3)}%</div>
                                            </div>
                                            <div className={`flex items-center justify-start font-medium ${item.item4 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item4 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item4 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item4)}%</div>
                                            </div>
                                            <div className={`flex items-center justify-start font-medium ${item.item5 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                <FaCaretDown className={`${item.item5 > 0 ? 'hidden' : 'block'}`}/>
                                                <FaCaretUp className={`${item.item5 > 0 ? 'block' : 'hidden'}`}/>
                                                <div>{Math.abs(item.item5)}%</div>
                                            </div>

                                            <div className="flex items-center justify-center">
                                                <div className={`w-4 h-4 rounded-full flex flex-col ${enableExpand[index] ? 'bg-c_1564C0 dark:bg-dark_0fc9f2' : 'bg-white border border-c_1564C0'}
                                                                shadow-card dark:shadow-dark_card`}>
                                                    <div className="mx-auto my-auto cursor-pointer" 
                                                        onClick={() => {
                                                            const array_var = [...enableExpand]
                                                            array_var[index] = !enableExpand[index]
                                                            setEnableExpand(array_var)
                                                        }}>
                                                        <BsChevronExpand className={`${enableExpand[index] ? 'text-white' : 'text-c_1564C0 dark:text-dark_0fc9f2'}`}/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>


                                        <div className={`px-3 ${enableExpand[index] ? 'block': 'hidden'}
                                                        bg-white dark:bg-gray-800
                                                        text-9px`}>

                                            <div className="flex flex-col w-full">
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`flex items-center ml-auto font-semibold ${item.item10 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.item6 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.item6 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.item6)}%</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`ml-auto flex items-center font-semibold ${item.item7 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.item7 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.item7 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.item7)}%</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`ml-auto flex items-center font-semibold ${item.item8 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.item8 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.item8 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.item8)}%</div>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center h-9 border-b border-c_F2F2F2 dark:border-dark_0fc9f2 dark:border-opacity-50">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`ml-auto flex items-center justify-start font-medium ${item.item9 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.item9 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.item9 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.item9)}%</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center h-9">
                                                    <div className="text-c_6E7582 dark:text-white">Sample Text</div>
                                                    <div className={`ml-auto flex items-center justify-start font-medium ${item.item10 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>
                                                        <FaCaretDown className={`${item.item10 > 0 ? 'hidden' : 'block'}`}/>
                                                        <FaCaretUp className={`${item.item10 > 0 ? 'block' : 'hidden'}`}/>
                                                        <div>{Math.abs(item.item10)}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>

                <div className="w-full flex justify-center mt-5">
                    <button className="h-7 flex items-center justify-center px-4 text-10px font-semibold rounded-full
                                        text-c_1564C0 dark:text-dark_0fc9f2 shadow-card dark:shadow-dark_card">View All</button>
                </div>
            </div>
        </div>
    )
}

export default Component32