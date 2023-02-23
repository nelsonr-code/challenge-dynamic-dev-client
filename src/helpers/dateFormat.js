export const formatDate = (dateRaw) => {
  const date = new Date(dateRaw)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  console.log(`${year}`)
  return `${year}`
  // return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
