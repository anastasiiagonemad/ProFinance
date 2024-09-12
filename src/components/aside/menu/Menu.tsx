import style from './menu.module.css';
import close from '../../../assets/images/close.svg';
import React, { useState } from 'react';
import settings from '../../../assets/images/settings.svg';
import data from '../../../assets/images/data.svg';
import report from '../../../assets/images/report.svg';
import base from '../../../assets/images/base.svg';

const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prevState: boolean) => !prevState);
  };
  return (
    <div className={style.menu}>
      <div className={style.title}>
        <div className={style.menuTitle}>
          <h2>ФИН</h2>
          <h2>Контроль</h2>
        </div>
        <div className={style.button} onClick={handleOpen}>
          <button>Меню</button>
          <img src={close} alt="icon" />
        </div>
      </div>

      {open && (
        <div>
          <ul className={style.links}>
            <li className={style.link}>
              <img src={settings} alt="icon" />
              <p>Настройки</p>
            </li>
            <li className={style.link}>
              <img src={data} alt="icon" />
              <p>Внесение данных</p>
            </li>
            <li className={style.link}>
              <img src={report} alt="icon" />
              <p>Отчеты</p>
            </li>
            <li className={style.link}>
              <img src={base} alt="icon" />
              <p>База знаний</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
