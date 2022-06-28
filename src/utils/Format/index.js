import moment from 'moment';
import numeral from 'numeral';

window.numeral = numeral;
export default class Format {
  /**
   *
   * @param date
   * @returns {string}
   */
  static date(date) {
    if (!date) return '---';
    return moment(date).format('DD/MM/YYYY');
  }

  static full(date) {
    if (!date) return '---';
    return moment(date).format('HH:mm DD/MM/YYYY');
  }

  static hour(date) {
    return moment(date).format('HH:mm A');
  }
  static fullHour(date) {
    return moment(date).format('HH:mm:ss');
  }
  static fullTime(date) {
    if (date) {
      return moment(date).format('DD/MM/Y HH:mm:ss');
    } else {
      return '';
    }
  }
  static dateReactstrap(date) {
    if (date === '') {
      return '';
    }
    return moment(date).format('DD/MM/YYYY');
  }

  static dateContract(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  /**
   * format số giây hết hạn của accesstoken
   * @param value
   * @returns {*}
   */
  static formatSecondAccessTokenValidity(value) {
    return numeral(value).format('0,0');
  }

  static isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  static formatNumber(value) {
    return numeral(value).format('0,0');
    // return `${numeral(+value).format('0,0.')}`;
  }

  static formatMargin(value) {
    let s = '' + value;
    if (s.split('.').length === 1) {
      return numeral(value).format('0,0');
    } else {
      return `${numeral(+value).format('0,0.00')}`;
    }
  }

  /**
   * format đơn giá
   * @param value
   * @param key: , hoặc . theo locale
   * @returns {*}
   */
  static formatPrice(value, key = ',') {
    // format vnd
    if (!value) return value;
    value = value.toString();
    const decimalString = value.split('.')[1];
    value = value.split('.')[0];
    // value = value.replace(/[.]/g, '');
    // if (value.indexOf(key) > 0) {
    //     let temp = value.split(key);
    //     return `${temp[0].replace(/\B(?=(\d{3})+(?!\d))/g, key)}${key}${temp[1]}`;
    // } else {
    //     return value.replace(/\B(?=(\d{3})+(?!\d))/g, key);
    // }
    const result = value.replace(/\B(?=(\d{3})+(?!\d))/g, key);
    return decimalString ? result + '.' + decimalString : result;
  }

  /**
   * format đơn giá
   * @param value
   * @param unit đơn vị tiền
   * @returns {*}
   */
  static formatPriceByUnit(value, unit) {
    let unitTxt = '';
    switch (unit) {
      case 'CNY':
        unitTxt = '¥';
        break;
      case 'USD':
        unitTxt = '$';
        break;
      default:
        unitTxt = 'đ';
        break;
    }
    return `${numeral(value).format('0,0.[0000]')}${unitTxt}`;
  }

  /**
   * format đơn giá
   * @param value
   * @returns {*}
   */
  static formatValue(value) {
    return `${numeral(value).format('0,0.[0000]')}`;
  }

  static formatPayRate(value) {
    // format USD
    if (value === 0 || !value) return value;
    const valueDecimals = value.toString().includes('.');
    const matchDecimals = value
      .toString()
      .concat('00')
      .match(/-?\d+.\d{2}/);
    if (valueDecimals && matchDecimals) {
      return `${numeral(+matchDecimals[0]).format('0,0.00')}`;
    }
    return `${numeral(+value).format('0,0.00')}`;
  }

  /**
   * format số lượng
   * @param value
   * @returns {string}
   */
  static formatDecimalDynamic = (value, decimalFormat) => {
    if (value === 0 && decimalFormat) {
      return value + '.' + '0'.repeat(decimalFormat);
    }
    if (value === undefined) {
      return '';
    }
    if (!decimalFormat) {
      return value;
    }

    let valueString = value.toString(); // show exact Format
    if (valueString.includes('.')) {
      // is  float
      valueString = valueString + '0'.repeat(decimalFormat);
      const regex = new RegExp(`\\d+\\.\\d{${decimalFormat}}`);
      return valueString.match(regex)[0];
    } else {
      return value + '.' + '0'.repeat(decimalFormat);
    }
  };

  /**
   * format số lượng
   * @param value
   * @returns {*}
   */
  static formatQuantity(value) {
    return numeral(parseInt(value)).format('0,0');
  }

  /**
   * Format current
   * @param value
   * @param locale
   */
  static formatCurrent(value, locale = 'de-DE') {
    if (value) {
      return new Intl.NumberFormat(locale, { maximumFractionDigits: 4 }).format(value);
    }
    return null;
  }

  /**
   *
   * @param value
   * @returns {string|number}
   */
  static formatAmountTyping(value) {
    let raw = typeof value === 'string' ? value : '';
    raw = raw.replace(/[^\d+\^,]/g, '');
    if (raw.indexOf(',') < 0 && raw.length > 0) raw = parseInt(raw);
    else if (raw.indexOf(',') === 0) raw = '';
    else if (raw.indexOf(',') > 0) {
      let temp = raw.split(',');
      let firstNumber = parseInt(temp[0]).toString();
      let secondNumber = temp[1];
      if (secondNumber.length > 4) {
        secondNumber = secondNumber.substring(0, 4);
      }
      raw = `${firstNumber},${secondNumber}`;
    }

    return raw;
  }

  /**
   *
   * @param amount
   * @returns {string}
   */
  static deFormatAmount(amount) {
    return amount.toString().replace(/[.]/g, '');
  }
  static formatRate(rate) {
    let str = '';
    switch (rate) {
      case 0:
        str = 'Chưa xác định';
        break;
      case 1:
        str = 'Thấp';
        break;
      case 2:
        str = 'Trung bình';
        break;
      case 3:
        str = 'Cao';
        break;
      default:
        break;
    }
    return str;
  }
  static formatRateREF(rate) {
    let str = '';
    switch (rate) {
      case 0:
        str = 'Không có cuộc gọi nào';
        break;
      case 1:
        str = 'Từ 1 đến 4 cuộc gọi';
        break;
      case 2:
        str = 'Từ 5 đến 9 cuộc gọi';
        break;
      case 3:
        str = 'Từ 10 đến 14 cuộc gọi';
        break;
      case 4:
        str = 'Từ 15 cuộc gọi trở lên';
        break;
      default:
        break;
    }
    return str;
  }
  static formatBackgroundRate(rate) {
    let bg = '';
    switch (rate) {
      case 0:
        bg = 'bg-color-white  txt-color-blue';
        break;
      case 1:
        bg = 'bg-color-yellow  txt-color-white';
        break;
      case 2:
        bg = 'bg-color-green  txt-color-white';
        break;
      case 3:
        bg = 'bg-color-red txt-color-white';
        break;
      default:
        break;
    }
    return bg;
  }
  static formatPercentLocation(value) {
    return `${value * 10}%`;
  }
}
