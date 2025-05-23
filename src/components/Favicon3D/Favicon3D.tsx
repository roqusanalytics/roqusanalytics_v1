import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  ContactShadows,
  Effects,
  Loader
} from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { AnimatedChart } from './AnimatedChart';

// Pagrindinis Favicon3D komponentas
const Favicon3D: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, #0a0a20 0%, #050510 100%)' }}>
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
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      
      {/* Loader kol kraunasi 3D elementai */}
      <Loader 
        containerStyles={{ background: 'radial-gradient(circle, #0a0a20 0%, #050510 100%)' }}
        innerStyles={{ background: '#5CEFFF' }}
        barStyles={{ background: '#B026FF' }}
      />
    </div>
  );
};

export default Favicon3D;