import React, { Suspense, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../../../App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import FeaturedText from "./FeaturedText";

function Home(nest) {
  const Model = () => {
    const gltf = useGLTF("./assets/models/the_magic_room/scene.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
  };

  return (
    <div data-scroll-section className="Home page">
      <Canvas camera={{ position: [0, 0, 200], fov: 65 }}>
        <Html fullscreen>
          <FeaturedText />
        </Html>
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

export default Home;
