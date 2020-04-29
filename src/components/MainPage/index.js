import React from 'react';
import {Route, Link, Switch, useLocation} from 'react-router-dom';
import {Transition, CSSTransition, TransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';
import About from '../About/index';
import FrontPage from '../FrontPage/index';
import Blog from '../Blog/index';
import Projects from '../Projects/index';

const MainPage = (props) => {
  let location = useLocation();

  return <div id="main-page">
    <div id="title-bar">
      <Link to="/"><h1>Dan Soup</h1></Link>
      <div id="title-menu">
        {/* <Link to="/blog" className="button">Blog</Link>
        <Link to="/coding">Coding</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/games">Games</Link>
        <Link to="/art">Art</Link>
        <Link to="/about">About</Link> */}
      </div>
    </div>
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          <Route exact path="/">
            <FrontPage/>
          </Route>
          {/* <Route path="/about">
            <About/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route> */}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>

}

MainPage.propTypes = {

};

export default MainPage;