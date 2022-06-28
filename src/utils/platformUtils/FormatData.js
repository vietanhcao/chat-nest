export const standardMarketData = (rowData) => {
    let result = []
    for (let i = 0, length = rowData.length; i < length; i++) {
      result.push(rowData[i])
      result.push({ action: true, rowData: rowData[i] })
    }
  
    return result
  }