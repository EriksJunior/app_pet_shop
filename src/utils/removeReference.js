export const removeReference = (object) => {
  return JSON.parse(JSON.stringify(object))
}