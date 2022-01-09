import Component1 from '../components/common/News/Component1/Component1';
import Component3 from '../components/common/News/Component3/Component3';
import Component5 from '../components/common/News/Component5/Component5';

const Task5 = () => {
    return (
        <div>
            {/* Component 1 */}
            <div className="mt-12_5
                            px-3 sm:px-8">
                <div className="mb-5 text-3xl font-bold text-black dark:text-white">Component 1</div>
                <Component1 />
            </div>

            {/* Component 3 */}
            <div className="mt-12_5
                            px-3 sm:px-8">
                <div className="mb-5 text-3xl font-bold text-black dark:text-white">Component 3</div>
                <Component3 />
            </div>

            {/* Component 3 */}
            <div className="mt-12_5
                            px-3 sm:px-8">
                <div className="mb-5 text-3xl font-bold text-black dark:text-white">Component 5</div>
                <Component5 />
            </div>
        </div>
    )
}

export default Task5