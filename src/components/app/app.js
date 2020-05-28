import React from 'react';

import { Editor } from '../editor';
import { Previewer } from '../previewer';

import './app.css';

const App = () => {

  return (
    <React.Fragment>
      <Editor />
      <Previewer />
    </React.Fragment>
  );
}

export {
  App
};