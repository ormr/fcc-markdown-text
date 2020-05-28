import React, { useState } from 'react';
import './toolbar.css';

const Toolbar = ({ name, changeSize }) => {
  const [ toggle, setToggle] = useState(false);

  const onButtonClick = () => {
    setToggle(!toggle);
    changeSize();
  }

  const toggleIcon = (toggle) => {
    return toggle ? <i className="fa fa-compress"></i> : <i className="fa fa-arrows-alt"></i>;
  }

  return (
    <div className="tool-bar d-flex justify-content-between">
      <div className="tool-bar--name">
        <i title="no-stack-dub-sack" className="fa fa-free-code-camp"></i>
        {name}
      </div>
      <button
      className="tool-bar--button"
      onClick={onButtonClick}>{toggleIcon(toggle)}</button>      
    </div>
  );
}


export { Toolbar };