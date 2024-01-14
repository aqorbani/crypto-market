const convertData = (data, type) => {
  const convertedData = data[type].map((item) => {
    return {
      date: dateFormat(item[0]),
      [type]: item[1],
    };
  });
  return convertedData;
};

const dateFormat = (d) => {
  const date = new Date(d);
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + (date.getDay())
  );
};

export { convertData, dateFormat };
