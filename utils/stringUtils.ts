/**
 * 截取指定长度的字符串，考虑空字符串和特殊情况
 * @param {string} str - 需要截取的字符串
 * @param {number} length - 截取的长度
 * @param {string} [ellipsis='...'] - 截取后添加的省略符，默认为 '...'
 * @returns {string} 截取后的字符串
 */
const truncateString = (
  str: string,
  length = 30,
  ellipsis: string = '...'
): string => {
  if (length <= 0) {
    throw new Error(
      'Invalid input: str must be a string and length must be positive.'
    )
  }

  // 如果字符串为空或长度不足，直接返回原字符串
  if (str.length === 0 || str.length <= length) {
    return str
  }

  // 截取字符串并添加省略符
  return str.slice(0, length) + ellipsis
}

export { truncateString }
