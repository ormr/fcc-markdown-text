import React, { Fragment } from 'react';
import { transferData, showEditor } from '../../actions.js';
import { connect } from 'react-redux';
import { Toolbar } from '../toolbar';
import './editor.css';

const EditorComponent = ({ onTextareaChange, onChangeEditorSize, showEditor, showPreview }) => {

  const hide = (toggleProp) => {
    if (toggleProp) {
      return ' hide';
    } else {
      return '';
    }
  }
  
  const changeWindowSize = (toggleProp) => {
    if (toggleProp) {
      return 'editor-wrap show';
    } else {
      return 'editor-wrap';
    }
  }

  return (
    <div className={changeWindowSize(showEditor) + hide(showPreview)}>
      <Toolbar name="Editor" changeSize={() => onChangeEditorSize()}/>
      <textarea
        id="editor"
        onChange={e => onTextareaChange(e.target.value)}
        value={onTextareaChange.__html}>
      </textarea>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
}


const mapDispatchToProps = (dispatch) => {
  return {
    onTextareaChange: (payload) => dispatch(transferData(payload)),
    onChangeEditorSize: () => dispatch(showEditor())
  }
}

const Editor = connect(mapStateToProps, mapDispatchToProps)(EditorComponent);

export {
  Editor
};