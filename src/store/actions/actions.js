export const loading = () => {
  return { type: 'LOADING'}
}
export const upAsnc = (val) => {
  return { type: "UP", val: val }
}
export const up = (val) => {
  return dispach => {
    val++
    dispach(loading())
    setTimeout(() => {
      dispach(upAsnc(val))
    }, 5000)
  }
}

export const down = (val) => {
  return { type: "DOWN", val: val}
}