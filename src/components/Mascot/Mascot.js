import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

function Scene({ canvasRef, setText, setCanvasHovered, location, ...props }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [canvasCenter, setCanvasCenter] = useState({ x: 0, y: 0 });
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/vaccum_cleaner.gltf");
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    group.current.rotation.x = (mousePos.y - canvasCenter.y) * 0.0005;
    group.current.rotation.y = (mousePos.x - canvasCenter.x) * 0.0005;
  });

  useEffect(() => {
    console.log(actions, actions["EmptyAction"]);
    actions["EmptyAction"]?.play();
    document.onmousemove = function (event) {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    // calculate center of canvas
    const canvas = canvasRef.current;
    let rect = canvas.getBoundingClientRect();
    setCanvasCenter({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / -2,
    });
    if (location === "/" && canvasRef.current !== null) {
      document.onscroll = function () {
        if (canvasRef.current !== null) {
          rect = canvasRef.current.getBoundingClientRect();
          setCanvasCenter({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          });
        }
      };
    }
    return () => {
      document.onmousemove = null;
      document.onscroll = null;
    };
  }, [actions, canvasRef, location]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={() => setCanvasHovered(true)}
      onPointerOut={() => {
        setCanvasHovered(false);
        setText("Hello! I am Mr. Vacuum!");
      }}
      onClick={() => setText("Welcome to SOLO FACILITIES!")}
    >
      <group name="Scene">
        <group name="Armature" position={[0.01, 0.2, 0.9]}>
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.neutral_bone} />
          <skinnedMesh
            name="pCylinder6"
            geometry={nodes.pCylinder6.geometry}
            material={materials.lambert2}
            skeleton={nodes.pCylinder6.skeleton}
          />
        </group>
        <group name="Empty" position={[1, 1, 5]} />
      </group>
    </group>
  );
}

const Mascot = ({ location }) => {
  const canvasRef = useRef();
  const [canvasHovered, setCanvasHovered] = useState(false);
  const [text, setText] = useState("Hello! I am Mr. Vacuum!");

  return (
    <>
      {canvasHovered && (
        <div
          className="absolute animate-fadeUp text-xl text-black text-center top-10 flex justify-center"
          style={{ width: canvasRef.current?.clientWidth || 300 }}
        >
          <span
            className={`rounded-lg p-2 z-50 backdrop-filter backdrop-blur-xl ${
              text.startsWith("Hello") ? "text-black" : "text-red-600"
            }`}
          >
            {text}
          </span>
        </div>
      )}
      <Canvas
        ref={canvasRef}
        shadows
        style={{ height: "100%" }}
        camera={{ position: [2, 2, 20] }}
      >
        <directionalLight
          intensity={1.3}
          position={[200, 400, 400]}
          color={"#C097DE"}
        />
        <directionalLight
          intensity={0.7}
          position={[-100, -200, 200]}
          color={"#C097DE"}
        />
        <Suspense fallback={"Loading"}>
          <Scene
            setCanvasHovered={setCanvasHovered}
            setText={setText}
            canvasRef={canvasRef}
            scale={8.6}
            location={location}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Mascot;
