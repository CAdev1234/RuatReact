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
            <div className=" bg-c_1564C0 w-full text-white flex flex-col pt-22_5 text-sm font-normal">
                <div className="flex px-75 pb-14">
                    <div className="max-w-xl flex flex-col">
                        <div className="text-22px leading-snug font-semibold">Quis nostrud exercitation ullamco</div>
                        <div className="text-4xl leading-normal font-semibold">Lorem ipsum dolor sit amet.</div>
                        <div className="text-sm font-normal mt-1">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</div>
                        <div className="flex items-center mt-auto">
                            <img src={AppleStoreBadge} className="w-36" alt=""></img>
                            <img src={GooglePlayBadge} className=" w-48" alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col mx-auto">
                        <div className="text-22px leading-snug font-semibold">Category 1</div>
                        {cate_li.map((item, index) => {
                            return <div key={`category_${index}`} className="mt-4">{item.title}</div>
                        })}
                    </div>

                    <div className="flex flex-col mx-auto">
                        <div className="text-22px leading-snug font-semibold">Company</div>
                        {page_li.map((item, index) => {
                            return <div key={`page_${index}`} className="mt-4">{item.title}</div>
                        })}
                    </div>

                    <div className="flex flex-col ml-auto">
                        <div className="text-22px leading-snug font-semibold">Support</div>
                        {support_li.map((item, index) => {
                            return <div key={`support_${index}`} className="mt-4">{item.title}</div>
                        })}
                    </div>
                </div>
                
                <div className="bg-c_2A7BD9 h-0.5 w-full"></div>

                <div className="px-75 py-4_5 flex items-center">
                    <div className="">© 2021 Ruat. All rights reserved</div>
                    <div className="ml-auto">Follow us on</div>
                    <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center ml-9">
                        <BsTwitter className=" text-c_1564C0"/>
                    </div>
                    <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center ml-8">
                        <BsInstagram className=" text-c_1564C0"/>
                    </div>
                    <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center ml-8">
                        <FaTelegramPlane className="text-c_1564C0"/>
                    </div>
                    <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center ml-8">
                        <FaDiscord className=" text-c_1564C0"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer