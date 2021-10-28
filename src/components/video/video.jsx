import React from 'react';
import styles from './video.module.css';
import unescape from 'unescape';
import styled from 'styled-components';

const Li = styled.li`
  color:${props => props.theme.textColor}
`
const P = styled.p`
  color:${props => props.theme.subTextColor}
`

const Video = ({ onClickVideos, video, video: {snippet}}) => (
    <Li className={styles.li} onClick={() => onClickVideos(video)}>
        <img src={snippet.thumbnails.medium.url} alt="thumbnailsImg" />
        <div className={styles.text}>
            <p className={styles.title}>{snippet.title = unescape(snippet.title)}</p>
            <P className={styles.channel}>{snippet.channelTitle}</P>
        </div>
    </Li>    
)

export default Video;