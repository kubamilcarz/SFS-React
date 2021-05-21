import React from 'react'
import { useParams } from 'react-router'

import ProfileBanner from '../modules/Profile/ProfileBanner'


const ProfileRepostsPage = () => {
    const {userID} = useParams()

    const userInfo = {
        userID: userID
    }

    return (
        <div className="SFSPageStartAtTheTop">
            <ProfileBanner userInfo={userInfo} />
            <h1>{userInfo.userID}'s Reposts</h1>
        </div>
    )
}

export default ProfileRepostsPage
