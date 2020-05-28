import React from 'react';
import { connect } from 'react-redux';

import { showPreview } from '../../actions.js'

import { Toolbar } from '../toolbar';

import './previewer.css';

const PreviewerComponent = ({text, onChangePreviewSize, showPreview, showEditor}) => {

  const changeWindowSize = (toggleProp) => {
    return toggleProp ? 'previewer-wrap show' : 'previewer-wrap';
  }

  const hide = (toggleProp) => {
    return toggleProp ? ' hide' : ''
  }

  return (
    <div className={changeWindowSize(showPreview) + hide(showEditor)}>
      <Toolbar name="Previewer" changeSize={() => onChangePreviewSize()} />
      <div id="preview" dangerouslySetInnerHTML={text}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePreviewSize: () => dispatch(showPreview())
  }
}

const Previewer = connect(mapStateToProps, mapDispatchToProps)(PreviewerComponent);

export {
  Previewer
};