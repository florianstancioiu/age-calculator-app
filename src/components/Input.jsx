import classes from './Input.module.css';

const Input = ({
  title,
  placeholder,
  value,
  hasError,
  errorTitle,
  onChange,
  onBlur,
}) => {
  const wrapperClasses = hasError
    ? `${classes.wrapper} ${classes['has-error']}`
    : classes.wrapper;

  return (
    <div className={wrapperClasses}>
      <label className={classes.label} htmlFor={title}>
        {title}
      </label>
      <input
        className={classes.input}
        id={title}
        type='text'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {hasError && <p className={classes['error-text']}>{errorTitle}</p>}
    </div>
  );
};

export default Input;
