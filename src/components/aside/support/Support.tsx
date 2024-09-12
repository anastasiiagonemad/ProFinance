import style from './support.module.css';

const Support = () => {
  return (
    <div className={style.support}>
      <h3 className={style.title}>Техническая поддержка</h3>
      <div className={style.info}>
        <div className={style.infodouble}>
          <div className={style.infoItem}>
            <h4>Номер поддержки:</h4>
            <p>8 (999) 999 99 99</p>
          </div>
          <div className={style.infoItem}>
            <h4>Почта поддержки:</h4>
            <p>pf1@werthesest.ru</p>
          </div>
        </div>
        <div className={style.infoLastItem}>
          <h4>Часы работы:</h4>
          <p>Пн - Пт с 09:00 до 19:00 мск</p>
        </div>
        <div className={style.links}>
          <p>Пользовательское соглашение</p>
          <p>Политика конфиденциальности</p>
          <p>Юридическая информация</p>
          <p>Публичная оферта</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
