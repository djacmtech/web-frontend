export default function Ring() {

    return (
        <mesh rotation={[-0.3, 28.9, 79.2]}>
            <torusBufferGeometry attach='geometry' args={[1.5, 0.3, 16, 100, 3]}/>
            <meshNormalMaterial attach="material"/>
        </mesh>
    )
}