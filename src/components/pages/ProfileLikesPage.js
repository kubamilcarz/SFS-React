import React from 'react'
import { useParams } from 'react-router'

import ProfileBanner from '../modules/Profile/ProfileBanner'


const ProfileLikesPage = () => {
    const {userID} = useParams()

    const userInfo = {
        userID: userID
    }

    return (
        <div className="SFSPageStartAtTheTop">
            <ProfileBanner userInfo={userInfo} />
            <h1>{userInfo.userID}'s Likes</h1>
        </div>
    )
}

export default ProfileLikesPage
