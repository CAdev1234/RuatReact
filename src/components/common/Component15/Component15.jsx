import {
    IoTrendingUpSharp,
    IoTrendingDownSharp,
    MdQuestionAnswer,
    CoinSearchSvg
} from '../../icon/IconImage'

const Component15 = () => {
    return (
        <div>
            <div className="grid gap-6
                            grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col rounded-lg cursor-pointer transform hover:scale-105 ease-out duration-700
                                bg-white dark:bg-gray-900 shadow-card dark:shadow-dark_card">
                    <img src="https://miro.medium.com/max/2000/1*vNo4etpETf1UOo5LjADylw.png" alt="" className="rounded-t-lg"/>
                    <div className="px-5 py-3">
                        <div className="font-bold text-xl text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt.</div>
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
                            <img src={CoinSearchSvg} className="ml-auto" alt=""></img>
                        </div>    
                    </div>
                </div>

                <div className="flex flex-col">
                {[0, 1, 2].map((item, index) => {
                    return <div className={`flex flex-col p-3 rounded-lg cursor-pointer transform hover:scale-105 ease-out duration-700
                                            ${index !== 2 ? 'mb-3 lg:mb-auto' : ''}
                                            shadow-card dark:shadow-dark_card
                                            bg-white dark:bg-transparent`} 
                                key={`heading_card_${index}`}>
                                <div className="flex">
                                    <div className="rounded-full w-14_5 h-14_5 bg-c_E8EBF1"></div>
                                    <div className="ml-4 flex-1 font-semibold leading-normal
                                                    text-black dark:text-white
                                                    text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt amet, consectetur adipi scing elit.</div>
                                </div>
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
                                    <img src={CoinSearchSvg} className="ml-auto" alt=""></img>
                                </div>
                            </div>
                })}
                </div>
            </div>


            <div className="mt-20 relative rounded-lg w-full h-32 mx-auto max-w-screen-md
                            bg-white dark:bg-transparent shadow-card dark:shadow-dark_card">
                <div className="absolute -top-3 left-0 flex items-center w-full">
                    <div className="h-6_5 px-4 mx-auto flex justify-center items-center font-semibold text-xs rounded-full border
                                    text-c_1564C0 dark:text-dark_0fc9f2 border-c_1564C0 dark:border-dark_0fc9f2 bg-white dark:bg-gray-900">- Advertisement -</div>
                </div>
            </div>
        </div>
    )
}

export default Component15