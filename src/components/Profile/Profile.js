import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
return (<div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.profItem}>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}> {stats.followers}</span>
    </li>
    <li className={s.profItem}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}> {stats.views}</span>
    </li>
    <li className={s.profItem}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}> {stats.likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,

}

{/* <div class="profile">
  <div class="description">
    <img
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */}