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
                    <div className="font-semibold text-c_6E7582
                                    text-lg sm:text-22px">Tempor incidid unt ut labore et dolore.</div>
                    <div className="font-semibold leading-normal text-black dark:text-white
                                    text-2xl sm:text-4xl">Unt ut labore et dolore</div>
                    <div className="text-c_6E7582 max-w-sm
                                    text-10px sm:text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                    <div className="mt-5 flex items-center
                                    h-7_5 sm:h-9_5">
                        <input type="text" placeholder="Enter your email address"
                                className="h-full flex-1 rounded-lg border placeholder-c_BCC3CF flex items-center px-4
                                            bg-white dark:bg-transparent border-c_E8EBF1 dark:border-dark_0fc9f2
                                            text-10px sm:text-sm" />
                        <button className="ml-3 h-full flex items-center justify-center px-4 rounded-lg text-white
                                            bg-c_1564C0 dark:bg-dark_0fc9f2
                                            text-10px sm:text-sm
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