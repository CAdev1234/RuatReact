import { useContext, useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import {
    BsGlobe2,
    BsCurrencyDollar,
    BsChevronUp,
    Logo,
    BsList,
    BsXCircle
} from '../icon/IconImage'
import SelectInput from '../ui/SelectInput'
import ThemeToggle from '../ui/ThemeToggle/ThemeToggle'
import Component07 from './Component07/Component07'
import Component05 from './Component05/Component05'
import Component06 from './Component06/Component06'
import Component02 from './Component02/Component02'
import Component03 from './Component03/Component03'
import Component08 from './Component08/Component08'
import Component04 from './Component04/Component04'
import { ThemeContext } from '../contexts/ThemeContext'

const MainBoard = () => {
    let menu_li = [
        {title: 'Menu 1', link: ''},
        {title: 'Menu 2', link: ''},
        {title: 'Menu 3', link: ''},
        {title: 'Menu 4', link: ''},
        {title: 'Menu 5', link: ''},
        {title: 'Menu 6', link: ''}
    ]
    let language_li = ['English', 'Hindi', 'Russian']
    let currency_li = ['USD', 'Rupee', 'Ruble']
    let submenu_li = ['Sub Menu 01', 'Sub Menu 02', 'Sub Menu 03', 'Sub Menu 04', 'Sub Menu 05', 'Sub Menu 06']

    const {theme, setTheme} = useContext(ThemeContext)
    const [enableMobileMenu, setEnableMobileMenu] = useState(false)
    const [language, setLanguage] = useState(language_li[0])
    const [currency, setCurrency] = useState(currency_li[0])
    const [enableSubMenu, setEnableSubmenu] = useState([true, new Array(submenu_li.length - 1).fill(false)])
    const [enableScrollUpBtn, setEnableScrollUpBtn] = useState(false)

    const subMenuHandler = (index) => {
        let new_array = new Array(submenu_li.length).fill(false)
        new_array[index] = true
        setEnableSubmenu(new_array)
    }

    const scrollToUpHandler = () => {
        window.scrollTo(
          { top: 0, behavior: 'smooth' }
        )
    }

    const closeMobileMenuHandler = () => {
        document.querySelector('body').style.overflow = 'auto'
        setEnableMobileMenu(false)
    }
    const openMobileMenuHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        setEnableMobileMenu(true)
    }

    useEffect(() => {
        let scrollHandler = () => {
            let scroll_top = window.scrollY
            if (scroll_top > 0) {
                setEnableScrollUpBtn(true)
            }else {
                setEnableScrollUpBtn(false)
            }
        }
        window.addEventListener('scroll', () => scrollHandler())
        return window.removeEventListener('scroll', scrollHandler)
    }, [])

    return (
        <div className="flex-1 w-0 max-w-6xl mr-auto">
            <div className={`w-full 
                            bg-c_F8F9FB dark:bg-transparent sm:bg-c_F8F9FB sm:dark:bg-gray-900
                             rounded-none sm:rounded-3xl
                             pb-20 sm:pb-0
                             mb-0 sm:mb-10`}>
                <div className="items-center pb-6
                                pt-3 sm:pt-6
                                block sm:flex">
                    <div className="flex items-center
                                    px-5 sm:px-6
                                    ml-0 sm:ml-auto
                                    mb-3 sm:mb-0">
                        <div className="flex items-center">
                            <BsGlobe2 className="text-c_1564C0 dark:text-dark_0fc9f2 ml-1" />
                            <div className="ml-3">
                                <SelectInput 
                                    className="text-xs text-c_2A7BD9 dark:text-dark_0fc9f2 font-semibold w-16"
                                    option_board_class="bg-c_F8F9FB dark:bg-dark_040739 top-8 z-10"
                                    option_li={language_li} 
                                    default_option={language_li[0]}
                                    returnVal={setLanguage}
                                />
                            </div>
                        </div>
                        <div className="flex items-center
                                        ml-auto sm:ml-8
                                        mr-auto sm:mr-0">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center p-0.5
                                            bg-c_1564C0 dark:bg-dark_0fc9f2">
                                <BsCurrencyDollar className="text-white"/>
                            </div>
                            <div className="ml-3">
                                <SelectInput 
                                    className="text-xs text-c_2A7BD9 dark:text-dark_0fc9f2 font-semibold w-16"
                                    option_board_class="bg-c_F8F9FB dark:bg-dark_040739 top-8 z-10"
                                    option_li={currency_li} 
                                    default_option={currency_li[0]}
                                    returnVal={setCurrency}
                                />
                            </div>
                        </div>
                        <div className="ml-0 sm:ml-10">
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="h-0.5 w-full
                                    block sm:hidden
                                  bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>
                    <div className="flex items-center
                                    px-5 sm:px-6
                                    mt-5 sm:mt-0">
                        <div className="rounded-full w-7 h-7 items-center justify-center text-xl cursor-pointer font-bold text-white bg-c_1564C0 dark:bg-dark_0fc9f2
                                        flex sm:hidden">
                            <BsList style={{strokeWidth: 1}} onClick={() => {openMobileMenuHandler()}}/>
                        </div>
                        <div className="block sm:hidden pl-4">
                            <Logo color={`${theme === 'dark' ? '#0fc9f2' : '#1564c0'}`} className=""/>
                        </div>
                        <button className="h-7_5 w-20 flex items-center justify-center text-sm rounded-l-full rounded-r-full
                                            ml-auto sm:ml-0
                                            bg-c_1564C0 text-white dark:bg-dark_0fc9f2">Sign In</button>
                    </div>
                </div>

                <div className="h-0.5 w-full
                                bg-c_E8EBF1 dark:bg-dark_0fc9f2"></div>

                <div className="w-full flex flex-col
                                py-5 sm:py-10">
                    <div className="mx-auto flex items-center justify-center flex-wrap gap-3
                                    w-full xl:w-8/12
                                    px-3 xl:px-0">
                        {submenu_li.map((item, index) => {
                            return <div key={`submenu_${index}`} 
                                        className={`h-7_5 w-32 flex justify-center items-center rounded-r-full rounded-l-full cursor-pointer text-sm ${enableSubMenu[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'bg-white text-black font-semibold'}
                                                    shadow-card dark:shadow-dark_card`}
                                        onClick={() => {subMenuHandler(index)}}>{item}</div>
                        })}
                    </div>

                    <div className="mt-15
                                    px-4 sm:px-6">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 2</div>
                        <div className="mt-12">
                            <Component02 />
                        </div>
                    </div>

                    <div className="mt-15
                                    px-4 sm:px-6">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 3</div>
                        <div className="mt-7">
                            <Component03 />
                        </div>
                    </div>

                    <div className="mt-15
                                    px-4 sm:px-6">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 4</div>
                        <div className="mt-7">
                            <Component04 />
                        </div>
                    </div>


                    <div className="mt-15
                                    px-4 sm:px-6">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 5</div>
                        <div className="mt-7">
                            <Component05 />
                        </div>
                    </div>

                    <div className="mt-15
                                    px-4 sm:px-6">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 6</div>
                        <div className="mt-7">
                            <div className="flex items-center">
                                <div className="font-bold text-lg leading-normal text-black dark:text-white">Events Today</div>
                                <button className="text-sm ml-auto cursor-pointer font-semibold leading-normal
                                                text-c_1564C0 dark:text-dark_0fc9f2">View All</button>
                            </div>
                            <div className="grid gap-6 mt-4
                                            grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                                {[0, 1, 2].map((item, index) => {
                                    return <div key={`event_card_${index}`}>
                                                <Component06 />
                                            </div>
                                })}
                            </div>
                        </div>
                    </div>

                    
                    
                    <div className="mt-15
                                    px-4 sm:px-6">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 7</div>
                        <div className="mt-7">
                            <Component07 />
                        </div>
                    </div>


                    <div className="mt-15
                                    px-4 sm:px-6">
                        <div className="text-3xl font-bold text-black dark:text-white">Component 8</div>
                        <div className="">
                            <Component08 />
                        </div>
                    </div>


                    <div className={`fixed flex items-center justify-center rounded-full cursor-pointer shadow-card text-white font-semibold bg-c_1564C0 dark:bg-dark_0fc9f2 ${enableScrollUpBtn === false ? 'hidden' : 'block'}
                                    bottom-5 sm:bottom-10 
                                    right-5 sm:right-10
                                    w-7 sm:w-12
                                    h-7 sm:h-12 `}
                        onClick={() => {scrollToUpHandler()}}>
                            <BsChevronUp className={`text-sm sm:text-xl`} style={{strokeWidth: 1}}/>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            {enableMobileMenu &&
                <div className="fixed top-0 left-0 w-full h-screen bg-gray-100 dark:bg-gray-900">
                    <div className="w-full h-full relative">
                        <div className="absolute top-5 right-5 text-black dark:text-dark_0fc9f2 text-xl">
                            <BsXCircle style={{strokeWidth: 1}} onClick={() => {closeMobileMenuHandler()}}/>
                        </div>
                        <div className="flex flex-col py-12 px-6">
                            {menu_li.map((item, index) => {
                                return <div key={`leftside_${index}`} className="py-2 px-1 hover:bg-gray-800" onClick={() => {closeMobileMenuHandler()}}>
                                            <div className="text-black dark:text-white">{item.title}</div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
        
    )
}

export default MainBoard