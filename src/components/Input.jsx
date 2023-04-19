import classes from './Input.module.css';

const Input = ({ id, title, placeholder, value, validate, error }) => {
  return (
    <div className={classes.wrapper}>
      <label htmlFor={id}>{title}</label>
      <input id={id} type='text' placeholder={placeholder} />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default Input;
