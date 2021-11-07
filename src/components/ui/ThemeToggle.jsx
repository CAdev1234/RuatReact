import {
    BsSunFill,
    BsFillMoonStarsFill,
} from '../icon/IconImage'
const ThemeToggle = () => {
    return (
        <>
            <div className="w-12 h-6 bg-c_E8EBF1 rounded-l-full rounded-r-full relative cursor-pointer">
                <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-card">
                    <BsSunFill className="text-c_2A7BD9"/>
                </div>
                <div className="absolute top-0 right-1 flex flex-col h-full">
                    <div className="my-auto">
                        <BsFillMoonStarsFill className="text-c_BCC3CF" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThemeToggle