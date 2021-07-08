import React from 'react';
import Video from '../video/video';
import styles from './list.module.css';

const List = (props) => {
    return (
        <ul className={styles.ul}>
            {props.videos.map(video => (
                <Video
                    video={video}
                    key={video.id}
                />
            ))}
        </ul>
    )
}



export default List;