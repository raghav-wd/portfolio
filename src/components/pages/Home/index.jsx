import React, { Suspense, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../../../App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF, useProgress } from "@react-three/drei";
import { useSpring, Spring, animated } from "@react-spring/three";
import FeaturedText from "./FeaturedText";
import gsap from "gsap";

function Home() {
  const Model = () => {
    const gltf = useGLTF("./assets/models/gr/scene.gltf");
    return <primitive object={gltf.scene} dispose={null} />;
  };

  return (
    <div data-scroll-section className="Home page">
      <Canvas camera={{ position: [0, 0, 5], fov: 65 }}>
        <Html fullscreen></Html>
        <Suspense fallback={null}>
          <animated.mesh
            rotation={[0, -Math.PI / 1.4, 0]}
            position={[2.8, -0.5, 0]}
          >
            <Model />
          </animated.mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}

// function animate(el) {
//   gsap.from(el.position, {
//     opacity: 0,
//     duration: 3,
//     y: 70,
//     ease: "elastic",
//   });
//   gsap.from(el.rotation, {
//     opacity: 0,
//     duration: 3,
//     y: -0.1,
//     ease: "elastic",
//   });
// }

// function Rotate(props) {
//   const ref = useRef();
//   useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime));
//   return <group ref={ref} {...props} />;
// }

export default Home;
