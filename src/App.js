import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import Navbar from "./components/common/Navbar/";

function App(nest) {
  const Model = () => {
    const gltf = useGLTF("./assets/models/the_magic_room/scene.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
  };

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
