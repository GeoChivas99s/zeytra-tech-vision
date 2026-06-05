import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

const OrbitCore = () => {
  const shellRef = useRef<Group>(null);
  const knotRef = useRef<Mesh>(null);
  const ringRefs = useRef<Group[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (shellRef.current) {
      shellRef.current.rotation.y = time * 0.2;
      shellRef.current.rotation.x = Math.sin(time * 0.25) * 0.12;
    }

    if (knotRef.current) {
      knotRef.current.rotation.x = time * 0.4;
      knotRef.current.rotation.y = time * 0.35;
    }

    ringRefs.current.forEach((ring, index) => {
      ring.rotation.z = time * (0.1 + index * 0.06);
      ring.rotation.x = Math.sin(time * 0.2 + index) * 0.5;
    });
  });

  return (
    <group ref={shellRef}>
      <mesh ref={knotRef}>
        <torusKnotGeometry args={[0.9, 0.22, 180, 24, 2, 5]} />
        <meshStandardMaterial
          color="#56d6ff"
          emissive="#56d6ff"
          emissiveIntensity={0.55}
          roughness={0.15}
          metalness={0.45}
          wireframe
        />
      </mesh>

      {[1.35, 1.8, 2.2].map((radius, index) => (
        <group
          key={radius}
          ref={(node) => {
            if (node) {
              ringRefs.current[index] = node;
            }
          }}
          rotation={[index * 0.7, index * 0.3, index * 0.2]}
        >
          <mesh>
            <torusGeometry args={[radius, 0.018, 16, 180]} />
            <meshStandardMaterial
              color={index === 2 ? "#ff9b55" : "#9be7ff"}
              emissive={index === 2 ? "#ff9b55" : "#9be7ff"}
              emissiveIntensity={0.7}
              transparent
              opacity={0.7}
            />
          </mesh>
        </group>
      ))}

      {Array.from({ length: 18 }).map((_, index) => {
        const angle = (index / 18) * Math.PI * 2;
        const radius = 2.45 + (index % 3) * 0.15;

        return (
          <mesh
            key={index}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 1.4) * 0.7,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshStandardMaterial
              color={index % 4 === 0 ? "#ff9b55" : "#c4f4ff"}
              emissive={index % 4 === 0 ? "#ff9b55" : "#c4f4ff"}
              emissiveIntensity={1.1}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#04080d", 5, 11]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 6]} intensity={1.4} color="#7ae3ff" />
        <pointLight position={[-4, -2, 3]} intensity={1.1} color="#ff9b55" />
        <OrbitCore />
      </Canvas>
    </div>
  );
};

export default HeroScene;
