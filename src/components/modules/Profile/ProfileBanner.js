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
            <div className={styles.banner}>
                <img
                    className={styles.bgImg}
                    alt="background image"
                    src={bgImg}
                />
                <div className={styles.bar}>
                    <div className={styles.info}>
                        <Avatar size="l" rounded={true} />
                        <h1 className={styles.name}>{userInfo.userID}</h1>
                    </div>
                    <div className={`userNotSelectable ${styles.ctas}`}>
                        <ButtonHold className="btnBigger btnWarning">
                            <FontAwesomeIcon icon={faUserPlus} />
                            Remove Friend
                        </ButtonHold>
                        <ButtonHold className="btnBigger btnPrimary">
                            <FontAwesomeIcon icon={faUsers} />
                            Follow
                        </ButtonHold>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProfileBanner;
