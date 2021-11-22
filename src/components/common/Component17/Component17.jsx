import {
    BsChevronRight,
    IoTrendingUpSharp,
    IoTrendingDownSharp,
    MdQuestionAnswer,
    CoinSearchSvg
} from '../../icon/IconImage'

const Component17 = () => {

    let heading_card_li = [
        { tradeUp: 386, tradeDown: 28, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { tradeUp: 560, tradeDown: 56, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { tradeUp: 490, tradeDown: 32, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
    ]

    return (
        <div>
            <div className="flex items-center text-c_6E7582 text-xs">
                <div>Menu 3</div>
                <BsChevronRight className="text-8px stroke-1 mx-2" />
                <div>Sub Menu 01</div>
                <BsChevronRight className="text-8px stroke-1 mx-2" />
                <div className="font-semibold text-black dark:text-white">Title 01</div>
            </div>
            

            <div className="mt-6 flex">
                <div className="flex flex-col flex-1">
                    <div className="">
                        <div className="font-semibold text-black dark:text-white
                                        text-lg sm:text-22px">Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt.</div>
                        <img className="mt-5 w-full rounded-lg" src="https://www.constructionspecifier.com/wp-content/uploads/2015/08/bigstock-Modern-business-buildings-45559522.jpg" alt="" />
                        <div className="mt-4 flex items-center">
                            <div className="flex items-center text-c_64A879 text-sm leading-normal">
                                <IoTrendingUpSharp />
                                <div className="ml-1.5">386</div>
                            </div>
                            <div className="ml-4 flex items-center text-c_C85151 text-sm leading-normal">
                                <IoTrendingDownSharp />
                                <div className="ml-1.5">25</div>
                            </div>
                            <div className="ml-4 flex items-center text-c_7EAFE8 text-sm leading-normal">
                                <MdQuestionAnswer />
                                <div className="ml-1.5">06</div>
                            </div>
                            <img src={CoinSearchSvg} className="ml-auto"></img>
                        </div>   
                    </div>

                    <div className="mt-6 font-semibold
                                    text-black dark:text-white
                                    text-xs sm:text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Sed do eiusmod tempor incididunt ut.</div>
                    
                </div>
                <div className="ml-7 rounded-lg max-w-346px">
                    <div className="w-full flex-col px-4_5 pt-10 pb-6 rounded-lg
                                    bg-white dark:bg-gray-900 shadow-card dark:shadow-dark_card
                                    hidden xl:flex">
                        <div className="text-c_6E7582 text-17px leading-normal font-semibold">Sed do eiusmod tempor incididun.</div>
                        <div className="font-semibold text-22px leading-normal text-black dark:text-white">Heading</div>
                        <div className="mt-2_5 text-c_6E7582 text-sm leading-snug font-medium">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis</div>
                        <input type="text" 
                            className="mt-5 h-9_5 px-3 border rounded-full bg-transparent text-xs leading-normal
                                    border-c_E8EBF1 dark:border-dark_0fc9f2
                                    placeholder-c_BCC3CF
                                    text-black dark:text-dark_0fc9f2"
                            placeholder="Enter your email address"/>
                        <div className="mt-4_5 flex justify-center">
                            <div className="h-7_5 px-7 flex items-center justify-center text-white text-xs leading-normal rounded-md
                                                cursor-pointer transform hover:scale-105 ease-out duration-700
                                                bg-c_1564C0 dark:bg-dark_0fc9f2">Subscribe</div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-9_5">
                        <div className="font-semibold text-22px leading-loose
                                        text-black dark:text-white">Featured</div>
                        <div className="flex flex-col gap-y-3">
                            {heading_card_li.map((item, index) => {
                                return <div className="flex flex-col p-3 rounded-lg cursor-pointer transform hover:scale-105 ease-out duration-700
                                                        shadow-card dark:shadow-dark_card
                                                        bg-white dark:bg-transparent" 
                                            key={`heading_card_${index}`}>
                                            <div className="flex">
                                                <div className="rounded-full w-14_5 h-14_5 bg-c_E8EBF1"></div>
                                                <div className="ml-4 flex-1 font-semibold leading-normal
                                                                text-black dark:text-white
                                                                text-xs sm:text-sm">{item.detail}</div>
                                            </div>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex items-center text-c_64A879 text-sm leading-normal">
                                                    <IoTrendingUpSharp />
                                                    <div className="ml-1.5">{item.tradeUp}</div>
                                                </div>
                                                <div className="ml-4 flex items-center text-c_C85151 text-sm leading-normal">
                                                    <IoTrendingDownSharp />
                                                    <div className="ml-1.5">{item.tradeDown}</div>
                                                </div>
                                                <div className="ml-4 flex items-center text-c_7EAFE8 text-sm leading-normal">
                                                    <MdQuestionAnswer />
                                                    <div className="ml-1.5">{item.question}</div>
                                                </div>
                                                <img src={CoinSearchSvg} className="ml-auto"></img>
                                            </div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component17