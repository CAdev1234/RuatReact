import {
    BsFullscreen,
    BsDownload
} from '../../icon/IconImage'

import BarChart from '../BarChart'


const Component12 = () => {
    
    return (
        <div>
            <div className="flex items-center">
                <div className="font-semibold text-black dark:text-white
                                text-lg sm:text-22px">Heading Title</div>
                <div className="flex items-center ml-auto">
                    <BsFullscreen className="stroke-1"/>
                    <BsDownload className="ml-5 stroke-1"/>
                </div>
            </div>
            <div className="mt-8">
                <BarChart />
            </div>
            <div className="h-px bg-c_F2F2F2 w-full"></div>
        </div>
    )
}

export default Component12