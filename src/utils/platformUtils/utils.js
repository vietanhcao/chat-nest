export const debounce = function (func, wait) {
  let timeout
  return function () {
    var context = this,
      args = arguments

    let executeFunction = function () {
      func.apply(context, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(executeFunction, wait)
  }
}

export const getComponent = (content, components = []) => {
  content.forEach((item) => {
    if (item.content) {
      getComponent(item.content, components)
    } else {
      components.push(item.component)
    }
  })

  return components
}

export const queryToExcelString = (queryString) => {
  queryString = decodeURIComponent(queryString)
  const parseQuery = (queryString) => {
    let query = {}
    let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&')
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split('=')
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
    }
    return query
  }

  let parseQueryObject = parseQuery(queryString)
  delete parseQueryObject['limit']
  delete parseQueryObject['offset']

  let result = ''
  Object.keys(parseQueryObject)
    .map(
      (key, index) =>
        (result +=
          index > 0 ? `&${key}=${parseQueryObject[key]}` : `${key}=${parseQueryObject[key]}`),
    )
    .join('')

  return result
}
