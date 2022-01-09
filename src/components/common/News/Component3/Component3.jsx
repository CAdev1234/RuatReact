import {
    BsChevronRight,
    WarnImg,
    BsFillShareFill,
    IoTrendingUpSharp,
    IoTrendingDownSharp,
    MdQuestionAnswer,
    BullImg,
    BearImg,
    CoinSearchSvg
} from '../../../icon/IconImage'
import Component19 from '../../Component19/Component19'

const Component3 = () => {
    let heading_card_li = [
        { tradeUp: 386, tradeDown: 28, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { tradeUp: 560, tradeDown: 56, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { tradeUp: 490, tradeDown: 32, question: 12, detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
    ]
    return (
        <div className="text-black dark:text-white text-sm font-medium flex flex-col">
            <div className="flex items-center mb-7_5">
                <span className='text-c_6E7582'>Altsome News</span>
                <BsChevronRight className='ml-1 text-10px stroke-1' />
                <span className='text-c_6E7582 ml-1'>Category 2</span>
                <BsChevronRight className='ml-1 text-10px stroke-1' />
                <span className='ml-1'>Sub Category 3</span>
            </div>
            <div className='flex'>
                <div className='flex flex-1 flex-col'>
                    <div className="flex flex-col rounded-md 
                                    shadow-card dark:shadow-dark_card bg-white dark:bg-transparent">
                        <div className="py-4">
                            <div className='flex flex-col px-5 '>
                                <div className="flex items-center">
                                    <span className="font-bold text-c_1564C0 dark:text-dark_0fc9f2">OPTIONS</span>
                                    <div className="bg-c_E8EBF1 h-4_5 w-px mx-2.5"></div>
                                    <div className="font-semibold text-c_6E7582">2 Min ago</div>
                                    <div className="flex items-center ml-auto">
                                        <img src={WarnImg} alt='warn img'></img>
                                        <span className='ml-2'>Report</span>
                                    </div>
                                    <div className="flex items-center ml-6">
                                        <BsFillShareFill className='text-c_1564C0 dark:text-dark_0fc9f2' />
                                        <span className='ml-2'>Share</span>
                                    </div>
                                </div>
                                <div className='mt-2.5 text-xl font-semibold cursor-pointer'>What Prevents Crypto Payments from Going the Mainstream?</div>
                                <div className='text-c_6E7582 mt-3'>11/22/2021</div>
                            </div>
                            <div className='w-full h-px my-4 bg-c_E8EBF1 dark:bg-dark_0fc9f2'></div>
                            <div className='px-5 w-full flex flex-col mt-3 mb-7_5 leading-14_16'>
                                <img className='rounded-lg mx-auto w-full shadow-card dark:shadow-dark_card' src="https://images.unsplash.com/photo-1611179458969-04ba15f34c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                                <div className='text-xl font-semibold mt-7'>Overview</div>
                                <p className=''>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    <br/><br/>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.
                                    <br/><br/>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. 
                                    <br/><br/>
                                    Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" 
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    <br/><br/>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. 
                                    <br/><br/>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. 
                                    <br/><br/>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. 
                                    <br/><br/>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. 
                                    <br/><br/>
                                    Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut laut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dbore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" 
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    <br/><br/>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. 
                                </p>
                                <div className='flex items-center mt-3'>
                                    <span className='w-30'>Source</span>
                                    <span className='underline cursor-pointer text-c_1564C0 dark:text-dark_0fc9f2'>:Cointelegraph</span>
                                </div>
                                <div className='flex items-center mt-3'>
                                    <span className='w-30'>Imagesource</span>
                                    <span className='underline cursor-pointer text-c_1564C0 dark:text-dark_0fc9f2'>:Cointelegraph</span>
                                </div>
                                <div className='flex items-start mt-3'>
                                    <span className='w-30'>Note</span>
                                    <span className='w-72'>: All copyrights and trademarks used in this article belongs to the respective media outlet.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-7_5 flex items-center justify-center gap-x-2 w-full'>
                        <div className='flex items-center justify-center h-9_5 w-25 rounded-md bg-white dark:bg-transparent shadow-card dark:shadow-dark_card'>
                            <IoTrendingUpSharp className=' text-c_64A879 stroke-1' />
                            <span className='ml-2 text-c_6E7582'>386</span>
                        </div>
                        <div className='flex items-center justify-center h-9_5 w-25 rounded-md bg-white dark:bg-transparent shadow-card dark:shadow-dark_card'>
                            <IoTrendingDownSharp className='text-c_C85151 stroke-0.5' />
                            <span className='ml-2 text-c_6E7582'>28</span>
                        </div>
                        <div className='flex items-center justify-center h-9_5 w-25 rounded-md bg-white dark:bg-transparent shadow-card dark:shadow-dark_card'>
                            <MdQuestionAnswer className='text-c_7EAFE8' />
                            <span className='ml-2 text-c_6E7582'>06</span>
                        </div>
                        <div className='flex items-center justify-center h-9_5 w-25 rounded-md bg-white dark:bg-transparent shadow-card dark:shadow-dark_card'>
                            <img className='text-c_7EAFE8' src={BullImg} alt='' />
                            <span className='ml-2 text-c_6E7582'>234</span>
                        </div>
                        <div className='flex items-center justify-center h-9_5 w-25 rounded-md bg-white dark:bg-transparent shadow-card dark:shadow-dark_card'>
                            <img className='text-c_C85151' src={BearImg} alt='' />
                            <span className='ml-2 text-c_6E7582'>28</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Component19 />
                    </div>
                </div>
                <div className="ml-7 max-w-346px rounded-lg flex-col
                                hidden xl:flex">
                    <div className="font-semibold text-22px leading-loose">Featured</div>
                    <div className="flex flex-col gap-y-3">
                        {heading_card_li.map((item, index) => {
                            return <div className="flex flex-col p-3 rounded-lg cursor-pointer transform hover:scale-105 ease-out duration-700
                                                    shadow-card dark:shadow-dark_card
                                                    bg-white dark:bg-transparent" 
                                        key={`heading_card_${index}`}>
                                        <div className="flex font-semibold leading-normal
                                                        text-black dark:text-white
                                                        text-xs sm:text-sm">{item.detail}</div>
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
                                            <img src={CoinSearchSvg} className="ml-auto" alt=""></img>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component3