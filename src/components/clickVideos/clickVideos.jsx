import React from 'react';
import styles from './clickVideos.module.css';

const ClickVideos = (props) => {
    return (
        <div className={styles.clickVideo}>
        <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            src={`https://www.youtube.com/embed/${props.clickVideo.video.id}`}
            frameBorder="0" allowFullScreen>
        </iframe>
        <div className={styles.title}>
                <p className={styles.title}>{props.clickVideo.video.snippet.title}</p>
            <p className={styles.channelTitle}>{props.clickVideo.video.snippet.channelTitle}</p>
            </div>
            <hr />
        <div className={styles.ex}>{props.clickVideo.video.snippet.description}</div>
    </div>
    )
}

    

export default ClickVideos;