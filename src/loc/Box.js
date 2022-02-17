export default function Box() {


    return (
        <mesh rotation={[-0.3, 28.9, 79.2]} >
            <boxBufferGeometry attach='geometry' args={[1.5, 1.5, 1.5]}/>
            <meshNormalMaterial 
                attach="material"
            />
        </mesh>
    )
}