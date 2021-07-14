import React from 'react';
import styles from './clickVideos.module.css';

const ClickVideos = ({ clickVideo: { video }, clickVideo: { video: { snippet }}}) => {

    return (
    <div className={styles.clickVideo}>
        <iframe
            id="ytplayer"
            type="text/html"
            
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0"
            allowfullscreen
        >
        </iframe>
        <div className={styles.title}>
                <p className={styles.title}>{snippet.title}  </p>
            <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        </div>
            <hr />
        <pre className={styles.ex}>{snippet.description}</pre>
    </div>
    )
}

    

export default ClickVideos;