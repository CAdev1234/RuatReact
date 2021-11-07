import {
    BsPieChartFill,
    FaCaretDown
} from '../icon/IconImage'

const PortfolioCard = () => {
    return (
        <>
            <div className="bg-white rounded-md shadow-card pt-3 pb-8 px-3.5 w-125">
                <div className="flex items-center">
                    <div>
                        <BsPieChartFill className="text-xs" />
                    </div>
                    <div className="text-xs font-semibold text-black ml-2">Portfolio</div>
                    <div className="text-c_6E7582 text-xs ml-auto">Hide</div>

                </div>
                <div className="mt-4 text-xs font-semibold text-c_6E7582 text-center">Total Portfolio</div>
                <div className="flex items-center justify-center text-c_64A879 font-semibold">
                    <div>
                        <FaCaretDown className="text-c_64A879"/>
                    </div>
                    <div className="text-sm">$35,650</div>
                    <div className="ml-1">
                        <FaCaretDown className="text-c_64A879"/>
                    </div>
                    <div className="text-xs">1.2%</div>
                </div>
            </div>
        </>
    )
}

export default PortfolioCard