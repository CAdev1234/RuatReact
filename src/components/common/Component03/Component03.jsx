import { generateUUID } from '../../../utils/SimpleFun'
import {
    BsPieChartFill,
    FaCaretUp
} from '../../icon/IconImage'
import ToggleSwitch from '../../ui/ToggleSwitch/ToggleSwitch'

const Component03 = () => {
    let toggle_id = generateUUID()
    return (
        <>
            <div className="rounded-md pt-3 px-3.5
                            bg-white text-black dark:bg-gray-900 dark:text-white
                            shadow-card dark:shadow-dark_card
                            w-full sm:w-125
                            pb-3 sm:pb-8">
                <div className="flex items-center">
                    <div>
                        <BsPieChartFill className="text-base leading-tight" />
                    </div>
                    <div className="text-sm font-semibold ml-2">Portfolio</div>
                    <div className="ml-auto">
                        <ToggleSwitch label="Hide" label_css="text-c_6E7582 text-xs leading-normal font-semibold mr-2" label_id={toggle_id}/>
                    </div>

                </div>
                <div className="mt-4 text-xs leading-normal font-semibold text-c_6E7582 text-center">Total Portfolio</div>
                <div className="flex items-center justify-center text-c_64A879 font-semibold">
                    <div>
                        <FaCaretUp className="text-c_64A879 text-sm sm:text-base leading-tight"/>
                    </div>
                    <div className="text-sm sm:text-base leading-tight">$35,650</div>
                    <div className="ml-1">
                        <FaCaretUp className="text-c_64A879 text-9px sm:text-sm leading-tight"/>
                    </div>
                    <div className="text-9px sm:text-sm leading-tight">1.2%</div>
                </div>
            </div>
        </>
    )
}

export default Component03