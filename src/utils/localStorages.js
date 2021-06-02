export const setToken = (value) => {
  localStorage.setItem('TOKEN', value)
}

export const getToken = () => {
  return localStorage.getItem('TOKEN')
}
