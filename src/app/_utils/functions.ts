const trim = (txt: string) => {
  return txt.replace(/^\s+|\s+$/gm,'')
}
const getDisplayFirstLetterOfName = (txt: string) => {
  const nameArr = trim(txt).split(' ');
    return nameArr[nameArr.length - 1][0] || ''; 
}
export {
  trim,
  getDisplayFirstLetterOfName
}