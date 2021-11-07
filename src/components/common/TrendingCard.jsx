import {
    TrendingSvg,
    FaCaretDown,
    FaCaretUp
} from '../icon/IconImage'

const TrendingCard = () => {
    let items = [
        {title: 'Cardano', percent: -4.46, label: 'ADA'},
        {title: 'Arata', percent: -8.76, label: 'ARATA'},
        {title: 'BabySpaceFloki', percent: 42.43, label: 'BSF'},
        {title: 'Arata', percent: -8.76, label: 'ARATA'},
        {title: 'BabySpaceFloki', percent: 42.43, label: 'BSF'},
    ]
    return (
        <>
            <div className="bg-white shadow-card w-90 rounded-md px-4 pt-4 pb-5">
                <div className="flex items-center">
                    <img src={TrendingSvg} className="h-5"></img>
                    <div className="ml-2 text-black font-semibold">Trending</div>
                    <button className="ml-auto text-c_1564C0 text-xs font-semibold">View All</button>
                </div>
                <div>
                    {items.map((item, index) => {
                        return <div className="flex flex-col mt-4" key={`item_${index}`} >
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full bg-c_E8EBF1"></div>
                                        <div className="ml-2 text-black font-semibold text-sm">{item.title}</div>
                                        <div className="ml-auto">
                                            <FaCaretDown className={`text-c_C85151 ${item.percent < 0 ? 'block' : 'hidden'}`}/>
                                            <FaCaretUp className={`text-c_64A879 ${item.percent < 0 ? 'hidden' : 'block'}`} />
                                        </div>
                                        <div className={`ml-1 text-xs ${item.percent < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{Math.abs(item.percent)}%</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full bg-transparent"></div>
                                        <div className="ml-2 text-c_6E7582 font-medium text-xs">{item.label}</div>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
        </>
    )
}


export default TrendingCard