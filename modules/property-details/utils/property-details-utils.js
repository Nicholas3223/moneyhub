export const yearsSincePurchase = (purchaseDate) => {
  const purchaseYear = purchaseDate.match(/^\d{4}/)[0];
  return new Date().getFullYear() - Number(purchaseYear);
};

export const purchaseDate = (date) => {
  const dateNumbers = date.match(/\d+(?=-)/g);
  const month = Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(dateNumbers[1]));
  const year = dateNumbers[0];
  return ` in ${month} ${year}`;
};