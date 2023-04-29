const dayValidator = (day) => {
  if (day.trim() === '') {
    return 'This field is required';
  }

  const parsedDay = parseInt(day);

  if (parsedDay < 1 || parsedDay > 31) {
    return 'Must be a valid day';
  }

  return true;
};

export default dayValidator;
