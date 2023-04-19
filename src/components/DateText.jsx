import classes from './DateText.module.css';

const DateText = ({ title, value }) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.value}>{value}</span>
      <span className={classes.title}>{title}</span>
    </div>
  );
};

export default DateText;
