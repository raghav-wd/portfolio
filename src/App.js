import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";

function App(nest) {
  const Model = () => {
    const gltf = useGLTF("./assets/models/the_magic_room/scene.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
  };

  return (
    <div className="App">
      <Canvas camera={{ position: [0, 0, 200], fov: 65 }}>
        <Suspense fallback={null}>
          <mesh rotation={[0, -Math.PI / 4, 0]} position={[0, -50, 0]}>
            <Model />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Rotate(props) {
  const ref = useRef();
  useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime));
  return <group ref={ref} {...props} />;
}

export default App;
