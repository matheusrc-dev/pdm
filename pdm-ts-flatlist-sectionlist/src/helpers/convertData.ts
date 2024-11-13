const convertData = (oldData: any) => {
  const newData: Array<any> = [];

  const categories = new Set(oldData.map((od: any) => od.category));

  categories.forEach((c: any) => {
    newData.push({
      title: c,
      data: oldData.filter((od: any) => od.category == c),
    });
  });

  return newData;
};

export default convertData;
