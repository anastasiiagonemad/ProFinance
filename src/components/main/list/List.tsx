import style from './list.module.css';
import data from '../../DATA.json';

const List: React.FC = () => {
  const sumArt = () => {
    let totalSum = 0;
    data.forEach((item) => {
      const quantity = item.product_quantity;
      if (Array.isArray(quantity)) {
        totalSum += quantity.reduce((acc, qty) => acc + qty, 0);
      } else {
        totalSum += quantity;
      }
    });
    return totalSum;
  };

  const sumPrice = () => {
    let totalSum = 0;
    data.forEach((item) => {
      const price = item.price;
      if (Array.isArray(price)) {
        totalSum += price.reduce((acc, qty) => acc + qty, 0);
      } else {
        totalSum += price;
      }
    });
    return totalSum;
  };

  return (
    <div className={style.data}>
      <div className={style.list}>
        <div className={style.barcode}>
          <h3>Баркод</h3>
          {data.map((item) => (
            <p key={item.id}>{item.barcode}</p>
          ))}
        </div>
        <div className={style.brand}>
          <h3>Бренд</h3>
          {data.map((item) => (
            <p key={item.id}>{item.product_brand}</p>
          ))}
        </div>
        <div className={style.name}>
          <h3>Название товара</h3>
          {data.map((item) => (
            <p key={item.id}>{item.product_name}</p>
          ))}
        </div>
        <div className={style.quantity}>
          <h3>Количество товара</h3>
          {data.map((item) => (
            <p key={item.id}>{item.product_quantity}</p>
          ))}
        </div>
        <div className={style.price}>
          <h3>Цена</h3>
          {data.map((item) => (
            <p key={item.id}>{item.price}</p>
          ))}
        </div>
      </div>
      <div className={style.result}>
        <div>
          <h3>Итого:</h3>
        </div>
        <div className={style.resultSum}>
          <p>{sumArt()}</p>
          <p>{sumPrice()}</p>
        </div>
      </div>
    </div>
  );
};

export default List;
