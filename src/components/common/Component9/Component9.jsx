import {
    CoinSearchSvg, 
    BsChevronRight,
    BsChevronDown,
    MdQuestionAnswer,
    IoTrendingDownSharp,
    IoTrendingUpSharp
} from '../../icon/IconImage'

const Component9 = () => {
    let heading_card_li = [
        { tradeUp: 386, tradeDown: 28, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 560, tradeDown: 56, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 490, tradeDown: 32, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 692, tradeDown: 56, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 453, tradeDown: 67, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 265, tradeDown: 73, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 386, tradeDown: 28, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 560, tradeDown: 56, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        { tradeUp: 490, tradeDown: 32, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.' },
        
    ]
    return (
        <div>
            <div className="flex items-center">
                <div className="font-semibold text-22px text-black dark:text-white">Heading Title</div>
                <div className="ml-auto text-c_1564C0 text-sm leading-normal font-semibold">View All</div>
            </div>
            <div className="mt-9 grid gap-x-6 gap-y-6
                            grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {heading_card_li.map((item, index) => {
                    return <div className="flex flex-col p-3 rounded-lg cursor-pointer transform hover:scale-105 ease-out duration-700
                                            shadow-card dark:shadow-dark_card
                                            bg-white dark:bg-transparent" 
                                key={`heading_card_${index}`}>
                                <div className="flex">
                                    <div className="rounded-full w-14_5 h-14_5 bg-c_E8EBF1"></div>
                                    <div className="ml-4 flex-1 font-medium
                                                    text-black dark:text-white
                                                    text-xs sm:text-sm">{item.detail}</div>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <div className="flex items-center text-c_64A879 text-sm leading-normal">
                                        <IoTrendingUpSharp />
                                        <div className="ml-1.5 text-sm">{item.tradeUp}</div>
                                    </div>
                                    <div className="ml-4 flex items-center text-c_C85151 text-sm leading-normal">
                                        <IoTrendingDownSharp />
                                        <div className="ml-1.5 text-sm">{item.tradeDown}</div>
                                    </div>
                                    <div className="ml-4 flex items-center text-c_7EAFE8 text-sm leading-normal">
                                        <MdQuestionAnswer />
                                        <div className="ml-1.5 text-sm">{item.question}</div>
                                    </div>
                                    <img src={CoinSearchSvg} className="ml-auto"></img>
                                </div>
                            </div>
                    })}
            </div>
        </div>
    )
}


export default Component9