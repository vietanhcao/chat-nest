export const formatNumberWithFixedAndComma = (money: any, fixed: number) => {
  if (isNaN(Number(money))) {
    return '0';
  }
  let fixedMoney = Math.abs(Number(money)).toFixed(fixed).toString();
  let beforeDot = fixedMoney.indexOf('.') !== -1 ? fixedMoney.slice(0, fixedMoney.indexOf('.')) : fixedMoney;
  let afterDot = fixedMoney.indexOf('.') !== -1 ? fixedMoney.slice(fixedMoney.indexOf('.') + 1) : '';

  if (afterDot.length < fixed) while (afterDot.length < fixed) afterDot += '0';
  else if (afterDot.length > fixed) {
    if (Number(afterDot[fixed]) >= 5) afterDot = (Number(afterDot.slice(0, fixed)) + 1).toString();
    else afterDot = afterDot.slice(0, fixed);
  }

  if (fixed === 0) return `${beforeDot.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  return `${beforeDot.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}.${afterDot}`;
};

export const formatNumberWithComma = (money: any) => {
  if (isNaN(Number(money))) {
    return '0';
  }
  let isNegative = Number(money) < 0;
  let fixedMoney = Math.abs(money).toString();
  let beforeDot = fixedMoney.indexOf('.') !== -1 ? fixedMoney.slice(0, fixedMoney.indexOf('.')) : fixedMoney;
  let afterDot = fixedMoney.indexOf('.') !== -1 ? fixedMoney.slice(fixedMoney.indexOf('.') + 1) : '';

  if (afterDot.length === 0) return `${isNegative ? '- ' : ''}${beforeDot.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  return `${isNegative ? '- ' : ''}${beforeDot.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}.${afterDot}`;
};

export const formatNumberWithFixed = (money: any, fixed: number) => {
  if (isNaN(Number(money))) {
    return '0';
  }
  let fixedMoney = money.toFixed(fixed).toString();
  let beforeDot = fixedMoney.indexOf('.') !== -1 ? fixedMoney.slice(0, fixedMoney.indexOf('.')) : fixedMoney;
  let afterDot = fixedMoney.indexOf('.') !== -1 ? fixedMoney.slice(fixedMoney.indexOf('.') + 1) : '';

  if (afterDot.length < fixed) while (afterDot.length < fixed) afterDot += '0';
  else if (afterDot.length > fixed) {
    if (Number(afterDot[fixed]) >= 5) afterDot = (Number(afterDot.slice(0, fixed)) + 1).toString();
    else afterDot = afterDot.slice(0, fixed);
  }

  if (fixed === 0) return `${beforeDot}`;
  return `${beforeDot}.${afterDot}`;
};
