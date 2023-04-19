import Button from './Button';
import DateText from './DateText';
import Input from './Input';

import classes from './Calculator.module.css';

const Calculator = () => {
  const yearsValue = '--';
  const weeksValue = '--';
  const daysValue = '--';

  return (
    <div className={classes.wrapper}>
      <div className={classes['inputs-wrapper']}>
        <Input title='day' placeholder='DD' />
        <Input title='month' placeholder='MM' />
        <Input title='year' placeholder='YYYY' />
      </div>
      <Button />
      <div>
        <DateText title='years' value={yearsValue} />
        <DateText title='months' value={weeksValue} />
        <DateText title='days' value={daysValue} />
      </div>
    </div>
  );
};

export default Calculator;
