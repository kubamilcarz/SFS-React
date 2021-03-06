import React from 'react'
import { useParams, useHistory } from 'react-router'
import ProfileBanner from '../modules/Profile/ProfileBanner'

const ProfilePage = () => {
    const {userID} = useParams()

    const userInfo = {
        userID: userID
    }

    return (
        <div className="SFSPageStartAtTheTop">
            <ProfileBanner size="l" userInfo={userInfo} />
        </div>
    )
}

export default ProfilePage
