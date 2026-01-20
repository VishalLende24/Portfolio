import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useTheme } from '@mui/material/styles'

function ParticleField({ color }) {
  const ref = useRef()
  
  // Generate random points in a sphere shell
  const positions = useMemo(() => {
    const count = 4000
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        // Random point on sphere surface (roughly) or inside
        const r = 1.2 + Math.random() * 0.5 // Radius range
        const theta = 2 * Math.PI * Math.random()
        const phi = Math.acos(2 * Math.random() - 1)
        
        const x = r * Math.sin(phi) * Math.cos(theta)
        const y = r * Math.sin(phi) * Math.sin(theta)
        const z = r * Math.cos(phi)
        
        pos[i*3] = x
        pos[i*3+1] = y
        pos[i*3+2] = z
    }
    return pos
  }, [])

  useFrame((_state, delta) => {
    if (ref.current) {
        // Slow rotation for "galaxy" feel
        ref.current.rotation.x -= delta / 15
        ref.current.rotation.y -= delta / 20
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  )
}

export default function TechBackground() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  
  // Dynamic color based on theme
  const particleColor = isDark ? '#00f0ff' : '#000000' // Cyan for dark mode tech feel
  
  return (
    <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1,
        pointerEvents: 'none',
        background: isDark ? 'radial-gradient(circle at 50% 50%, #111111 0%, #000000 100%)' : '#ffffff'
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField color={particleColor} />
      </Canvas>
    </div>
  )
}
