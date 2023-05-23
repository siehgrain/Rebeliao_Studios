import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const D20Dice = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
          <color attach="background" args={["#255261"]} />
          <Text ref={textRef} fontSize={3} color="white">
            C#
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default D20Dice;
