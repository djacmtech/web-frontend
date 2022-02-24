import {useFrame} from "@react-three/fiber";
import {useRef} from "react";

export default function Box() {
  const myMesh = useRef();

  useFrame(({clock}) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a * 0.4;
    myMesh.current.position.y = Math.sin(a * 0.5);
  });

  return (
    <mesh rotation={[-0.3, 28.9, 79.2]} ref={myMesh}>
      <cylinderGeometry attach="geometry" args={[0.5, 0.5, 3, 50, 6]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}
