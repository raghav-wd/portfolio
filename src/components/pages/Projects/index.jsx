import React, { Suspense, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../../../App.css";
import * as S from "./styles";

function Projects(nest) {
  //   const Model = () => {
  //     const gltf = useGLTF("./assets/models/the_magic_room/scene.gltf", true);
  //     return <primitive object={gltf.scene} dispose={null} />;
  //   };

  return (
    <div data-scroll-section className="Projects page" id="projects">
      <div className="container">
        <S.Header data-scroll-class="ani" className="head" data-scroll>
          Experience
        </S.Header>
      </div>
    </div>
  );
}

export default Projects;
