import { 
    AppleStoreBadge,
    GooglePlayBadge,
    BsTwitter,
    BsInstagram,
    FaDiscord,
    FaTelegramPlane 
} from "../icon/IconImage"

const Footer = () => {
    let cate_li = [
        {title: 'Option 1', link: ''},
        {title: 'Option 2', link: ''},
        {title: 'Option 3', link: ''},
        {title: 'Option 4', link: ''},
        {title: 'Option 5', link: ''},
        {title: 'Option 6', link: ''},
    ]
    let page_li = [
        {title: 'About us', link: ''},
        {title: 'Terms of use', link: ''},
        {title: 'Privacy Policy', link: ''},
        {title: 'Disclaimer', link: ''},
        {title: 'Methodology', link: ''},
        {title: 'Careers', link: ''},
    ]
    let support_li = [
        {title: 'Request Form', link: ''},
        {title: 'Contact Support', link: ''},
        {title: 'FAQ', link: ''},
        {title: 'Glossary', link: ''},
    ]
    return (
        <>
            <div className="w-full text-white flex flex-col pt-22_5 text-sm font-normal
                        bg-c_1564C0 dark:bg-gray-900">
                <div className="pb-14
                                px-5 xl:px-32 2xl:px-75
                                block md:flex">
                    <div className="flex flex-col
                                    max-w-none md:max-w-md lg:max-w-lg xl:max-w-xl
                                    text-center md:text-left">
                        <div className="leading-snug font-semibold
                                        text-xl md:text-xl lg:text-xl xl:text-22px">Quis nostrud exercitation ullamco</div>
                        <div className="leading-normal font-semibold
                                        text-3xl md:text-3xl lg:text-3xl xl:text-4xl">Lorem ipsum dolor sit amet.</div>
                        <div className="text-sm font-normal mt-1">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</div>
                        <div className="flex items-center mt-auto
                                        justify-center md:justify-start">
                            <img src={AppleStoreBadge} className="w-36" alt=""></img>
                            <img src={GooglePlayBadge} className=" w-48" alt="" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 flex-1 w-full
                                    mt-5 md:mt-0">
                        <div className="flex flex-col mx-auto">
                            <div className="leading-snug font-semibold
                                            text-sm md:text-lg lg:text-xl xl:text-22px">Category 1</div>
                            {cate_li.map((item, index) => {
                                return <div key={`category_${index}`} className="mt-4">{item.title}</div>
                            })}
                        </div>

                        <div className="flex flex-col mx-auto">
                            <div className="leading-snug font-semibold
                                            text-sm md:text-lg lg:text-xl xl:text-22px">Company</div>
                            {page_li.map((item, index) => {
                                return <div key={`page_${index}`} className="mt-4">{item.title}</div>
                            })}
                        </div>

                        <div className="flex flex-col mx-auto">
                            <div className="leading-snug font-semibold
                                            text-sm md:text-lg lg:text-xl xl:text-22px">Support</div>
                            {support_li.map((item, index) => {
                                return <div key={`support_${index}`} className="mt-4">{item.title}</div>
                            })}
                        </div>
                    </div>
                </div>
                
                <div className="bg-c_2A7BD9 dark:bg-dark_0fc9f2 h-0.5 w-full"></div>

                <div className="py-4_5 items-center
                                block sm:flex
                                px-5 xl:px-32 2xl:px-75">
                    <div className="text-center sm:text-left">© 2021 Ruat. All rights reserved</div>
                    <div className="ml-auto flex items-center
                                    mt-5 sm:mt-0">
                        <div className="">Follow us on</div>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer
                                        bg-white dark:bg-dark_0fc9f2
                                        ml-auto sm:ml-9">
                            <BsTwitter className=" text-c_1564C0 dark:text-white"/>
                        </div>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center ml-8 cursor-pointer
                                        bg-white dark:bg-dark_0fc9f2">
                            <BsInstagram className=" text-c_1564C0 dark:text-white"/>
                        </div>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center ml-8 cursor-pointer
                                        bg-white dark:bg-dark_0fc9f2">
                            <FaTelegramPlane className="text-c_1564C0 dark:text-white"/>
                        </div>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center ml-8 cursor-pointer
                                        bg-white dark:bg-dark_0fc9f2">
                            <FaDiscord className="text-c_1564C0 dark:text-white"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer