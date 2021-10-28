import React from 'react';
import { useLocation } from 'react-router';
import styles from './clickVideos.module.css';
import styled from 'styled-components';

const Pre = styled.pre`
    color:${props => props.theme.subTextColor};
`
const Title = styled.p`
    color:${props => props.theme.textColor};
`

const P = styled.p`
    color:${props => props.theme.subTextColor};
`

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
            frameBorder="0"
        >
        </iframe>
        <div className={styles.title}>
                <Title>{location.state.video.snippet.title} </Title>
            <P className={styles.channelTitle}>{location.state.video.snippet.channelTitle}</P>
        </div>
        <hr />
        <Pre className={styles.ex}>{location.state.video.snippet.description}</Pre>
        <hr />
        <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
    )
}

export default ClickVideos;