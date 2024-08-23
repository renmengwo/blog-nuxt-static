/**
 * 将时间戳转换为指定格式的日期字符串
 * @param {number} timestamp - 时间戳，单位为毫秒
 * @param {string} format - 日期格式，例如 'yyyy-MM-dd HH:mm:ss'
 * @returns {string} 格式化后的日期字符串
 */
const formatTimestamp = (
  timestamp: number,
  format = 'yyyy-MM-dd HH:mm:ss'
): string => {
  const date = new Date(timestamp)
  const formatOptions = {
    yyyy: date.getFullYear().toString(),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    dd: String(date.getDate()).padStart(2, '0'),
    HH: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0')
  }

  let formattedDate = format

  for (const [key, value] of Object.entries(formatOptions)) {
    if (typeof value === 'string') {
      formattedDate = formattedDate.replace(key, value)
    }
  }

  return formattedDate
}
export { formatTimestamp }
