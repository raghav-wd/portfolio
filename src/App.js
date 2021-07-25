import logo from "./logo.svg";
import "./App.css";
import "./locomotive-scroll.css";
import React, { Suspense, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/pages/Home/";
import Navbar from "./components/common/Navbar/";
import Projects from "./components/pages/Projects/";
import Scrollspy from "./components/common/Navbar/Scrollspy/";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const Model = () => {
    const gltf = useGLTF("./assets/models/the_magic_room/scene.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
  };

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  }, []);

  return (
    <main>
      <div data-scroll-container className="App">
        {/* <Scrollspy /> */}
        <Home />
        {/* <Projects />
        <Projects /> */}
        <div data-scroll-section className="Projects page" id="projects">
          <h2
            data-scroll-class="ani"
            className="head"
            data-scroll
            data-scroll-speed="2"
          >
            Experience
          </h2>
        </div>
      </div>
    </main>
  );
}

export default App;
