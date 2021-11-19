import {
    LeftImg
} from '../../icon/IconImage'

const Component16 = () => {
    return (
        <div>
            <div className="grid gap-x-20 gap-y-10
                            grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col">
                    <div className="my-auto">
                    <div className="font-semibold text-22px text-c_6E7582">Tempor incidid unt ut labore et dolore.</div>
                    <div className="text-4xl font-semibold leading-normal text-black dark:text-white">Unt ut labore et dolore</div>
                    <div className="text-sm text-c_6E7582 max-w-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                    <div className="mt-5 flex items-center h-9_5">
                        <input type="text" placeholder="Enter your email address"
                                className="h-full flex-1 rounded-lg border border-c_E8EBF1 placeholder-c_BCC3CF text-sm flex items-center px-4" />
                        <button className="ml-3 h-full flex items-center justify-center px-4 rounded-lg text-white text-sm
                                            bg-c_1564C0 dark:bg-dark_0fc9f2
                                            transform hover:scale-105 ease-out duration-700">Subscribe now</button>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src={LeftImg} alt="" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default Component16