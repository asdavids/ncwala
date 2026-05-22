import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'

function CountdownBlock({ label, value, position }) {
  const group = useRef()
  const [displayValue, setDisplayValue] = useState(String(value).padStart(2, '0'))
  const [targetRotation, setTargetRotation] = useState(0)
  const [hasUpdated, setHasUpdated] = useState(false)
  const valueString = String(value).padStart(2, '0')

  useEffect(() => {
    if (valueString !== displayValue) {
      setTargetRotation(Math.PI)
      setHasUpdated(false)
    }
  }, [valueString, displayValue])

  useFrame((state, delta) => {
    if (!group.current) return

    const current = group.current.rotation.x
    const speed = 4
    const next = current + (targetRotation - current) * speed * delta
    group.current.rotation.x = next

    if (targetRotation === Math.PI && !hasUpdated && next >= Math.PI / 2) {
      setDisplayValue(valueString)
      setHasUpdated(true)
    }

    if (targetRotation === Math.PI && Math.abs(next - Math.PI) < 0.01) {
      setTargetRotation(0)
    }
  })

  return (
    <group ref={group} position={position}>
      <RoundedBox args={[2.4, 1.3, 0.9]} radius={0.18} smoothness={10}>
        <meshStandardMaterial color="#A57B0A" metalness={0.92} roughness={0.18} emissive="#A57B0A" emissiveIntensity={0.24} />
      </RoundedBox>
      <Text
        position={[0, 0.08, 0.49]}
        fontSize={0.42}
        color="#FAFAFA"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        lineHeight={1}
      >
        {displayValue}
      </Text>
      <Text
        position={[0, -0.4, 0.49]}
        fontSize={0.12}
        color="#FAFAFA"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {label}
      </Text>
    </group>
  )
}

export default function CountdownBlocks({ countdown }) {
  const blocks = useMemo(() => [
    { label: 'Days', value: countdown.days, position: [-4.2, 0, 0] },
    { label: 'Hours', value: countdown.hours, position: [-1.4, 0, 0] },
    { label: 'Minutes', value: countdown.minutes, position: [1.4, 0, 0] },
    { label: 'Seconds', value: countdown.seconds, position: [4.2, 0, 0] },
  ], [countdown])

  return (
    <div className="mx-auto max-w-6xl w-full h-[320px] md:h-[260px] px-2">
      <Canvas camera={{ position: [0, 0, 12], fov: 40 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffd18b" />
        <pointLight position={[-6, 2, 3]} intensity={0.6} color="#A57B0A" />
        <pointLight position={[6, -2, 3]} intensity={0.45} color="#ffffff" />
        <group rotation={[0.14, -0.17, 0]}>
          {blocks.map((block) => (
            <CountdownBlock key={block.label} label={block.label} value={block.value} position={block.position} />
          ))}
        </group>
      </Canvas>
    </div>
  )
}
