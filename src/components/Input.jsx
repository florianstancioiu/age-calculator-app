import classes from './Input.module.css';

const Input = ({ title, placeholder, value, validate, error }) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor={title}>
        {title}
      </label>
      <input
        className={classes.input}
        id={title}
        type='text'
        placeholder={placeholder}
      />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default Input;
