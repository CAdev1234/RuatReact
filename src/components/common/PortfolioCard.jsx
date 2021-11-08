import { generateUUID } from '../../utils/SimpleFun'
import {
    BsPieChartFill,
    FaCaretDown
} from '../icon/IconImage'
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch'

const PortfolioCard = () => {
    let toggle_id = generateUUID()
    return (
        <>
            <div className="rounded-md pt-3 pb-8 px-3.5
                            bg-white text-black dark:bg-gray-900 dark:text-white
                            shadow-card dark:shadow-dark_card
                            w-full sm:w-125">
                <div className="flex items-center">
                    <div>
                        <BsPieChartFill className="text-sm" />
                    </div>
                    <div className="text-sm font-semibold ml-2">Portfolio</div>
                    <div className="ml-auto">
                        <ToggleSwitch label="Hide" label_css="text-c_6E7582 text-xs font-semibold mr-2" label_id={toggle_id}/>
                    </div>

                </div>
                <div className="mt-4 text-xs font-semibold text-c_6E7582 text-center">Total Portfolio</div>
                <div className="flex items-center justify-center text-c_64A879 font-semibold">
                    <div>
                        <FaCaretDown className="text-c_64A879"/>
                    </div>
                    <div className="text-base">$35,650</div>
                    <div className="ml-1">
                        <FaCaretDown className="text-c_64A879"/>
                    </div>
                    <div className="text-sm">1.2%</div>
                </div>
            </div>
        </>
    )
}

export default PortfolioCard