import { FIELD } from "./types"

import { FIELD as OPEN_FIELD } from "../../__mocks__/position-open"
import { FIELD as OPEN_SETTLE } from "../../__mocks__/position-settle"


export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? "-" : ""

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
    let j = (i.length > 3) ? i.length % 3 : 0

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "")
  } catch (e) {
    console.log(e)
  }
}

export const agValueFormat = (params) => {
  let { value, colDef: { field } } = params
  let ignoreFormatMoney = [FIELD.contractCode, FIELD.percentageChange, FIELD.contractName, FIELD.tickSize]
  if (!ignoreFormatMoney.includes(field)) {
    // value = formatMoney(value)
  }

  // if (field === FIELD['TLTD']) {
  //   value = value.toFixed(2) + " %"
  // }
  return value
}

export const valueOrderFormat = (params) => {
  let { value } = params

  if (!value) return ""

  return value
}

export const positionValueFormater = (params) => {
  let { value, colDef: { field } } = params

  if ([
    OPEN_FIELD['estimateProfit'],
    OPEN_FIELD['estimateProfitVND'],
    OPEN_SETTLE['profit'],
    OPEN_SETTLE['profitVND'],
  ].includes(field)) {
    value = formatMoney(value)
  }

  return value
}