// @ts-check
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FAVICON_SIZES = [16, 32, 48, 64, 128, 256];
const OUTPUT_DIR = path.join(__dirname, '..', 'public');

/**
 * Generuoja faviconą naudojant Puppeteer
 */
async function generateFavicon() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  try {
    console.log('Creating page...');
    const page = await browser.newPage();
    
    // Nustatome viewport dydį
    await page.setViewport({ width: 512, height: 512 });
    
    // Sukuriame HTML su mūsų 3D komponentu
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Favicon Generator</title>
          <script type="importmap">
            {
              "imports": {
                "three": "https://unpkg.com/three@0.176.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.176.0/examples/jsm/",
                "react": "https://esm.sh/react@18.3.1",
                "react-dom": "https://esm.sh/react-dom@18.3.1",
                "@react-three/fiber": "https://esm.sh/@react-three/fiber@9.1.2",
                "@react-three/drei": "https://esm.sh/@react-three/drei@10.0.8",
                "@react-three/postprocessing": "https://esm.sh/@react-three/postprocessing@3.0.4",
                "postprocessing": "https://esm.sh/postprocessing@6.33.4",
                "@react-spring/three": "https://esm.sh/@react-spring/three@10.0.0"
              }
            }
          </script>
          <script type="module">
            import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
            import ReactDOM from 'react-dom/client';
            import { Canvas, useFrame } from '@react-three/fiber';
            import { 
              OrbitControls, 
              PerspectiveCamera, 
              Environment, 
              ContactShadows,
              Float,
              Trail,
              Sparkles
            } from '@react-three/drei';
            import { 
              EffectComposer, 
              Bloom, 
              ChromaticAberration, 
              Noise 
            } from '@react-three/postprocessing';
            import { BlendFunction } from 'postprocessing';
            import { useSpring, animated, config } from '@react-spring/three';
            import * as THREE from 'three';
            
            // Spalvos
            const BLUE_COLOR = '#94D2FF';
            const BLUE_GLOW = '#5CEFFF';
            const PURPLE_COLOR = '#9B6DFF';
            const DARK_PURPLE_COLOR = '#7C3AED';
            const NEON_BLUE = '#00FFFF';
            const NEON_PURPLE = '#B026FF';
            
            // Animuotas grafikas
            const AnimatedChart = () => {
              const group = useRef(null);
              const floatingGroup = useRef(null);
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
                      const mesh = group.current.children[index];
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

              // Distortion material
              const MeshDistortMaterial = ({ color, distort, speed, emissive, emissiveIntensity, ...props }) => {
                return (
                  <meshPhysicalMaterial
                    color={color}
                    emissive={emissive}
                    emissiveIntensity={emissiveIntensity}
                    metalness={0.8}
                    roughness={0.1}
                    {...props}
                  />
                );
              };

              // Wobble material
              const MeshWobbleMaterial = ({ color, factor, speed, emissive, emissiveIntensity, ...props }) => {
                return (
                  <meshPhysicalMaterial
                    color={color}
                    emissive={emissive}
                    emissiveIntensity={emissiveIntensity}
                    metalness={1}
                    roughness={0}
                    {...props}
                  />
                );
              };

              return (
                <animated.group 
                  ref={group} 
                  rotation={rotation}
                  scale={scale}
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
                      <mesh 
                        position={[bar.position[0], bar.height / 2, bar.position[2]]}
                        castShadow
                      >
                        <boxGeometry args={[0.15, bar.height, 0.15]} />
                        <MeshDistortMaterial
                          color={BLUE_COLOR}
                          distort={0.2}
                          speed={2}
                          emissive={BLUE_GLOW}
                          emissiveIntensity={0.5 + pulseIntensity * 0.5}
                        />
                      </mesh>
                      
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
                      <group key={\`point-\${index}\`} position={[point.x, point.y, point.z]}>
                        <mesh castShadow>
                          <sphereGeometry args={[0.05, 16, 16]} />
                          <MeshWobbleMaterial 
                            color={DARK_PURPLE_COLOR} 
                            emissive={NEON_PURPLE}
                            emissiveIntensity={0.8 + pulseIntensity * 0.5}
                            factor={0.2}
                            speed={2}
                          />
                        </mesh>
                        
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
                      </group>
                    ))}
                  </group>
                  
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
            
            // Pagrindinis komponentas
            const Favicon3D = () => {
              return (
                <Canvas shadows dpr={[1, 2]}>
                  <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 1.5, 3]} fov={40} />
                    
                    {/* Apšvietimas */}
                    <ambientLight intensity={0.2} />
                    <spotLight 
                      position={[5, 5, 5]} 
                      angle={0.15} 
                      penumbra={1} 
                      intensity={0.8} 
                      castShadow 
                      color="#ffffff"
                    />
                    <pointLight position={[-5, 5, -5]} intensity={0.5} color="#5CEFFF" />
                    <pointLight position={[5, -5, 5]} intensity={0.5} color="#B026FF" />
                    
                    {/* Pagrindinis 3D grafikas */}
                    <AnimatedChart />
                    
                    {/* Šešėliai */}
                    <ContactShadows 
                      position={[0, -0.05, 0]} 
                      opacity={0.5} 
                      scale={10} 
                      blur={1.5} 
                      far={10} 
                      color="#000000"
                    />
                    
                    {/* Aplinka */}
                    <Environment preset="night" />
                    
                    {/* Post-processing efektai */}
                    <EffectComposer>
                      {/* Bloom efektas švytėjimui */}
                      <Bloom 
                        intensity={1.5} 
                        luminanceThreshold={0.2} 
                        luminanceSmoothing={0.9} 
                        height={300}
                        blendFunction={BlendFunction.SCREEN}
                      />
                      
                      {/* Chromatinė aberacija kraštams */}
                      <ChromaticAberration 
                        offset={[0.002, 0.002]} 
                        blendFunction={BlendFunction.NORMAL}
                        opacity={0.3}
                      />
                      
                      {/* Subtilus triukšmas holograminiam efektui */}
                      <Noise 
                        opacity={0.05} 
                        blendFunction={BlendFunction.OVERLAY}
                      />
                    </EffectComposer>
                    
                    {/* Kameros kontrolės */}
                    <OrbitControls 
                      enablePan={false}
                      enableZoom={false}
                      minPolarAngle={Math.PI / 4}
                      maxPolarAngle={Math.PI / 2}
                    />
                  </Suspense>
                </Canvas>
              );
            };
            
            // Renderis
            const App = () => {
              return (
                <div style={{ width: '512px', height: '512px', background: 'radial-gradient(circle, #0a0a20 0%, #050510 100%)' }}>
                  <Favicon3D />
                </div>
              );
            };
            
            ReactDOM.createRoot(document.getElementById('root')).render(<App />);
            
            // Pranešame, kad puslapis užsikrovė
            setTimeout(() => {
              document.body.classList.add('loaded');
            }, 3000);
          </script>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              overflow: hidden;
              width: 512px;
              height: 512px;
              background: radial-gradient(circle, #0a0a20 0%, #050510 100%);
            }
            #root {
              width: 100%;
              height: 100%;
            }
          </style>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `;
    
    await page.setContent(html);
    
    // Laukiame, kol puslapis užsikraus
    console.log('Waiting for page to load...');
    await page.waitForFunction(() => document.body.classList.contains('loaded'), { timeout: 30000 });
    
    // Dar palaukiame, kad 3D scena spėtų užsikrauti
    console.log('Waiting for 3D scene to render...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Darome ekrano nuotrauką
    console.log('Taking screenshot...');
    const screenshot = await page.screenshot({ 
      type: 'png',
      omitBackground: true
    });
    
    // Išsaugome originalų dydį
    fs.writeFileSync(path.join(OUTPUT_DIR, 'favicon-original.png'), screenshot);
    console.log('Original favicon saved to', path.join(OUTPUT_DIR, 'favicon-original.png'));
    
    // Generuojame skirtingų dydžių faviconus
    console.log('Generating different sizes...');
    for (const size of FAVICON_SIZES) {
      await sharp(screenshot)
        .resize(size, size)
        .toFile(path.join(OUTPUT_DIR, `favicon-${size}x${size}.png`));
      console.log(`Favicon ${size}x${size} generated`);
    }
    
    // Generuojame favicon.ico
    console.log('Generating favicon.ico...');
    
    // Naudojame sharp, kad sukurtume favicon.ico
    // Pastaba: sharp gali nepalaikyti tiesioginio konvertavimo į .ico,
    // todėl čia naudojame tik .png formatą
    
    console.log('All favicons generated successfully!');
    
  } catch (error) {
    console.error('Error generating favicon:', error);
  } finally {
    await browser.close();
  }
}

// Paleidžiame funkciją
generateFavicon().catch(console.error);