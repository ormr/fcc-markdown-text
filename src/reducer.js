import marked from 'marked';

marked.setOptions({
  breaks: true,
});

const initialState = {
  text: { __html: ''},
  showEditor: false,
  showPreview: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_TEXT_DATA':
      const getMarkDownText = (text) => {
        const rawMarkup = marked(text);
        return {__html: rawMarkup};
      };
      return {
        ...state,
        text: getMarkDownText(action.payload)
      };
    case 'SHOW_EDITOR':
      return {
        ...state,
        showEditor: !state.showEditor
      };
    case 'SHOW_PREVIEW':
      return {
        ...state,
        showPreview: !state.showPreview
      };
    default:
      return state;
  }
}

export {
  reducer
};