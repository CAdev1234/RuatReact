import {
    WarnImg,
    BsFillShareFill,
    IoTrendingUpSharp,
    IoTrendingDownSharp,
    MdQuestionAnswer,
    BullImg,
    BearImg,
    CoinSearchSvg

} from '../icon/IconImage'

const NewsCard = () => {
    return (
        <>
            <div className="flex flex-col rounded-md text-black dark:text-white 
                            shadow-card dark:shadow-dark_card bg-white dark:bg-transparent">
                <div className="px-7 py-4">
                    <div className="flex items-center text-sm">
                        <span className="font-bold text-c_1564C0 dark:text-dark_0fc9f2">OPTIONS</span>
                        <div className="bg-c_E8EBF1 h-4_5 w-px mx-2.5"></div>
                        <div className="font-semibold text-c_6E7582">2 Min ago</div>
                        <div className="flex items-center ml-auto font-medium cursor-pointer">
                            <img src={WarnImg} alt='warn img'></img>
                            <span className='ml-2'>Report</span>
                        </div>
                        <div className="flex items-center ml-6 font-medium cursor-pointer">
                            <BsFillShareFill className='text-c_1564C0 dark:text-dark_0fc9f2' />
                            <span className='ml-2'>Share</span>
                        </div>
                    </div>
                    <div className='mt-2.5 text-xl font-semibold cursor-pointer'>What Prevents Crypto Payments from Going the Mainstream?</div>
                    <div className='w-full flex flex-col mt-3 mb-7_5'>
                        <img className='rounded-lg mx-auto max-h-500px shadow-card dark:shadow-dark_card' src="https://images.unsplash.com/photo-1611179458969-04ba15f34c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                        {[0, 1, 2, 3].map((item, index) => {
                            return <div key={`item_${index}`}>
                                <div className='flex flex-col mt-5'>
                                    <label htmlFor="" className='text-sm font-semibold'>Lorem ipsum dolor sit amet</label>
                                    <div className='flex items-center w-full'>
                                        <div className='relative h-1.5 flex-1 bg-c_F2F2F2 rounded-md'>
                                            <div className='absolute top-0 left-0 h-1.5 rounded-md bg-c_7EAFE8 dark:bg-dark_0fc9f2' style={{width: '88%'}}></div>
                                        </div>
                                        <div className='flex items-center ml-4_5'>
                                            <span className='text-xs font-medium'>98%</span>
                                            <div className='bg-c_BCC3CF w-px h-2.5 mx-1'></div>
                                            <span className='text-xs font-medium'>391 Votes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                        <div className='flex flex-col mt-7'>
                            <button className='mx-auto flex items-center h-7_5 px-5 rounded-full text-white text-sm font-medium
                                                bg-c_1564C0 dark:bg-dark_0fc9f2
                                                transform hover:scale-105 ease-out duration-700'>Submit Your Option</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-px bg-c_E8EBF1 dark:bg-dark_0fc9f2'></div>
                <div className='px-7 py-4 flex items-center text-sm'>
                    <div className='flex items-center mr-4'>
                        <IoTrendingUpSharp className=' text-c_64A879 stroke-1' />
                        <span className='ml-2 text-c_6E7582 font-medium'>386</span>
                    </div>
                    <div className='flex items-center mr-4'>
                        <IoTrendingDownSharp className='text-c_C85151 stroke-0.5' />
                        <span className='ml-2 text-c_6E7582 font-medium'>28</span>
                    </div>
                    <div className='flex items-center mr-4'>
                        <MdQuestionAnswer className='text-c_7EAFE8' />
                        <span className='ml-2 text-c_6E7582 font-medium'>06</span>
                    </div>
                    <div className='flex items-center mr-4'>
                        <img className='text-c_7EAFE8' src={BullImg} alt='' />
                        <span className='ml-2 text-c_6E7582 font-medium'>234</span>
                    </div>
                    <div className='flex items-center'>
                        <img className='text-c_C85151' src={BearImg} alt='' />
                        <span className='ml-2 text-c_6E7582 font-medium'>28</span>
                    </div>
                    
                    <img className='ml-auto cursor-pointer' src={CoinSearchSvg} alt="" />
                </div>
            </div>
        </>
    )
}

export default NewsCard