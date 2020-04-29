import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FullPageView from '../common/FullPageView';

function ProjectPreview (props) {
  const {display = false} = props;
  const [sShow, uShow] = useState(display);
  const {title, img} = props;
  return <>
    <div onClick={() => {uShow(true)}} className="text-container project-preview">
      <div className="img-container"><img src={img}/></div>
      <h1>{title}</h1>
    </div>
    {sShow && <FullPageView title={title} onClose={() => uShow(false)}>{props.children}</FullPageView>}
  </>
}

function Projects () {

  return <div className="page">
    {/* <div className="flex-row text-container">
      <button>All</button>
      <button>Websites</button>
    </div> */}
    <div className="project-container">
      <ProjectPreview img="./src/assets/images/codeAndStuffPreview.png" title="Code and Stuff">
        <p>This is text</p>
      </ProjectPreview>
      <ProjectPreview img="./src/assets/images/vinnieVolePreview.png" title="Vinnie Vole's Eternal Ennui">
        <p><i>Vinnie Vole's Eternal Ennui</i> is my first attempt at making a videogame.</p>
      </ProjectPreview>
      <ProjectPreview img="./src/assets/images/teamHeirPreview.png" title="Team Heir" display={true}>
        <div className="image-carousel">
          <div className="image-container">
            <img src="./src/assets/images/teamHeirPreview.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/horizontal.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/vertical.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/teamHeirPreview.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/horizontal.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/vertical.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/teamHeirPreview.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/horizontal.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/vertical.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/teamHeirPreview.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/horizontal.png"></img>
          </div>
          <div className="image-container">
            <img src="./src/assets/images/vertical.png"></img>
          </div>
        </div>
        <p>Team Heir events.</p>
      </ProjectPreview>
    </div>
  </div>;
};

Projects.propTypes = {

};

export default Projects;