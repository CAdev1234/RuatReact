import Component10 from "../components/common/Component10/Component10"
import Component11 from "../components/common/Component11/Component11"
import Component12 from "../components/common/Component12/Component12"
import Component9 from "../components/common/Component9/Component9"

const Task3 = () => {
    return (
        <div>
            {/* Component 9 */}
            <div className="mt-12_5
                            px-3 sm:px-8">
                <div className="mb-5 text-3xl font-bold text-black dark:text-white">Component 9</div>
                <Component9 />
            </div>

            {/* Component 10 */}
            <div className="mt-12_5
                            px-3 sm:px-8">
                <div className="mb-5 text-3xl font-bold text-black dark:text-white">Component 10</div>
                <Component10 />
            </div>
            
            {/* Component 11 */}
            <div className="mt-12_5
                            px-3 sm:px-8">
                <div className="mb-5 text-3xl font-bold text-black dark:text-white">Component 11</div>
                <Component11 />
            </div>

            {/* Component 12 */}
            <div className="mt-12_5
                            px-3 sm:px-8">
                <div className="mb-5 text-3xl font-bold text-black dark:text-white">Component 12</div>
                <Component12 />
            </div>
        </div>
    )
}

export default Task3