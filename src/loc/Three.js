import {useFrame} from '@react-three/fiber';
import { useRef } from 'react';


export default function Three() {

    const myMesh = useRef()

    useFrame(({clock})=> {
        const a = clock.getElapsedTime()
        myMesh.current.rotation.x = a
        myMesh.current.rotation.y = a
    })

    return (
        <mesh rotation={[90, 0, 20]} ref={myMesh}>
            <boxBufferGeometry attach="geometry" args={[2,2,2]}/>
            <meshNormalMaterial attach="material"/>
        </mesh>
    )
}