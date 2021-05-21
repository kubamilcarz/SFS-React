import React from "react";

import Card from "./Card";
import styles from "./../styles/Post.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faComment,
    faHeart,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const Post = ({ key, userID, dob, content, ctas }) => {
    return (
        <Card id={key}>
            <div className={styles.post}>
                <header className={styles.header}>
                    <Link to={`/user/${userID}`} className="unlink">
                        <div>
                            <Avatar size="m" bordered={false} rounded={true} />
                            <h1 className={styles.username}>{userID}</h1>
                        </div>
                    </Link>

                    <div className={styles.clock}>
                        <FontAwesomeIcon icon={faClock} />
                        <span className={styles.timestamp}>{dob}</span>
                    </div>
                </header>
                <div content={styles.content}>{content}</div>
                <footer className={styles.ctas}>
                    <button className="btn btnLink btnBig">
                        <FontAwesomeIcon icon={faHeart} />
                        {ctas.likes}
                    </button>
                    <button className="btn btnLink btnBig">
                        <FontAwesomeIcon icon={faComment} />
                        {ctas.comments}
                    </button>
                    <button className="btn btnLink btnBig">
                        <FontAwesomeIcon className="" icon={faShare} />
                        {ctas.shares}
                    </button>
                </footer>
            </div>
        </Card>
    );
};

export default Post;
