import {
    BsChevronRight,
    BsDownload,
    FaCaretDown
} from '../icon/IconImage'

const CoinDetail = () =>  {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center text-xs text-c_6E7582 font-semibold">
                    <div className="mr-1">Menu2</div>
                    <BsChevronRight className="mr-1"/>
                    <div className="mr-1">Sub Menu 01</div>
                    <BsChevronRight className="mr-1"/>
                    <div className="text-black">Cardano</div>
                </div>
                <div className="mt-8 bg-white rounded-md py-7_5">
                    <div className="flex px-7_5">
                        <div className="rounded-full w-11_5 h-11_5 bg-c_E8EBF1"></div>
                        <div className="flex flex-col ml-3">
                            <div className="flex items-center">
                                <div className="text-black font-bold text-3xl">Cardano</div>
                                <div className="ml-3 border border-c_1564C0 text-c_1564C0 font-semibold w-12 h-6 flex justify-center items-center rounded-md">ADA</div>
                            </div>
                            <div className="flex items-center mt-1 text-sm font-semibold text-c_6E7582">
                                <div>Rank #1</div>
                                <div className="ml-6">Coin</div>
                                <div className="ml-6">2,324,134 watching</div>
                            </div>
                        </div>
                        <div className="flex flex-col text-xs font-semibold mx-auto">
                            <div className="text-c_6E7582">Volume/MarketCap</div>
                            <div className="text-c_64A879 text-sm">0.03692</div>
                        </div>
                        <div className="flex flex-col text-xs font-semibold mx-auto">
                            <div className="text-c_6E7582">Market Dominance</div>
                            <div className="text-c_C85151 text-sm">46.74%</div>
                        </div>
                        <div className="flex flex-col text-xs font-semibold mx-auto">
                            <div className="text-c_6E7582">Bitcoin Price(BTC)</div>
                            <div className="text-black font-bold text-3xl my-1">$1.23</div>
                            <div className="flex items-center text-sm">
                                <div className="text-c_6E7582 font-semibold">0.005ETH</div>
                                <div className="ml-1">
                                    <FaCaretDown className="text-c_C85151" />
                                </div>
                                <div className="text-c_C85151">4.29%</div>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <BsDownload />
                        </div>
                    </div>

                    <div className="mt-8 w-full h-0.5 bg-c_E8EBF1"></div>

                    <div className="px-7_5 grid grid-cols-6 gap-y-6 my-4">
                        {[0,1,2,3,4,5,6,7,8,9,10,11,12,3].map((item, index) => {
                            return <div className="flex items-center text-xs" key={`item_${index}`}>
                                        <div className="w-2 h-7_5 bg-c_E8EBF1 rounded-md"></div>
                                        <div className="ml-3 flex flex-col font-semibold">
                                            <div className="text-c_6E7582">1 Hour</div>
                                            <div className="flex items-ce nter">
                                                <div className="text-c_C85151"><FaCaretDown /></div>
                                                <div className="text-c_C85151 ml-1">27.03%</div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>

                    <div className="w-full h-0.5 bg-c_E8EBF1"></div>

                    <div className="flex items-center">
                        <div className="w-36 h-36 rounded-full bg-c_7EAFE8 ml-auto"></div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                {[0,1,2].map((item, index) => {
                                    return <div key={`item_${index}`} className="flex">
                                                <div className="w-2 h-7_5 bg-c_7EAFE8 rounded-md"></div>
                                                <div className="ml-2_5 flex flex-col font-semibold text-xs">
                                                    <div className="text-c_6E7582">Max Supply</div>
                                                    <div className="text-black">45,000,000,000</div>
                                                </div>
                                            </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinDetail