import React from 'react'
import styles from './../styles/Avatar.module.sass'

import Photo from './../../assets/defaultUser.png'

const Avatar = ({ img=Photo, size="m", rounded=false, bordered=false, className }) => {
    return (
        <img alt="profile avatar" src={img} className={
            `${className} ${styles["avatar"]}
            ${styles[`avatar-${size}`]}
            ${rounded && styles['avatar-rounded']}
            ${bordered && styles['avatar-bordered']}
        `} />
    )
}

export default Avatar
