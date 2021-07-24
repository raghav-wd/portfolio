import React, { Suspense, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../../../App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import FeaturedText from "./FeaturedText";
import gsap from "gsap";

function Home() {
  const Model = () => {
    const gltf = useGLTF("./assets/models/the_magic_room/scene.gltf", true);
    return <primitive object={gltf.scene} dispose={null} />;
  };
  const magicRoom = useRef(null);
  // useEffect(() => {
  //   if (magicRoom.current) animate(magicRoom.current);
  //   console.log("hi");
  // }, [magicRoom]);

  const propss = useSpring({
    from: { scale: [1.8, 1.8, 1.8], opacity: 0 },
    to: { scale: [1, 1, 1], opacity: 1 },
  });

  // useFrame((state) => {
  //   magicRoom.current.rotation.y = 0.1;
  // });

  return (
    <div data-scroll-section className="Home page">
      <Canvas camera={{ position: [0, 0, 200], fov: 65 }}>
        <Html fullscreen>
          <FeaturedText />
        </Html>
        <Suspense fallback={null}>
          <animated.mesh
            ref={magicRoom}
            scale={propss.scale}
            rotation={[0, -Math.PI / 4, 0]}
            position={[0, -50, 0]}
          >
            <Model />
          </animated.mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}

function animate(el) {
  gsap.from(el.position, {
    opacity: 0,
    duration: 3,
    y: 70,
    ease: "elastic",
  });
  gsap.from(el.rotation, {
    opacity: 0,
    duration: 3,
    y: -0.1,
    ease: "elastic",
  });
}

// function Rotate(props) {
//   const ref = useRef();
//   useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime));
//   useFrame((state) => {
//     gsap.from(ref.current.rotation, {
//       opacity: 0,
//       duration: 3,
//       y: 70,
//       ease: "elastic",
//     });
//   });
//   return <group ref={ref} {...props} />;
// }

export default Home;
