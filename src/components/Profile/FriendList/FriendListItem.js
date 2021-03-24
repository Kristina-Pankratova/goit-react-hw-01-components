import PropTypes from 'prop-types';
import s from './FriendList.module.css'

export default function FriendListItem({avatar, name, isOnline}) {
    return (
      <li className={s.friendItem}>
        <span className={isOnline ? s.isOnline : s.isOffline}></span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className={s.name}>{name}</p>
      </li>
  )  
}