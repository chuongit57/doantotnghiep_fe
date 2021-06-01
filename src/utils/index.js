export const convertVND = (value) => {
  return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(Number.parseInt(value))
}
