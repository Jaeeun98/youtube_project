import React from 'react';
import styles from './video.module.css'

const Video = props => {

    return (
        <li className={styles.li} onClick={() => props.onClickVideos(props.video)}>
            <img src={props.video.snippet.thumbnails.medium.url} alt="thumbnailsImg" />
            <div className={styles.text}>
                <p className={styles.title}>{props.video.snippet.title}</p>
                <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
            </div>
        </li>
    )
}
    


export default Video;