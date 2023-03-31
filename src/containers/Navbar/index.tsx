import styles from './styles.module.css'

import UserInfo from '../../components/UserInfo'
import { useState } from 'react';

import { users } from '../../utilities/data';

const index = () => {
  const user = users[5]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenOpen, setIsUserMenOpen] = useState(false)

  const handleClikBtnMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleClikUserMenu = () => {
    setIsUserMenOpen(!isUserMenOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <h1>U<span>2</span>do</h1>

        <div
          className={`
            ${styles.menuContainer}
            ${isMenuOpen && styles.open}
          `}
        >
          <div className={styles.side}>
            <UserInfo />
            <div className={styles.menu}>
              <button>Create</button>
              <a href="/workspaces">WorkSpaces</a>
            </div>
          </div>
          </div>

        <div
          onClick={handleClikUserMenu}
          className={styles.userInfo}
        >
          <picture className={styles.userAvatar}>
            <img src={user.avatar} alt="user avatar" />
          </picture>
          <h3>{user.username}</h3>
        </div>
        <div
            className={`
              ${styles.userInfoMenu}
              ${isUserMenOpen && styles.userMenuShow}
            `}
          >
            <button>Close Session</button>
          </div>
        <div
          onClick={handleClikBtnMenu}
          className={`
            ${styles.burguerMenuBtn}
            ${isMenuOpen && styles.closeBtn}
          `}
        >
          <span className={`${styles.line1} ${styles.line}`}></span>
          <span className={`${styles.line2} ${styles.line}`}></span>
          <span className={`${styles.line3} ${styles.line}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default index;