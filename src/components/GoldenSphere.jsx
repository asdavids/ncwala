import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AdditiveBlending } from 'three'

function FloatingSphere() {
  const group = useRef(null)

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.25
    group.current.rotation.x += delta * 0.08
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.25
  })

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.18, 64, 64]} />
        <meshBasicMaterial
          color="#A57B0A"
          transparent
          opacity={0.16}
          blending={AdditiveBlending}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#A57B0A"
          metalness={0.9}
          roughness={0.22}
          emissive="#A57B0A"
          emissiveIntensity={0.35}
        />
      </mesh>
    </group>
  )
}

export default function GoldenSphere() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 opacity-90">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.45} />
          <directionalLight position={[5, 5, 3]} intensity={1} color="#fde09e" />
          <pointLight position={[-4, 1, 3]} intensity={0.8} color="#A57B0A" />
          <FloatingSphere />
        </Canvas>
      </div>
    </div>
  )
}
