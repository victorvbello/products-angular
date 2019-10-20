export const processProductList = (list = []) => list.map(processProduct);

export const processProduct = data => {
  const { uniqueID, partNumber, name, fullImage, images, prices } = data;
  return {
    uniqueID,
    partNumber,
    name,
    fullImage,
    images,
    prices,
  };
};
