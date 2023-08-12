export const getFormatedAmount = (amount) => {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const getGSTprice = (val) => {
  return Math.round((val * 18) / 100);
};
