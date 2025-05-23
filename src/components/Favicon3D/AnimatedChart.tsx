import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three';
import * as THREE from 'three';
import { MeshDistortMaterial, MeshWobbleMaterial, Float, Trail, Sparkles } from '@react-three/drei';

// Spalvos iš dizaino dokumentacijos su futuristiniais atspalviais
const BLUE_COLOR = '#94D2FF'; // rgba(148, 210, 255, 1)
const BLUE_GLOW = '#5CEFFF'; // Ryškesnė mėlyna švytėjimui
const PURPLE_COLOR = '#9B6DFF';
const DARK_PURPLE_COLOR = '#7C3AED';
const NEON_BLUE = '#00FFFF';
const NEON_PURPLE = '#B026FF';

export const AnimatedChart: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  const floatingGroup = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Animacijos su react-spring
  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, Math.PI * 2, 0] },
    config: { duration: 20000 },
    loop: true,
  });

  // Hover animacija
  const { scale } = useSpring({
    scale: hovered ? 1.1 : 1,
    config: config.wobbly,
  });

  // Pulsuojantis efektas
  const [pulseIntensity, setPulseIntensity] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIntensity((prev) => (prev + 0.1) % 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Grafiko duomenys su dinamiškesniais aukščiais
  const barData = useMemo(() => [
    { height: 0.6, position: [-0.6, 0.3, 0], speed: 0.3 },
    { height: 1.0, position: [-0.3, 0.5, 0], speed: 0.5 },
    { height: 0.5, position: [0, 0.25, 0], speed: 0.7 },
    { height: 1.2, position: [0.3, 0.6, 0], speed: 0.4 },
    { height: 0.8, position: [0.6, 0.4, 0], speed: 0.6 },
  ], []);

  // Linijos taškai
  const linePoints = useMemo(() => {
    const points = [];
    for (const bar of barData) {
      points.push(
        new THREE.Vector3(
          bar.position[0], 
          bar.height, 
          bar.position[2]
        )
      );
    }
    return points;
  }, [barData]);

  // Linijos geometrija
  const lineGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(linePoints);
    return new THREE.BufferGeometry().setFromPoints(
      curve.getPoints(50)
    );
  }, [linePoints]);

  // Holograminis efektas - tinklelis
  const gridSize = 2;
  const gridDivisions = 20;
  const gridColor = new THREE.Color(NEON_BLUE);

  // Animacija
  useFrame((state) => {
    if (group.current) {
      // Pagrindinis sukimasis
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      // Papildomas svyravimas
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      
      // Dinamiškas stulpelių aukštis
      barData.forEach((bar, index) => {
        if (group.current?.children[index]) {
          const mesh = group.current.children[index] as THREE.Mesh;
          const newHeight = bar.height + Math.sin(state.clock.getElapsedTime() * bar.speed) * 0.1;
          mesh.scale.y = newHeight / bar.height;
          mesh.position.y = newHeight / 2;
        }
      });
    }
    
    if (floatingGroup.current) {
      floatingGroup.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05;
    }
  });

  return (
    <animated.group 
      ref={group} 
      rotation={rotation as any} 
      scale={scale as any}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Holograminis tinklelis */}
      <gridHelper 
        args={[gridSize, gridDivisions, gridColor, gridColor]} 
        position={[0, -0.05, 0]} 
        rotation={[0, 0, 0]}
      >
        <meshBasicMaterial 
          color={NEON_BLUE} 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending}
        />
      </gridHelper>
      
      {/* Stulpeliai su futuristiniais efektais */}
      {barData.map((bar, index) => (
        <group key={index}>
          <Trail 
            width={0.15} 
            length={4} 
            color={BLUE_GLOW} 
            attenuation={(t) => t * t}
          >
            <mesh 
              position={[bar.position[0], bar.height / 2, bar.position[2]]}
              castShadow
            >
              <boxGeometry args={[0.15, bar.height, 0.15]} />
              <MeshDistortMaterial
                color={BLUE_COLOR}
                distort={0.2} // Distortion amount
                speed={2} // Animation speed
                metalness={0.8}
                roughness={0.1}
                emissive={BLUE_GLOW}
                emissiveIntensity={0.5 + pulseIntensity * 0.5}
              />
            </mesh>
          </Trail>
          
          {/* Švytintis efektas aplink stulpelius */}
          <mesh 
            position={[bar.position[0], bar.height / 2, bar.position[2]]}
            scale={[1.2, 1.2, 1.2]}
          >
            <boxGeometry args={[0.15, bar.height, 0.15]} />
            <meshBasicMaterial 
              color={BLUE_GLOW} 
              transparent 
              opacity={0.2} 
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}

      {/* Linija virš stulpelių su švytėjimu */}
      <group ref={floatingGroup}>
        <line geometry={lineGeometry}>
          <lineBasicMaterial 
            color={NEON_PURPLE} 
            linewidth={2} 
            blending={THREE.AdditiveBlending}
          />
        </line>
        
        {/* Švytinti linija */}
        <line geometry={lineGeometry}>
          <lineBasicMaterial 
            color={PURPLE_COLOR} 
            linewidth={4} 
            transparent 
            opacity={0.5} 
            blending={THREE.AdditiveBlending}
          />
        </line>

        {/* Apskritimas kiekviename linijos taške su švytėjimu */}
        {linePoints.map((point, index) => (
          <group key={`point-${index}`}>
            <Float 
              speed={2} 
              rotationIntensity={0.5} 
              floatIntensity={0.5}
              position={[point.x, point.y, point.z]}
            >
              <Trail 
                width={0.1} 
                length={8} 
                color={NEON_PURPLE} 
                attenuation={(t) => t * t}
              >
                <mesh castShadow>
                  <sphereGeometry args={[0.05, 16, 16]} />
                  <MeshWobbleMaterial 
                    color={DARK_PURPLE_COLOR} 
                    emissive={NEON_PURPLE}
                    emissiveIntensity={0.8 + pulseIntensity * 0.5}
                    factor={0.2} // Wobble factor
                    speed={2} // Wobble speed
                    metalness={1}
                    roughness={0}
                  />
                </mesh>
              </Trail>
              
              {/* Švytintis efektas aplink tašką */}
              <mesh scale={[2, 2, 2]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial 
                  color={NEON_PURPLE} 
                  transparent 
                  opacity={0.3} 
                  blending={THREE.AdditiveBlending}
                />
              </mesh>
            </Float>
          </group>
        ))}
      </group>

      {/* Dalelių sistema aplink grafiką */}
      <Sparkles 
        count={50} 
        scale={[2, 2, 2]} 
        size={0.5} 
        speed={0.3} 
        color={NEON_BLUE} 
      />
      
      {/* Futuristinis pagrindas */}
      <mesh 
        position={[0, -0.05, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial 
          color="#101020" 
          transparent
          opacity={0.7}
          metalness={0.9}
          roughness={0.1}
          emissive={BLUE_GLOW}
          emissiveIntensity={0.2 + pulseIntensity * 0.2}
        />
      </mesh>
      
      {/* Holograminis cilindras aplink visą grafiką */}
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 2, 32, 1, true]} />
        <meshBasicMaterial 
          color={NEON_BLUE} 
          transparent 
          opacity={0.1} 
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
          wireframe={true}
        />
      </mesh>
    </animated.group>
  );
};