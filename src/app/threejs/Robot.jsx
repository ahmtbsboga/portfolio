"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

function Model({ isWaving, onClick }) {
  const group = useRef();
  const { scene } = useGLTF("/robot.glb");

  useFrame((state) => {
    if (isWaving && group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 3) * 0.2;
    }
  });

  return (
    <group ref={group} onClick={onClick} dispose={null}>
      <primitive object={scene} scale={[8.5, 6.4, 6.5]} position={[0, -1, 0]} />
    </group>
  );
}

export default function Robot({ onRobotClick, translate, textColor }) {
  const [isWaving, setIsWaving] = useState(false);

  return (
    <div
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[320px] z-[1000]
              border border-white/20 bg-white/50  shadow-xl rounded-3xl 
             flex flex-col justify-between items-center p-4 text-white transition-all duration-300
             hover:shadow-white/40 hover:scale-[1.03] active:scale-[0.97] cursor-grab active:cursor-grabbing gap-4"
      title="Click the robot to contact me"
    >
      <p
        className="text-xl text-start border-b w-full leading-snug"
        style={{ color: textColor }}
      >
        {translate ? "Robotu döndür, tıkla" : "Rotate, click,"}
      </p>

      <Canvas
        camera={{ position: [1, 1, 2], fov: 60 }}
        onPointerEnter={() => setIsWaving(true)}
        onPointerLeave={() => setIsWaving(false)}
      >
        <Suspense fallback={<Html>Loading...</Html>}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} />
          <Model isWaving={isWaving} onClick={onRobotClick} />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={true}
          enablePan={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>

      <p
        className="text-xl text-end leading-snug border-t w-full"
        style={{ color: textColor }}
      >
        {translate ? "  iletişime geç." : " and contact me."}
      </p>
    </div>
  );
}
