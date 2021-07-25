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
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import Scrollspy from "./components/common/Navbar/Scrollspy/";

function App() {
  const Model = () => {
    const gltf = useGLTF("./assets/models/the_magic_room/scene.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
  };

  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    console.log("Scroll: " + scroll);
  }, [scroll]);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 1,
        // ... all available Locomotive Scroll instance options
      }}
      watch={[scroll]}
    >
      <div data-scroll-container className="App">
        <main>
          {/* <Scrollspy /> */}
          <Home />
          <Projects />
          <Projects />
        </main>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
