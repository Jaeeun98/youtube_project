import React from 'react';
import styles from './video.module.css';
import unescape from 'unescape';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Li = styled.li`
  color:${props => props.theme.textColor}
`
const P = styled.p`
  color:${props => props.theme.textColor}
`
const SubP = styled.p`
  color:${props => props.theme.subTextColor}
`

const Video = ({ searchTitle, video, video: {snippet}}) => (
  
  <Li className={styles.li} >
    <Link to={{
        pathname : `/home/clickVideo`,
        state : {
          video : video
        }
      }}>
      <img src={snippet.thumbnails.medium.url} alt="thumbnailsImg" />
      <div className={styles.text}>
        <P className={styles.title}>{snippet.title = unescape(snippet.title)}</P>
        <SubP className={styles.channel}>{snippet.channelTitle}</SubP>
      </div>
    </Link>
  </Li>
  
)

export default Video;