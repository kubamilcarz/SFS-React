import React from 'react'
import { useParams } from 'react-router'

import ProfileBanner from '../modules/Profile/ProfileBanner'


const ProfilePhotosPage = () => {
    const {userID} = useParams()

    const userInfo = {
        userID: userID
    }

    return (
        <div className="SFSPageStartAtTheTop">
            <ProfileBanner userInfo={userInfo} />
            <h1>{userInfo.userID}'s Photos</h1>
        </div>
    )
}

export default ProfilePhotosPage
