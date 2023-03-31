import styles from './styles.module.css'

import { users } from '../../utilities/data';

const index = () => {
  const user = users[5]
  return (
    <div className={styles.userInfoContainer}>
      <picture className={styles.userAvatar}>
        <img src={user.avatar} alt="user avatar" />
      </picture>
      <h3>{user.username}</h3>
      <small>{user.email}</small>
    </div>
  );
}

export default index;