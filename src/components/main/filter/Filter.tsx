import style from './filter.module.css';
import base from '../../../assets/images/base.svg';
import exportItem from '../../../assets/images/export.svg';

import loadData from '../../../assets/images/load-data.svg';
import editData from '../../../assets/images/edit-data.svg';
import close from '../../../assets/images/close.svg';
import React, { useState } from 'react';
import List from '../list/List';

import dataList from '../../DATA.json';

const date: Date = new Date();
const month: number = date.getMonth() + 1;
const year: number = date.getFullYear();
const day: number = date.getDate() + 1;

const Filter: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenData, setIsOpenData] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenData = () => {
    setMessage('Загрузка...');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpenData(true);
    }, 3000);
  };

  const handleDeleteData = () => {
    setMessage('Данные успешно удалены');
    setIsLoading(true);
    setIsOpenData(false);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  const exportToJson = () => {
    const jsonString = JSON.stringify(dataList, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportToCsv = () => {
    const csvRows = [];
    csvRows.push([
      'Баркод',
      'Бренд',
      'Название товара',
      'Артикул товара',
      'Цена',
    ]);

    dataList.forEach((row) => {
      csvRows.push([
        row.barcode,
        row.product_brand,
        row.product_name,
        row.product_quantity,
        row.price,
      ]);
    });

    const csvString = csvRows.map((e) => e.join(',')).join('\n');

    const blob = new Blob([csvString], { type: 'text/csv' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'data/csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleExport = (format: string) => {
    if (format === 'json') {
      exportToJson();
    } else if (format === 'csv') {
      exportToCsv();
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={style.filter}>
      <div className={style.title}>
        <h1>
          Остатки сформированы на {day}.{month < 10 ? `0${month}` : month}.
          {year} г.
        </h1>
        <div className={style.instruction}>
          <img src={base} alt="icon" />
          <p>Инструкции</p>
        </div>
      </div>

      <div className={style.form}>
        <div className={style.formInputs}>
          <div className={style.art}>
            <p>Баркод:</p>
            <input type="text" placeholder="32718" />
          </div>
          <div className={style.art}>
            <p>Бренд:</p>
            <input type="text" placeholder="Asus" />
          </div>
          <div className={style.art}>
            <p>Количество:</p>
            <input type="text" placeholder="26" />
          </div>
        </div>

        <div className={style.buttons}>
          <button className={style.forming}>Сформировать</button>
          <button className={style.export} onClick={handleOpenModal}>
            <img src={exportItem} alt="icon" />
            Экспорт
          </button>
        </div>
      </div>

      {openModal && (
        <div className={style.modal}>
          <div className={style.layout}></div>
          <div className={style.modalIn}>
            <div
              className={style.closeBtn}
              onClick={(e) => {
                e.preventDefault();
                handleCloseModal();
              }}
            >
              <img src={close} alt="close" />
            </div>
            <div className={style.modalButtons}>
              <button
                className={style.modalButton}
                onClick={(e) => {
                  e.preventDefault();
                  handleExport('json');
                }}
              >
                Экспортировать в формате JSON
              </button>
              <button
                className={style.modalButton}
                onClick={(e) => {
                  e.preventDefault();
                  handleExport('csv');
                }}
              >
                Экспортировать в формате СSV
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={style.loadingline}>
        <div className={style.changes}>
          <button className={style.buttonData} onClick={handleOpenData}>
            <img src={loadData} alt="icon" />
            Загрузить данные из csv
          </button>
          <button className={style.buttonData}>
            <img src={editData} alt="icon" />
            Изменить данные
          </button>
        </div>
        <div>
          <button className={style.delete} onClick={handleDeleteData}>
            Очистить
            <img src={close} alt="icon" />
          </button>
        </div>
      </div>
      {isLoading ? <p className={style.loadingMessage}>{message}</p> : <List />}
    </div>
  );
};

export default Filter;
