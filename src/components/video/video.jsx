import React from 'react';
import styles from './video.module.css';
import unescape from 'unescape';

const Video = ({ onClickVideos, video, video: {snippet}}) => (
    <li className={styles.li} onClick={() => onClickVideos(video)}>
        <img src={snippet.thumbnails.medium.url} alt="thumbnailsImg" />
        <div className={styles.text}>
            <p className={styles.title}>{snippet.title = unescape(snippet.title)}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
    </li>    
)

export default Video;