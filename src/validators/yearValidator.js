const yearValidator = (year) => {
  if (year.trim() === '') {
    return 'This field is required';
  }

  const parsedYear = parseInt(year);
  const currentYear = new Date().getFullYear();

  if (parsedYear < 1900) {
    return 'Select a year after 1900';
  }

  if (parsedYear > currentYear) {
    return 'Must be in the past';
  }

  return true;
};

export default yearValidator;
