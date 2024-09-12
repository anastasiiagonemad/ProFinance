import style from './button.module.css';
import message from '../../../assets/images/message.svg';

const Button: React.FC = () => {
  return (
    <div className={style.button}>
      <img src={message} alt="icon" />
      <button>Связаться с нами</button>
    </div>
  );
};

export default Button;
