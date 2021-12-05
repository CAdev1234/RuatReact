import {
    TrendingSvg,
    FaCaretDown,
    FaCaretUp
} from '../../icon/IconImage'

const Component04 = () => {
    let items = [
        {title: 'Cardano', percent: -4.46, label: 'ADA'},
        {title: 'Arata', percent: -8.76, label: 'ARATA'},
        {title: 'BabySpaceFloki', percent: 42.43, label: 'BSF'},
        {title: 'Arata', percent: -8.76, label: 'ARATA'},
        {title: 'BabySpaceFloki', percent: 42.43, label: 'BSF'},
    ]
    return (
        <>
            <div className="rounded-md pt-4 pb-5
                            px-3
                            w-full sm:w-90
                            bg-white text-black dark:bg-gray-900 dark:text-white
                            shadow-card dark:shadow-dark_card">
                <div className="flex items-center mb-1">
                    <img src={TrendingSvg} className="h-5" alt=""></img>
                    <div className="ml-2 font-semibold
                                    text-base sm:text-lg">Trending</div>
                    <button className="ml-auto font-semibold
                                    text-c_1564C0 dark:text-dark_0fc9f2
                                    text-xs sm:text-sm">View All</button>
                </div>
                <div className="grid
                                gap-x-4 sm:gap-x-0
                                grid-cols-2 sm:grid-cols-1">
                    {items.map((item, index) => {
                        return <div className="flex flex-col mt-4_5" key={`item_${index}`} >
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full bg-c_E8EBF1"></div>
                                        <div className="text_overflow_one_line ml-2 font-semibold
                                                        text-xs sm:text-sm">{item.title}</div>
                                        <div className="ml-auto">
                                            <FaCaretDown className={`text-c_C85151 ${item.percent < 0 ? 'block' : 'hidden'}`}/>
                                            <FaCaretUp className={`text-c_64A879 ${item.percent < 0 ? 'hidden' : 'block'}`} />
                                        </div>
                                        <div className={`ml-1 text-9px sm:text-xs leading-normal ${item.percent < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{Math.abs(item.percent)}%</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full bg-transparent"></div>
                                        <div className="ml-2 text-c_6E7582 font-medium
                                                        text-9px sm:text-xs leading-normal">{item.label}</div>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
        </>
    )
}


export default Component04