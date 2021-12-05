import {
    TrendingSvg,
    IoTrendingUpSharp
} from '../../icon/IconImage'
import VoteCard from '../../ui/VoteCard'


const Component22 = () => {
    let vote_card_li_1 = [
        { title: 'The Sandbox (Sand)', createdAt: '07 Sep 2021', heading: 'WhiteBit Listing', perc: 98, votes: 391, like: true },
        { title: 'The Sandbox (Sand)', createdAt: '02 Sep 2021', heading: 'WhiteBit Listing', perc: 33, votes: 200, like: false },
    ]
    return (
        <div className="grid gap-x-5 gap-y-5 text-black dark:text-white
                        grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col w-full">
                <div className="flex items-center w-full px-3">
                    <div className="flex items-center">
                        <img src={TrendingSvg} className="w-7 h-7" alt=""></img>
                        <div className="ml-2 font-bold leading-normal text-lg">Text 1</div>
                    </div>
                    <div className="ml-auto text-c_1564C0 dark:text-dark_0fc9f2 text-sm leading-normal font-semibold">View All</div>
                </div>
                <div className="mt-4_5 flex flex-col gap-y-5">
                    {vote_card_li_1.map((item, index) => {
                        return <div key={`vote_card_${index}`} className="">
                                    <VoteCard title={item.title} createdAt={item.createdAt} heading={item.heading} perc={item.perc} votes={item.votes} like={item.like} />
                                </div>
                    })}
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center w-full px-3">
                    <div className="flex items-center">
                        <div className="bg-c_64A879 w-5 h-5 rounded-full flex items-center justify-center text-white">
                            <IoTrendingUpSharp />
                        </div>
                        <div className="ml-2 text-lg font-bold leading-normal">Text 2</div>
                    </div>
                    <div className="ml-auto text-c_1564C0 dark:text-dark_0fc9f2 text-sm leading-normal font-semibold">View All</div>
                </div>
                <div className="mt-4_5 flex flex-col gap-y-5">
                    {vote_card_li_1.map((item, index) => {
                        return <div key={`vote_card_${index}`} className="">
                                    <VoteCard title={item.title} createdAt={item.createdAt} heading={item.heading} perc={item.perc} votes={item.votes} like={item.like} />
                                </div>
                    })}
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center w-full px-3">
                    <div className="flex items-center">
                        <img src={TrendingSvg} className="w-7 h-7" alt=""></img>
                        <div className="ml-2 font-bold leading-normal text-lg">Text 3</div>
                    </div>
                    <div className="ml-auto text-c_1564C0 dark:text-dark_0fc9f2 text-sm leading-normal font-semibold">View All</div>
                </div>
                <div className="mt-4_5 flex flex-col gap-y-5">
                    {vote_card_li_1.map((item, index) => {
                        return <div key={`vote_card_${index}`} className="">
                                    <VoteCard title={item.title} createdAt={item.createdAt} heading={item.heading} perc={item.perc} votes={item.votes} like={item.like} />
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}


export default Component22