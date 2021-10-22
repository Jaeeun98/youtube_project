import React from 'react';
import styles from './navBar.module.css';


const NavBar = (props) => {
    return (
        <nav>
            <div className={styles.title}>MENU</div>
            <ul className={styles.menu}>
                <li className={styles.li}>HOME</li>
                <li className={styles.li}>DARK</li>
                <li className={styles.li}>
                    <a href="https://github.com/Jaeeun98/youtube_project">
                        GIT
                    </a>
                    
                </li>
                <hr />
                <li className={styles.li}>
                    <a href="https://octagonal-cartoon-4dc.notion.site/Jaeeun-Kwon-49358e4681924c6db594f1b7b5293c86">
                        NOTION
                    </a>
                </li>
                <li className={styles.li}>
                    <a href="https://blog.naver.com/jaeeun_98">
                        BLOG
                    </a>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar;