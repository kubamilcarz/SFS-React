import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Avatar from "../Avatar";
import ButtonHold from "../ButtonHold";
import Card from "../Card";

import styles from "./../../styles/profile/Banner.module.sass";

const ProfileBanner = ({ size = "l", userInfo }) => {
    const bgImg =
        "https://s.abcnews.com/images/US/yosemite02-gty-hb-180906_hpMain_16x9_992.jpg";

    return (
        <Card>
            <div className={`userNotSelectable ${styles.banner}`}>
                <img
                    className={styles.bgImg}
                    alt="background image"
                    src={bgImg}
                />
                <div className={styles.bannerBar}>
                    <div className={styles.info}>
                        <Avatar size="l" rounded={true} />
                        <h1 className={styles.name}>{userInfo.userID}</h1>
                    </div>
                    <ul className={styles.profileStats}>
                        <li>
                            <span className={styles.number}>4232</span>
                            <span className={styles.category}>Followers</span>
                        </li>
                        <li>
                            <span className={styles.number}>121</span>
                            <span className={styles.category}>Following</span>
                        </li>
                        <li>
                            <span className={styles.number}>352</span>
                            <span className={styles.category}>Friends</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`userNotSelectable ${styles.bar}`}>
                <ul className={styles.profileLinks}>
                    <li className="btn btnNoMargin btnBig btnLink">Posts</li>
                    <li className="btn btnNoMargin btnBig btnLink">Reposts</li>
                    <li className="btn btnNoMargin btnBig btnLink">Likes</li>
                    <li className="btn btnNoMargin btnBig btnLink">Photos</li>
                </ul>
                <div className={styles.ctas}>
                    <ButtonHold className="btnWarning">
                        <FontAwesomeIcon icon={faUserPlus} />
                        Remove Friend
                    </ButtonHold>
                    <ButtonHold className="btnPrimary">
                        <FontAwesomeIcon icon={faUsers} />
                        Follow
                    </ButtonHold>
                </div>
            </div>
        </Card>
    );
};

export default ProfileBanner;
