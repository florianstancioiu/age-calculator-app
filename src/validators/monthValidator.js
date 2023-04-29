const monthValidator = (month) => {
  if (month.trim() === '') {
    return 'This field is required';
  }

  const parsedMonth = parseInt(month);

  if (parsedMonth < 1 || parsedMonth > 12) {
    return 'Must be a valid month';
  }

  return true;
};

export default monthValidator;
