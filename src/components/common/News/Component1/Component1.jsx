import { useState } from 'react';

import NewsCard from '../../../ui/NewsCard';

const Component1 = () => {
    let news_li = [
        {
            type: 'options',
            created: '2 Min ago',
            title: 'What Prevents Crypto Payments from Going the Mainstream?',
            img: ''
        },
        {
            type: 'options',
            created: '2 Min ago',
            title: 'What Prevents Crypto Payments from Going the Mainstream?',
            img: ''
        },
        {
            type: 'options',
            created: '2 Min ago',
            title: 'What Prevents Crypto Payments from Going the Mainstream?',
            img: 'https://images.unsplash.com/photo-1611179458969-04ba15f34c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            type: 'options',
            created: '2 Min ago',
            title: 'What Prevents Crypto Payments from Going the Mainstream?',
            img: 'https://images.unsplash.com/photo-1611179458969-04ba15f34c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            type: 'options',
            created: '2 Min ago',
            title: 'What Prevents Crypto Payments from Going the Mainstream?',
            img: 'https://images.unsplash.com/photo-1611179458969-04ba15f34c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            type: 'polls',
            created: '2 Min ago',
            title: 'What Prevents Crypto Payments from Going the Mainstream?',
            img: ''
        },
        {
            type: 'polls',
            created: '2 Min ago',
            title: 'What Prevents Crypto Payments from Going the Mainstream?',
            img: ''
        },
    ]
    let menu_li = Array(8).fill(true)

    const [menuIdx, setMenuIdx] = useState(null)
    return (
        <>
            <div className='flex items-start'>
                <div className='flex flex-col flex-1'>
                    {news_li.map((item, idx)=> {
                        return <div key={`news_${idx}`} className="mb-6">
                            <NewsCard />
                        </div>
                    })}
                </div>
                <div className='rounded-md p-9 ml-9 w-80 flex flex-col
                                text-black dark:text-white shadow-card dark:shadow-dark_card bg-white dark:bg-transparent'>
                    {menu_li.map((item, idx) => {
                        return <div key={`item_${idx}`} className='mb-8'>
                            <button className={`text-sm font-semibold ${menuIdx === idx ? 'text-c_1564C0' : 'text-black'} transform hover:scale-110 ease-out duration-700`}
                                    onClick={() => setMenuIdx(idx)}>Menu {idx + 1}</button>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Component1