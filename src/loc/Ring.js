import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

export default function Ring() {
  const myMesh = useRef();

  useFrame(({clock}) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a * 0.4;
    myMesh.current.position.y = Math.cos(a * 0.3);
  });

  return (
    <mesh rotation={[-0.3, 28.9, 79.2]} ref={myMesh}>
      <torusBufferGeometry attach="geometry" args={[1.5, 0.3, 16, 100, 10]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}
