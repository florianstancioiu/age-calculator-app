import classes from './Button.module.css';
import ArrowIcon from '../images/icon-arrow.svg';

const Button = ({ onClick }) => {
  return (
    <div className={classes.wrapper}>
      <div onClick={onClick} className={classes['icon-wrapper']}>
        <img src={ArrowIcon} alt='' />
      </div>
    </div>
  );
};

export default Button;
