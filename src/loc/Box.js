// import {useFrame} from '@react-three/fiber';
import { useRef } from 'react';


export default function Box() {

    const myMesh = useRef()

    function animateBox(event) {
        myMesh.current.rotation.x = event.distance
    }

    return (
        <mesh rotation={[-0.3, 28.9, 79.2]} onPointerOver={animateBox} ref={myMesh}>
            <boxBufferGeometry attach='geometry' args={[1.5, 1.5, 1.5]}/>
            <meshNormalMaterial attach="material"/>
        </mesh>
    )
}