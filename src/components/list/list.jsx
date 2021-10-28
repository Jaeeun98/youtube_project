import React from 'react';
import { useHistory } from 'react-router-dom';
import Video from '../video/video';
import styles from './list.module.css';

const List = props => {

    const history = useHistory();

    const onClickVideos = (video) => {
        history.push({
            pathname : '/clickVideo',
            state : {
                video
            }
        })

        props.onClickVideos();
    }

    return (
        <ul className={styles.ul}>
            {props.videos.map(video => (
                <Video
                    video={video}
                    key={typeof video.id === 'object' ? video.id = video.id.videoId : video.id}
                    onClickVideos={onClickVideos}
                />
            ))}
        </ul>
    )
}



export default List;