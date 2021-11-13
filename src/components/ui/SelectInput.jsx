import { useState } from "react";
import {
    FaCaretDown,
    FaCaretUp
} from  '../icon/IconImage'
import ClickOutside from "./click-outside/click-outside";


const SelectInput = ({option_li, className, option_board_class, option_class, default_option, enable_underline, returnVal}) => {
    const [enableSelect, setEnableSelect] = useState(false)
    const [currentVal, setCurrentVal] = useState(default_option)
    
    return <ClickOutside active={enableSelect} onClick={() => setEnableSelect(false)}>
                <div>
                    <div className={`border-none py-2 relative cursor-pointer ${className}`} onClick={() => {setEnableSelect(!enableSelect)}}>
                        <div className={currentVal === default_option ? `text-c_00080D` : ''}>{typeof(currentVal) === 'string' ? currentVal : currentVal?.title}</div>
                        <div className="absolute top-0 right-0 flex flex-col h-full">
                            <div className="my-auto">
                                {!enableSelect && <FaCaretDown />}
                                {enableSelect && <FaCaretUp />}
                            </div>
                        </div>
                        {enableSelect && 
                            <div className={`absolute left-0 w-full ${option_board_class}
                                            shadow-card dark:shadow-dark_card`}>
                                <div className="max-h-80 overflow-y-auto text-c_00080D">
                                    {option_li.map((item, index) => {
                                        return <div key={`index_${index}`} onClick={() => {
                                                typeof(item) === 'string' ? setCurrentVal(item) : setCurrentVal(item.title)
                                                setEnableSelect(false)
                                                typeof(item) === 'string' ? returnVal(item) : returnVal(item.title)
                                            }}> 
                                                    {typeof(item) === 'string' && <div className={`py-2 flex items-center justify-center border-c_00080D cursor-pointer ${option_class}`}>{item}</div>}
                                                    {typeof(item) !== 'string' && <div className={`py-2 flex items-center justify-center border-c_00080D cursor-pointer ${option_class}`}>{item.title}</div>}
                                                    {index !== option_li.length - 1 && enable_underline && 
                                                        <div className="h-px bg-transparent mx-5"></div>    
                                                    }
                                                </div>
                                    })}
                                </div>
                            </div>
                        }
                    </div>        
                </div>
            </ClickOutside>

            
}

export default SelectInput