import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MainPage = (props) => {

  const [sSideBarExpanded, uSidebBarExpanded] = useState(true)

  useEffect(() => {
    console.log('here')
    uSidebBarExpanded(false)
  },[])

  return <div id="main-page">
    <div id="side-bar" className={`${sSideBarExpanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={() => uSidebBarExpanded(!sSideBarExpanded)}>COLLAPSE</button>
      <h1>Dan Soup</h1>
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>2020 Goals</li>
      </ul>
    </div>
    <div id="content"></div>
  </div>

}

MainPage.propTypes = {

};

export default MainPage;