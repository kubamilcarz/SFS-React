import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../Avatar";
import ButtonHold from "../ButtonHold";
import Card from "../Card";

import styles from "./../../styles/profile/Banner.module.sass";

const ProfileBanner = ({ size = "l", userInfo }) => {
    const bgImg =
        "https://s.abcnews.com/images/US/yosemite02-gty-hb-180906_hpMain_16x9_992.jpg";

    return (
        <Card>
            <div className={`userNotSelectable ${size == "l" ? styles.banner : styles.miniBanner}`}>
                <img
                    className={styles.bgImg}
                    alt="background image"
                    src={bgImg}
                />
                <div className={size == "l" ? styles.bannerBar : styles.miniBannerBar}>
                    <div className={styles.info}>
                        <Avatar size={size == "l" ? "l" : "m"} rounded={true} />
                        <h1 className={size == "l" ? styles.name : styles.miniName}>{userInfo.userID}</h1>
                    </div>
                    {size == "l" && (
                        <ul className={styles.profileStats}>
                            <li>
                                <span className={styles.number}>4232</span>
                                <span className={styles.category}>
                                    <Link
                                        className="unlink"
                                        to={`/user/${userInfo.userID}/followers`}
                                    >
                                        Followers
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <span className={styles.number}>121</span>
                                <span className={styles.category}>
                                    <Link
                                        className="unlink"
                                        to={`/user/${userInfo.userID}/following`}
                                    >
                                        Following
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <span className={styles.number}>352</span>
                                <span className={styles.category}>
                                    <Link
                                        className="unlink"
                                        to={`/user/${userInfo.userID}/friends`}
                                    >
                                        Friends
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            {size == "l" && (
                <div className={`userNotSelectable ${styles.bar}`}>
                    <ul className={styles.profileLinks}>
                        <li>
                            <NavLink
                                to={`/user/${userInfo.userID}/`}
                                className="btn btnNoMargin btnBig btnLink unlink fontStandard"
                                activeClassName="btnActive"
                                exact
                                end={true}
                            >
                                Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/user/${userInfo.userID}/reposts`}
                                className="btn btnNoMargin btnBig btnLink unlink fontStandard"
                                activeClassName="btnActive"
                            >
                                Reposts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/user/${userInfo.userID}/likes`}
                                className="btn btnNoMargin btnBig btnLink unlink fontStandard"
                                activeClassName="btnActive"
                            >
                                Likes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/user/${userInfo.userID}/photos`}
                                className="btn btnNoMargin btnBig btnLink unlink fontStandard"
                                activeClassName="btnActive"
                            >
                                Photos
                            </NavLink>
                        </li>
                    </ul>
                    <div className={styles.ctas}>
                        <ButtonHold className="btnWarningOutline">
                            <FontAwesomeIcon icon={faUserPlus} />
                            Remove Friend
                        </ButtonHold>
                        <ButtonHold className="btnPrimary">
                            <FontAwesomeIcon icon={faUsers} />
                            Follow
                        </ButtonHold>
                    </div>
                </div>
            )}
        </Card>
    );
};

export default ProfileBanner;
