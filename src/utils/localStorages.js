export const setToken = (value) => {
  localStorage.setItem('TOKEN', value)
}

export const getToken = () => {
  return JSON.parse(localStorage.getItem('TOKEN'))
}
