import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Planet = () => {
  const planet = useGLTF("./purple_planet/scene.gltf");

  return (
    <primitive
      object={planet.scene}
      scale={1}
      position-y={-0.1}
      position-x={0.6}
    />
  );
};

const Animation = () => {
  return (
    <Canvas
      className="canvas"
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 400,
        position: [-4, 1, 1],
      }}
    >
      <mesh>
        <hemisphereLight intensity={0.3} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
      </mesh>
      <Suspense>
        <OrbitControls 
             autoRotate
             enableZoom={true}
             target={[0 , 0, -0.1]}
        />
        <Planet/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Animation;
