import React from 'react'
import Post from '../modules/Post'

const HomePage = () => {

    const DUMMY_DATA = [
        {
            postID: 1,
            userID: 5215,
            content: "In private, Biden administration officials admit they harbor no illusions that North Korea will ever give up the entirety of its nuclear program. Yet, like his predecessors, Biden has decided not to officially acknowledge it as a nuclear state, aides say. https://t.co/j0FVIEMiwd",
            dob: "05-21-2021",
            ctas: {
                likes: 42,
                comments: 13,
                shares: 3
            }
        },
        {
            postID: 2,
            userID: 2321,
            content: "For the first time in nearly three decades, Alabama will allow yoga to be taught in its public schools, but teachers will be barred from saying the traditional salutation “namaste” and using Sanskrit names for poses. https://t.co/MQHNyGkHI9",
            dob: "05-21-2021",
            ctas: {
                likes: 231,
                comments: 41,
                shares: 7
            }
        }
    ];

    return (
        <div className="SFSPostContainer containerSmall">
            {DUMMY_DATA.map(post => <Post key={post.postID} userID={post.userID} content={post.content} dob={post.dob} ctas={post.ctas} />)}
        </div>
    )
}

export default HomePage

// key={} content={} dob={} ctas={} userID={}