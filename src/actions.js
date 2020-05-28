const transferData = (payload) => {
  return {
    type: 'GET_TEXT_DATA',
    payload
  }
}

const showEditor = () => {
  return {
    type: 'SHOW_EDITOR'
  }
}

const showPreview = () => {
  return {
    type: 'SHOW_PREVIEW'
  }
}
export {
  transferData,
  showEditor,
  showPreview
};