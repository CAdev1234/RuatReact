const Component11 = () => {
    let card_li = new Array(9).fill('Title')
    return (
        <div>
            <div className="font-semibold leading-normal
                            text-lg sm:text-22px">Heading Title</div>
            <div className="leading-normal text-c_6E7582
                            text-11px sm:text-sm
                            mt-3 sm:mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor sit amet, consectetur.
                <span className="ml-2 text-c_1564C0 font-semibold">Read More</span>
            </div>
            <div className="grid gap-4
                            grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
                            mt-5 sm:mt-7_5">
                {card_li.map((item, index) => {
                    return (
                        <div key={`item_${index}`} className="">
                            <div className="aspect-w-1 aspect-h-1">
                                <div className="flex flex-col bg-white shadow-card rounded-lg py-4">
                                    <div className="rounded-full bg-c_E8EBF1 mx-auto
                                                    w-8 sm:w-11 
                                                    h-8 sm:h-11"></div>
                                    <div className="my-auto font-semibold leading-normal text-center text-black dark:text-white
                                                    text-xs sm:text-lg">{item} {index + 1}</div>
                                    <div className="w-full">
                                        <button className="mx-auto flex items-center justify-center border border-c_1564C0 rounded-full bg-transparent text-c_1564C0 font-semibold
                                                           h-5 sm:h-7_5
                                                           text-10px sm:text-sm
                                                           px-2 sm:px-4">Visit Website</button>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Component11