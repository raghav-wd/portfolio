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
      <S.Header
        data-scroll-class="ani"
        className="head-ani"
        data-scroll
        data-scroll-speed="2"
      >
        Experience
      </S.Header>
    </div>
  );
}

export default Projects;
