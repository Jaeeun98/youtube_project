import React from 'react';
import styles from './navBar.module.css';
import styled from 'styled-components';
import { FaHome, FaMoon, FaGithub, FaBlogger } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';


const Nav = styled.nav`
    background : ${props => props.theme.pointColor};
`

const NavBar = React.memo(({ onMoveHome, darkMode }) => {
    return (
        <Nav>
            <ul className={styles.menu}>
                <li className={styles.li} onClick={onMoveHome} title='HOME'>
                    <FaHome />
                </li>
                <li className={[styles.li, styles.darkBtn].join(' ')} onClick={darkMode} title='DarkMode'>
                    <FaMoon />
                </li>
                <li className={styles.li} title='Github'>
                    <a className={styles.a} href="https://github.com/Jaeeun98/youtube_project">
                        <FaGithub />
                    </a>
                </li>
                <hr />
                <li className={styles.li} title='Notion'>
                    <a className={styles.a} href="https://octagonal-cartoon-4dc.notion.site/Jaeeun-Kwon-49358e4681924c6db594f1b7b5293c86">
                        <SiNotion />
                    </a>
                </li>
                <li className={styles.li} title='Blog'>
                    <a className={styles.a} href="https://blog.naver.com/jaeeun_98">
                        <FaBlogger />
                    </a>
                </li>
            </ul>
            
        </Nav>
    )
})

export default NavBar;