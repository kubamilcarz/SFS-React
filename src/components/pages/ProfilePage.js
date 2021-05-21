import React from 'react'
import { useParams } from 'react-router'
import ProfileBanner from '../modules/Profile/ProfileBanner'

const ProfilePage = () => {
    const {userID} = useParams()

    const userInfo = {
        userID: userID
    }

    return (
        <div className="SFSPageStartAtTheTop">
            <ProfileBanner userInfo={userInfo} />
        </div>
    )
}

export default ProfilePage
