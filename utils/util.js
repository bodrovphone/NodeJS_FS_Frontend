const isEmpty = (value) => {
  if (Object.keys(value).length === 0) {
    return true;
  }
  return false;
};

module.exports = {
  isEmpty,
};
