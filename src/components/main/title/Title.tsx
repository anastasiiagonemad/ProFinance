import style from './title.module.css';
import profileIcon from '../../../assets/images/profile.svg';
import date from '../../../assets/images/calendar.svg';
import arrow from '../../../assets/images/arrow.svg';

const Title: React.FC = () => {
  return (
    <div className={style.title}>
      <div className={style.profile}>
        <div className={style.profileTitle}>
          <img src={profileIcon} alt="icon" />
          <p>Иванов И.И</p>
        </div>
        <div className={style.date}>
          <img src={date} alt="icon" />
          <p>Тариф до</p>
          <input type="date" />
        </div>
      </div>

      <div className={style.buttons}>
        <div className={style.buttonWhite}>
          <button>Выйти</button>
        </div>
        <div className={style.buttonOrange}>
          <button>О нас</button>
          <img src={arrow} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Title;
