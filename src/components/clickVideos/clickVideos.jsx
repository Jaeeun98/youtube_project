import React from 'react';
import { useLocation } from 'react-router';
import styles from './clickVideos.module.css';


const ClickVideos = () => {
    
    const location = useLocation();

    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://youtube-3sffstpjjf.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();

        
    return (
    <div className={styles.clickVideo}>
        <iframe
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${location.state.video.id}`}
            frameborder="0"
        >
        </iframe>
        <div className={styles.title}>
                <p className={styles.title}>{location.state.video.snippet.title}  </p>
            <p className={styles.channelTitle}>{location.state.video.snippet.channelTitle}</p>
        </div>
        <hr />
        <pre className={styles.ex}>{location.state.video.snippet.description}</pre>
        <hr />
        <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
    )
}

export default ClickVideos;