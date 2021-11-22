import {
    BsPeopleFill
} from '../../icon/IconImage'

const Component13 = () => {
    let item_li = [
        {title: 'Title 1', created_at: '10/31/2021', vote: 99568, detail: 'Quis nostrud exercitation ullamco laboris'},
        {title: 'Title 1', created_at: '10/31/2021', vote: 99568, detail: 'Quis nostrud exercitation ullamco laboris'},
        {title: 'Title 1', created_at: '10/31/2021', vote: 99568, detail: 'Quis nostrud exercitation ullamco laboris'},
        {title: 'Title 1', created_at: '10/31/2021', vote: 99568, detail: 'Quis nostrud exercitation ullamco laboris'},
    ]
    return (
        <div>
            <div className="font-semibold
                            text-black dark:text-white leading-normal
                            text-lg sm:text-22px">Heading Title</div>
            <div className="text-c_6E7582
                            text-10px sm:text-sm
                            mt-3 sm:mt-0">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</div>
            
            <div className="items-center flex-wrap gap-4
                            grid grid-cols-2 lg:flex                                        
                            mt-4 sm:mt-9">
                {item_li.map((item, index) => {
                    return (
                        <div key={`item_${index}`} 
                            className="flex flex-col rounded-lg max-w-346px
                                        bg-white dark:bg-transparent shadow-card dark:shadow-dark_card
                                        pb-4 sm:pb-7_5
                                        pt-3 sm:pt-5">
                            <div className="flex items-center
                                            px-3 sm:px-7">
                                <div className="text-black dark:text-white font-semibold
                                                text-10px sm:text-lg">{item.created_at}</div>
                                <div className="ml-auto flex items-center">
                                    <BsPeopleFill className="mr-1 text-c_6E7582 dark:text-dark_0fc9f2" />
                                    <div className="text-c_6E7582
                                                    text-10px sm:text-sm">{Number(item.vote).toLocaleString()} voted</div>
                                </div>
                            </div>
                            <div className="h-px w-full
                                            bg-c_E8EBF1 dark:bg-dark_0fc9f2
                                            mt-3 sm:mt-4_5
                                            mb-4 sm:mb-7"></div>
                            <div className="font-semibold text-black dark:text-white text-center
                                            text-xs sm:text-lg
                                            ">{item.title}</div>
                            <div className="mt-1 px-3 text-c_6E7582 text-center
                                            text-11px sm:text-sm">
                                {item.detail}
                            </div>
                            <div className="mt-4 sm:mt-7_5">
                                <button className="mx-auto flex items-center justify-center border rounded-full bg-transparent font-semibold
                                                    transform hover:scale-105 ease-out duration-700
                                                    border-c_1564C0 dark:border-dark_0fc9f2 text-c_1564C0 dark:text-dark_0fc9f2
                                                    h-5 sm:h-7_5
                                                    text-10px sm:text-sm
                                                    px-2 sm:px-4">Submit Estimate</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>)
}

export default Component13