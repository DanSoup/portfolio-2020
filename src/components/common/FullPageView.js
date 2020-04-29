import React, {useState} from 'react';

function FullPageView ({children, onClose = () => {}, title = ''}) {
  const [sHidden, uHidden] = useState(false)
  const triggerClose = e => {
    if (/full-page-view/.test(e.target.className)) onClose()
  }
  return <div onClick={() => uHidden(true)} onTransitionEnd={e => triggerClose(e)} className={`full-page-view ${sHidden ? 'hidden' : ''}`}>
    <div onClick={e => e.stopPropagation()} className="text-container">
      <h1>{title}</h1><button onClick={() => uHidden(true)} className="close-button">X</button>
      {children}
    </div>
  </div>;
};

export default FullPageView;