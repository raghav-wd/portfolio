import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/pages/Home/";
import Navbar from "./components/common/Navbar/";
import Projects from "./components/pages/Projects/";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App(nest) {
  const Model = () => {
    const gltf = useGLTF("./assets/models/the_magic_room/scene.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
  };

  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 2,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //...all the dependencies you want to watch to update the scroll
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div className="App">
          <Navbar />
          <Home />
          <Projects />
          <Projects />
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
