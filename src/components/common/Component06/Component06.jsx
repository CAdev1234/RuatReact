import VoteCard from "../../ui/VoteCard"


const Component06 = () => {
    let vote_card_li = [
        { title: 'The Sandbox (Sand)', createdAt: '07 Sep 2021', heading: 'WhiteBit Listing', perc: 98, votes: 391, like: true },
        { title: 'The Sandbox (Sand)', createdAt: '10 Sep 2021', heading: 'WhiteBit Listing', perc: 42, votes: 391, like: true },
        { title: 'The Sandbox (Sand)', createdAt: '02 Sep 2021', heading: 'WhiteBit Listing', perc: 33, votes: 200, like: false },
    ]
    return (
        <div>
            <div className="flex items-center">
                <div className="font-bold text-lg leading-normal text-black dark:text-white">Events Today</div>
                <button className="text-sm ml-auto cursor-pointer font-semibold leading-normal
                                text-c_1564C0 dark:text-dark_0fc9f2">View All</button>
            </div>
            <div className="grid gap-6 mt-4
                            grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {vote_card_li.map((item, index) => {
                    return <div key={`event_card_${index}`}>
                                <VoteCard title={item.title} createdAt={item.createdAt} heading={item.heading} perc={item.perc} votes={item.votes} like={item.like} />
                            </div>
                })}
            </div>
        </div>
        
    )
}

export default Component06