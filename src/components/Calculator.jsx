import { useState } from 'react';

import Button from './Button';
import DateText from './DateText';
import Input from './Input';
import useInput from '../hooks/use-input';
import yearValidator from '../validators/yearValidator';
import monthValidator from '../validators/monthValidator';
import dayValidator from '../validators/dayValidator';
import classes from './Calculator.module.css';
import moment from 'moment';

const Calculator = () => {
  const {
    value: yearValue,
    hasError: yearHasError,
    errorTitle: yearErrorTitle,
    valueChangeHandler: yearChangeHandler,
    inputBlurHandler: yearBlurHandler,
  } = useInput(yearValidator);

  const {
    value: monthValue,
    hasError: monthHasError,
    errorTitle: monthErrorTitle,
    valueChangeHandler: monthChangeHandler,
    inputBlurHandler: monthBlurHandler,
  } = useInput(monthValidator);

  const {
    value: dayValue,
    hasError: dayHasError,
    errorTitle: dayErrorTitle,
    valueChangeHandler: dayChangeHandler,
    inputBlurHandler: dayBlurHandler,
  } = useInput(dayValidator);

  const [resultYears, setResultYears] = useState('--');
  const [resultMonths, setResultMonths] = useState('--');
  const [resultDays, setResultDays] = useState('--');
  const [dateIsInvalid, setDateIsInvalid] = useState(false);

  const btnClickHandler = () => {
    const dateIsValid = (date) => {
      return date instanceof Date && !isNaN(date);
    };

    const dateString = `${yearValue}-${monthValue}-${dayValue}`;
    const theDate = new Date(dateString);

    if (!dateIsValid(theDate)) {
      setDateIsInvalid(true);
      return false;
    } else {
      setDateIsInvalid(false);
    }

    const yearsDiff = moment().diff(theDate, 'years');
    setResultYears(yearsDiff);

    const theDatePlusYears = moment(theDate).add(yearsDiff, 'years');

    const monthsDiff = moment().diff(theDatePlusYears, 'months');
    setResultMonths(monthsDiff);

    const theDatePlusYearsAndMonths = moment(theDatePlusYears).add(
      monthsDiff,
      'months'
    );
    setResultDays(moment().diff(theDatePlusYearsAndMonths, 'days'));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes['inputs-wrapper']}>
        <Input
          title='day'
          placeholder='DD'
          value={dayValue}
          hasError={dateIsInvalid ? dateIsInvalid : dayHasError}
          errorTitle={dateIsInvalid ? 'Must be a valid date' : dayErrorTitle}
          onChange={dayChangeHandler}
          onBlur={dayBlurHandler}
        />
        <Input
          title='month'
          placeholder='MM'
          value={monthValue}
          hasError={monthHasError}
          errorTitle={monthErrorTitle}
          onChange={monthChangeHandler}
          onBlur={monthBlurHandler}
        />
        <Input
          title='year'
          placeholder='YYYY'
          value={yearValue}
          hasError={yearHasError}
          errorTitle={yearErrorTitle}
          onChange={yearChangeHandler}
          onBlur={yearBlurHandler}
        />
      </div>
      <Button onClick={btnClickHandler} />
      <div>
        <DateText title='years' value={resultYears} />
        <DateText title='months' value={resultMonths} />
        <DateText title='days' value={resultDays} />
      </div>
    </div>
  );
};

export default Calculator;
